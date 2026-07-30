import { Expense, PaymentMode, Subtask } from "./expense-types";

export interface ExpenseBreakdownItem {
  id: string;
  amount: number;
  label: string;
  details: string;
}

export const INITIAL_AMOUNT_CONSTANT = 500000;

export function formatDate(dateString: string | undefined): string {
  if (!dateString) return "-";

  try {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return dateString;

    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(/\s/g, "-");
  } catch {
    return dateString;
  }
}

export function getWeekStart(dateString: string): string {
  // Parse date-only values locally so a dashboard week never shifts with UTC offsets.
  const date = new Date(`${dateString}T00:00:00`);
  const day = date.getDay();
  const diff = date.getDate() - day;
  date.setDate(diff);
  return toLocalDateString(date);
}

export function toLocalDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getCurrentWeekStart(referenceDate = new Date()): string {
  return getWeekStart(toLocalDateString(referenceDate));
}

export function isExpenseInWeek(expense: Pick<Expense, "date">, weekStart: string): boolean {
  if (!expense.date || !weekStart) return false;
  const start = new Date(`${weekStart}T00:00:00`);
  if (Number.isNaN(start.getTime())) return false;
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  const date = new Date(`${expense.date}T00:00:00`);
  return date >= start && date <= end;
}

export function roundCurrency(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function parsePositiveNumber(value: string | number | undefined | null) {
  const parsed =
    typeof value === "number" ? value : Number(typeof value === "string" ? value.trim() : value);

  if (!Number.isFinite(parsed) || parsed < 0) {
    return 0;
  }

  return parsed;
}

export function getExpenseQuantity(expense: Pick<Expense, "quantity" | "amount" | "unitPrice">) {
  const quantity = parsePositiveNumber(expense.quantity);
  return quantity > 0 ? quantity : 1;
}

export function getExpenseUnitPrice(expense: Pick<Expense, "quantity" | "amount" | "unitPrice">) {
  const unitPrice = parsePositiveNumber(expense.unitPrice);
  if (unitPrice > 0 || parsePositiveNumber(expense.amount) === 0) {
    return unitPrice;
  }

  const quantity = getExpenseQuantity(expense);
  const amount = parsePositiveNumber(expense.amount);
  return quantity > 0 ? roundCurrency(amount / quantity) : amount;
}

export function getExpenseAmount(expense: Pick<Expense, "quantity" | "unitPrice" | "amount">) {
  const quantity = getExpenseQuantity(expense);
  const unitPrice = getExpenseUnitPrice(expense);
  return roundCurrency(quantity * unitPrice);
}

export function getSubtasksTotal(subtasks: Subtask[] | undefined) {
  return roundCurrency(
    (subtasks || []).reduce((sum, subtask) => sum + parsePositiveNumber(subtask.amount), 0)
  );
}

export function getExpenseTotal(expense: Expense) {
  return roundCurrency(getExpenseAmount(expense) + getSubtasksTotal(expense.subtasks));
}

export function getExpenseBreakdown(expense: Expense): ExpenseBreakdownItem[] {
  const mainAmount = getExpenseAmount(expense);
  const mainLabel = getExpenseDisplayName(expense);
  const mainDescription = expense.description?.trim();

  const items: ExpenseBreakdownItem[] = [
    {
      id: `${expense._id}-main`,
      amount: mainAmount,
      label: mainLabel,
      details:
        mainDescription && mainDescription !== mainLabel
          ? `${mainLabel} - ${mainDescription}`
          : mainLabel,
    },
  ];

  (expense.subtasks || []).forEach((subtask, index) => {
    const amount = roundCurrency(parsePositiveNumber(subtask.amount));
    if (amount <= 0) return;

    const detailParts = [subtask.title?.trim() || `Sub expense ${index + 1}`];
    if (subtask.employeeName?.trim()) {
      detailParts.push(`Assigned to ${subtask.employeeName.trim()}`);
    }
    if (subtask.date?.trim()) {
      detailParts.push(`Date ${formatDate(subtask.date)}`);
    }

    items.push({
      id: `${expense._id}-sub-${subtask.id || index}`,
      amount,
      label: subtask.title?.trim() || `Sub expense ${index + 1}`,
      details: detailParts.join(" | "),
    });
  });

  return items;
}

export function isExpensePaid(expense: Pick<Expense, "paid" | "subtasks">) {
  if (expense.paid) return true;
  if (!expense.subtasks || expense.subtasks.length === 0) return false;
  return expense.subtasks.every((subtask) => subtask.done);
}

export function getExpenseDisplayName(expense: Pick<Expense, "productName" | "description" | "shop">) {
  return (
    expense.productName?.trim() ||
    expense.description?.trim() ||
    expense.shop?.trim() ||
    "Untitled expense"
  );
}

export function sortExpensesDescending(expenses: Expense[]) {
  return [...expenses].sort((left, right) => {
    const rightDate = new Date(`${right.date}T00:00:00`).getTime();
    const leftDate = new Date(`${left.date}T00:00:00`).getTime();

    if (rightDate !== leftDate) {
      return rightDate - leftDate;
    }

    return new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime();
  });
}

export function getWeekLabel(weekStart: string) {
  if (!weekStart) return "Unknown week";

  const start = new Date(`${weekStart}T00:00:00`);
  if (Number.isNaN(start.getTime())) return weekStart;

  const end = new Date(start);
  end.setDate(start.getDate() + 6);

  return `${formatDate(weekStart)} to ${formatDate(end.toISOString().slice(0, 10))}`;
}

export function expenseBelongsToWallet(
  expense: Pick<Expense, "paymentMode" | "paymentType">,
  wallet: "cash" | "upi_postpaid"
) {
  if (wallet === "cash") {
    return expense.paymentMode === "cash";
  }

  return expense.paymentMode === "upi" && expense.paymentType === "postpaid";
}

export function getPaymentTypeValue(paymentMode: PaymentMode, paymentType: string | null | undefined) {
  if (paymentMode !== "upi") return "";
  return paymentType === "postpaid" ? "postpaid" : "";
}
