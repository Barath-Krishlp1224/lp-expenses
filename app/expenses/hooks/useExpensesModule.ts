"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { EMPLOYEES } from "../InitialBudget/EmployeesList";
import { WalletKey, WALLETS } from "../InitialBudget/walletType";
import { getMonthStart, INITIAL_ROWS, ROWS_PER_PAGE } from "../constFunctions";
import {
  expenseBelongsToWallet,
  getExpenseAmount,
  getExpenseDisplayName,
  getExpenseTotal,
  getCurrentWeekStart,
  getPaymentTypeValue,
  getWeekLabel,
  getWeekStart,
  INITIAL_AMOUNT_CONSTANT,
  isExpensePaid,
  isExpenseInWeek,
  sortExpensesDescending,
} from "../lib/expense-helpers";
import {
  EditExpenseFields,
  EditingSubtaskState,
  Employee,
  Expense,
  ExpenseFormValues,
  FilterTotals,
  InitialAmountHistoryEntry,
  PaymentMode,
  PaymentType,
  Role,
  Subtask,
} from "../lib/expense-types";

const today = () => new Date().toISOString().slice(0, 10);

const createDefaultFormValues = (): ExpenseFormValues => ({
  shopName: "",
  productName: "",
  description: "",
  quantity: "1",
  unitPrice: "",
  date: today(),
  role: "founder",
  selectedEmployeeId: "",
  paymentMode: "cash",
  paymentType: "",
});

const createDefaultEditFields = (): EditExpenseFields => ({
  shop: "",
  productName: "",
  description: "",
  quantity: "1",
  unitPrice: "",
  date: today(),
  role: "founder",
  paymentMode: "cash",
  paymentType: "",
  employeeId: "",
  employeeName: "",
  attachments: "",
});

function sanitizeExpense(expense: any): Expense {
  const quantity = Number(expense.quantity);
  const resolvedQuantity = Number.isFinite(quantity) && quantity > 0 ? quantity : 1;
  const unitPrice = Number(expense.unitPrice);
  const resolvedUnitPrice =
    Number.isFinite(unitPrice) && unitPrice >= 0
      ? unitPrice
      : Number(expense.amount) / resolvedQuantity || 0;

  return {
    ...expense,
    productName: expense.productName || "",
    description: expense.description || "",
    quantity: resolvedQuantity,
    unitPrice: resolvedUnitPrice,
    amount: getExpenseAmount({
      quantity: resolvedQuantity,
      unitPrice: resolvedUnitPrice,
      amount: Number(expense.amount) || 0,
    } as Expense),
    paid: typeof expense.paid === "boolean" ? expense.paid : false,
    subtasks: Array.isArray(expense.subtasks) ? expense.subtasks : [],
    attachments: Array.isArray(expense.attachments) ? expense.attachments.filter((value: unknown) => typeof value === "string") : [],
    paymentMode: expense.paymentMode === "upi" ? "upi" : "cash",
    paymentType: getPaymentTypeValue(expense.paymentMode === "upi" ? "upi" : "cash", expense.paymentType),
  };
}

export function useExpensesModule() {
  const employees: Employee[] = EMPLOYEES;
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [initialAmountHistory, setInitialAmountHistory] = useState<InitialAmountHistoryEntry[]>([]);
  const [activeWallet, setActiveWallet] = useState<WalletKey | null>(null);
  const [selectedExpenseIds, setSelectedExpenseIds] = useState<string[]>([]);
  const [showCumulativeModal, setShowCumulativeModal] = useState(false);
  const [modalSelectedIds, setModalSelectedIds] = useState<string[]>([]);
  const [showInitialAmountHistory, setShowInitialAmountHistory] = useState(false);
  const [budgetPeriodStart, setBudgetPeriodStart] = useState(() => getMonthStart(today()));
  const [showHistory, setShowHistory] = useState(false);
  const [historyEmployeeId, setHistoryEmployeeId] = useState("");
  const [visibleRowCount, setVisibleRowCount] = useState(INITIAL_ROWS);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [editingSubtask, setEditingSubtask] = useState<EditingSubtaskState | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [subTitle, setSubTitle] = useState("");
  const [subAmount, setSubAmount] = useState("");
  const [subDate, setSubDate] = useState(today());
  const [subEmployeeId, setSubEmployeeId] = useState("");
  const [formValues, setFormValues] = useState<ExpenseFormValues>(createDefaultFormValues);
  const [editExpenseFields, setEditExpenseFields] =
    useState<EditExpenseFields>(createDefaultEditFields);
  const [expenseItems, setExpenseItems] = useState<Array<{
    id: string;
    shopName: string;
    productName: string;
    description: string;
    amount: number;
  }>>([]);

  const [filterRole, setFilterRole] = useState<"all" | Role>("all");
  const [filterStatus, setFilterStatus] = useState<"all" | "paid" | "unpaid">("all");
  const [filterEmployee, setFilterEmployee] = useState("all");
  const [filterShop, setFilterShop] = useState("all");
  const [filterProduct, setFilterProduct] = useState("all");
  const [filterWeek, setFilterWeek] = useState("all");
  const [filterSearch, setFilterSearch] = useState("");
  const [filterFrom, setFilterFrom] = useState("");
  const [filterTo, setFilterTo] = useState("");

  useEffect(() => {
    const fetchInitialAmount = async () => {
      try {
        const res = await fetch("/api/initial-amount");
        const json = await res.json();

        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setInitialAmountHistory(json.data);
          return;
        }
      } catch {
        toast.error("Failed to load initial budget from server.");
      }

      setInitialAmountHistory([
        {
          amount: INITIAL_AMOUNT_CONSTANT,
          date: new Date().toISOString(),
          wallet: "cash",
        },
      ]);
    };

    fetchInitialAmount();
  }, []);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/api/expenses");
        const json = await res.json();
        if (!json.success) {
          throw new Error(json.error || "Failed to load expenses");
        }

        const fetchedExpenses = Array.isArray(json.data) ? json.data.map(sanitizeExpense) : [];
        setExpenses(sortExpensesDescending(fetchedExpenses));
      } catch (err: any) {
        const message = err.message || "Failed to load expenses";
        setError(message);
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  const shopSuggestions = useMemo(() => {
    return Array.from(
      new Set(expenses.map((expense) => expense.shop?.trim()).filter(Boolean))
    ) as string[];
  }, [expenses]);

  const productSuggestions = useMemo(() => {
    return Array.from(
      new Set(expenses.map((expense) => getExpenseDisplayName(expense)).filter(Boolean))
    );
  }, [expenses]);

  const weekOptions = useMemo(() => {
    return Array.from(
      new Set(expenses.map((expense) => expense.weekStart).filter(Boolean))
    )
      .sort((left, right) => new Date(right).getTime() - new Date(left).getTime())
      .map((weekStart) => ({ value: weekStart, label: getWeekLabel(weekStart) }));
  }, [expenses]);

  const filteredExpenses = useMemo(() => {
    return sortExpensesDescending(
      expenses.filter((expense) => {
        const paid = isExpensePaid(expense);
        const productName = getExpenseDisplayName(expense).toLowerCase();
        const search = filterSearch.trim().toLowerCase();

        if (filterRole !== "all" && expense.role !== filterRole) return false;
        if (filterStatus === "paid" && !paid) return false;
        if (filterStatus === "unpaid" && paid) return false;
        if (filterEmployee !== "all" && expense.employeeId !== filterEmployee) return false;
        if (filterShop !== "all" && expense.shop !== filterShop) return false;
        if (filterProduct !== "all" && getExpenseDisplayName(expense) !== filterProduct) return false;
        if (filterWeek !== "all" && !isExpenseInWeek(expense, filterWeek)) return false;
        if (filterFrom && expense.date < filterFrom) return false;
        if (filterTo && expense.date > filterTo) return false;

        if (search) {
          const matchesSearch =
            productName.includes(search) ||
            expense.description.toLowerCase().includes(search) ||
            expense.shop.toLowerCase().includes(search);

          if (!matchesSearch) return false;
        }

        return true;
      })
    );
  }, [
    expenses,
    filterEmployee,
    filterFrom,
    filterProduct,
    filterRole,
    filterSearch,
    filterShop,
    filterStatus,
    filterTo,
    filterWeek,
  ]);

  const visibleExpenses = useMemo(
    () => filteredExpenses.slice(0, visibleRowCount),
    [filteredExpenses, visibleRowCount]
  );

  const historyExpenses = useMemo(
    () => sortExpensesDescending(expenses.filter((expense) => isExpensePaid(expense))),
    [expenses]
  );

  const employeeHistory = useMemo(() => {
    if (!historyEmployeeId) return [];
    return historyExpenses.filter((expense) => expense.employeeId === historyEmployeeId);
  }, [historyEmployeeId, historyExpenses]);

  const employeeHistoryTotal = useMemo(
    () => employeeHistory.reduce((sum, expense) => sum + getExpenseTotal(expense), 0),
    [employeeHistory]
  );

  const filterTotals = useMemo<FilterTotals>(() => {
    const filteredTotal = filteredExpenses.reduce((sum, expense) => sum + getExpenseTotal(expense), 0);
    const selectedProductTotal =
      filterProduct === "all"
        ? filteredTotal
        : expenses
            .filter((expense) => getExpenseDisplayName(expense) === filterProduct)
            .reduce((sum, expense) => sum + getExpenseTotal(expense), 0);
    const selectedWeekTotal =
      filterWeek === "all"
        ? expenses
            .filter((expense) => isExpenseInWeek(expense, getCurrentWeekStart()))
            .reduce((sum, expense) => sum + getExpenseTotal(expense), 0)
        : expenses
            .filter((expense) => isExpenseInWeek(expense, filterWeek))
            .reduce((sum, expense) => sum + getExpenseTotal(expense), 0);

    return {
      filteredTotal,
      selectedProductTotal,
      selectedWeekTotal,
    };
  }, [expenses, filterProduct, filterWeek, filteredExpenses]);

  const currentWeekExpenses = useMemo(
    () => expenses.filter((expense) => isExpenseInWeek(expense, filterWeek === "all" ? getCurrentWeekStart() : filterWeek)),
    [expenses, filterWeek]
  );

  const filteredHistory = useMemo(() => {
    if (!activeWallet) return [];
    return initialAmountHistory.filter((entry) => (entry.wallet || entry.walletType) === activeWallet);
  }, [activeWallet, initialAmountHistory]);

  const walletStats = useMemo(() => {
    const map: Record<
      WalletKey,
      { spent: number; pending: number; remaining: number; initialAmount: number }
    > = {} as Record<
      WalletKey,
      { spent: number; pending: number; remaining: number; initialAmount: number }
    >;

    WALLETS.forEach(({ key }) => {
      const walletHistory = initialAmountHistory
        .filter((entry) => (entry.wallet || entry.walletType) === key)
        .sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime());

      const initialAmount = walletHistory[0]?.amount ?? INITIAL_AMOUNT_CONSTANT;
      let spent = 0;
      let pending = 0;

      expenses
        .filter((expense) => expense.date >= budgetPeriodStart)
        .filter((expense) => expenseBelongsToWallet(expense, key))
        .forEach((expense) => {
          const total = getExpenseTotal(expense);
          if (isExpensePaid(expense)) {
            spent += total;
          } else {
            pending += total;
          }
        });

      map[key] = {
        spent,
        pending,
        remaining: initialAmount - spent,
        initialAmount,
      };
    });

    return map;
  }, [budgetPeriodStart, expenses, initialAmountHistory]);

  useEffect(() => {
    setVisibleRowCount(INITIAL_ROWS);
  }, [
    budgetPeriodStart,
    filterEmployee,
    filterFrom,
    filterProduct,
    filterRole,
    filterSearch,
    filterShop,
    filterStatus,
    filterTo,
    filterWeek,
  ]);

  const addFormTotal = useMemo(
    () =>
      getExpenseAmount({
        quantity: Number(formValues.quantity),
        unitPrice: Number(formValues.unitPrice),
        amount: 0,
      } as Expense),
    [formValues.quantity, formValues.unitPrice]
  );

  const editFormTotal = useMemo(
    () =>
      getExpenseAmount({
        quantity: Number(editExpenseFields.quantity),
        unitPrice: Number(editExpenseFields.unitPrice),
        amount: 0,
      } as Expense),
    [editExpenseFields.quantity, editExpenseFields.unitPrice]
  );

  const loadMoreRows = () => {
    setIsLoadingMore(true);
    window.setTimeout(() => {
      setVisibleRowCount((count) => Math.min(count + ROWS_PER_PAGE, filteredExpenses.length));
      setIsLoadingMore(false);
    }, 300);
  };

  const updateFormValue = <K extends keyof ExpenseFormValues>(key: K, value: ExpenseFormValues[K]) => {
    setFormValues((current) => {
      const next = { ...current, [key]: value };
      if (key === "paymentMode" && value !== "upi") {
        next.paymentType = "";
      }
      if (key === "role" && value !== "manager") {
        next.selectedEmployeeId = "";
      }
      return next;
    });
  };

  const toggleExpand = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
    setSubTitle("");
    setSubAmount("");
    setSubDate(today());
    setSubEmployeeId("");
  };

  const handleRowToggle = (id: string) => {
    setSelectedExpenseIds((current) =>
      current.includes(id) ? current.filter((selectedId) => selectedId !== id) : [...current, id]
    );
  };

  const handleAddToCumulativeTotal = () => {
    if (selectedExpenseIds.length === 0) {
      toast.warn("Select at least one expense");
      return;
    }

    setModalSelectedIds([...selectedExpenseIds]);
    setSelectedExpenseIds([]);
    setShowCumulativeModal(true);
  };

  const handleUpdatePaidStatus = async (expense: Expense, isPaid: boolean, updateSubtasks = true) => {
    const label = getExpenseDisplayName(expense);
    const confirmMessage = `Are you sure you want to mark "${label}" as ${isPaid ? "Done" : "Pending"}?`;
    if (!window.confirm(confirmMessage)) return;

    const updatedSubtasks = updateSubtasks
      ? (expense.subtasks || []).map((subtask) => ({ ...subtask, done: isPaid ? true : subtask.done }))
      : expense.subtasks || [];

    try {
      const res = await fetch("/api/expenses", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: expense._id,
          updates: { paid: isPaid, subtasks: updatedSubtasks },
        }),
      });

      const json = await res.json();
      if (!json.success) {
        toast.error(json.error || "Failed to update status.");
        return;
      }

      setExpenses((current) =>
        sortExpensesDescending(
          current.map((entry) =>
            entry._id === expense._id ? { ...entry, paid: isPaid, subtasks: updatedSubtasks } : entry
          )
        )
      );
      toast.success(`Expense marked as ${isPaid ? "Done" : "Pending"}!`);
    } catch (err: any) {
      toast.error(err.message || "Failed to update status.");
    }
  };

  const handleAddExpense = async (event: React.FormEvent) => {
    event.preventDefault();

    const quantity = Number(formValues.quantity);
    const unitPrice = Number(formValues.unitPrice);
    const expenseAmount = getExpenseAmount({ quantity, unitPrice, amount: 0 } as Expense);

    if (!Number.isFinite(quantity) || quantity <= 0) {
      toast.error("Enter a valid quantity");
      return;
    }

    if (!Number.isFinite(unitPrice) || unitPrice < 0) {
      toast.error("Enter a valid unit price");
      return;
    }

    if (!formValues.date) {
      toast.warn("Date is required.");
      return;
    }

    if (formValues.role === "manager" && !formValues.selectedEmployeeId) {
      toast.warn("Select employee for Manager role.");
      return;
    }

    let wallet: WalletKey;
    if (formValues.paymentMode === "cash") {
      wallet = "cash";
    } else if (formValues.paymentType === "postpaid") {
      wallet = "upi_postpaid";
    } else {
      toast.error("Invalid wallet selected");
      return;
    }

    const itemsTotal = expenseItems.reduce((sum, item) => sum + item.amount, 0);
    const totalAmount = expenseAmount + itemsTotal;
    const remaining = walletStats[wallet]?.remaining ?? 0;
    const pending = walletStats[wallet]?.pending ?? 0;
    const availableBalance = remaining - pending;

    if (wallet !== "upi_postpaid" && totalAmount > availableBalance) {
      toast.error(`Cannot add expense. ${wallet} wallet remaining balance is Rs ${availableBalance.toLocaleString()}`);
      return;
    }

    if (wallet === "upi_postpaid" && formValues.role !== "manager") {
      toast.error("Postpaid expenses can only be added under Manager role.");
      return;
    }

    // Build subtasks from expense items
    const subtasksFromItems: Subtask[] = expenseItems.map((item) => ({
      id: item.id,
      title: item.productName || item.shopName || "Expense item",
      done: false,
      amount: item.amount,
      date: formValues.date,
      ...(item.shopName ? { employeeName: item.shopName } : {}),
    }));

    const payload = {
      shop: formValues.shopName.trim(),
      productName: formValues.productName.trim(),
      description: formValues.description.trim(),
      quantity,
      unitPrice,
      amount: totalAmount,
      date: formValues.date,
      weekStart: getWeekStart(formValues.date),
      role: formValues.role,
      employeeId: formValues.selectedEmployeeId || null,
      employeeName:
        formValues.selectedEmployeeId &&
        EMPLOYEES.find((employee) => employee._id === formValues.selectedEmployeeId)?.name,
      paymentMode: formValues.paymentMode,
      paymentType: formValues.paymentMode === "upi" ? formValues.paymentType : null,
      subtasks: subtasksFromItems,
    };

    try {
      const res = await fetch("/api/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!json.success) {
        toast.error(json.error || "Failed to add expense.");
        return;
      }

      setExpenses((current) => sortExpensesDescending([...current, sanitizeExpense(json.data)]));
      setFormValues(createDefaultFormValues());
      setExpenseItems([]);
      setShowAddForm(false);
      toast.success("Expense added successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to add expense.");
    }
  };

  const handleAddSubtask = async (event: React.FormEvent, parent: Expense) => {
    event.preventDefault();

    if (!expandedId) return;
    if (!subTitle.trim() || !subAmount) {
      toast.warn("Sub description and amount required.");
      return;
    }

    const newSubtask: Subtask = {
      id: Math.random().toString(36).slice(2, 9),
      title: subTitle.trim(),
      done: isExpensePaid(parent),
      amount: Number(subAmount),
      date: subDate,
      employeeId: subEmployeeId || undefined,
      employeeName: subEmployeeId
        ? EMPLOYEES.find((employee) => employee._id === subEmployeeId)?.name
        : undefined,
    };

    const updatedSubtasks = [newSubtask, ...(parent.subtasks || [])];

    try {
      const res = await fetch("/api/expenses", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: parent._id,
          updates: { subtasks: updatedSubtasks, paid: false },
        }),
      });
      const json = await res.json();
      if (!json.success) {
        toast.error(json.error || "Failed to add sub expense.");
        return;
      }

      setExpenses((current) =>
        sortExpensesDescending(
          current.map((expense) =>
            expense._id === parent._id ? { ...expense, subtasks: updatedSubtasks, paid: false } : expense
          )
        )
      );
      setSubTitle("");
      setSubAmount("");
      setSubDate(today());
      setSubEmployeeId("");
      toast.success("Sub expense added successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to add sub expense.");
    }
  };

  const handleUpdateSubtaskStatus = async (parentExpense: Expense, subtaskId: string, isDone: boolean) => {
    const updatedSubtasks = (parentExpense.subtasks || []).map((subtask) =>
      subtask.id === subtaskId ? { ...subtask, done: isDone } : subtask
    );

    try {
      const res = await fetch("/api/expenses", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: parentExpense._id,
          updates: { subtasks: updatedSubtasks },
        }),
      });
      const json = await res.json();
      if (!json.success) {
        toast.error(json.error || "Failed to update subtask status.");
        return;
      }

      const allSubtasksDone = updatedSubtasks.every((subtask) => subtask.done);
      const nextPaidStatus = !parentExpense.paid && allSubtasksDone ? true : parentExpense.paid;

      setExpenses((current) =>
        sortExpensesDescending(
          current.map((expense) =>
            expense._id === parentExpense._id
              ? { ...expense, subtasks: updatedSubtasks, paid: nextPaidStatus }
              : expense
          )
        )
      );

      if (nextPaidStatus !== parentExpense.paid) {
        await handleUpdatePaidStatus({ ...parentExpense, subtasks: updatedSubtasks }, nextPaidStatus, false);
      }

      toast.success("Sub expense status updated!");
    } catch (err: any) {
      toast.error(err.message || "Failed to update subtask status.");
    }
  };

  const handleDeleteSubtask = async (parentExpense: Expense, subtaskId: string) => {
    if (!window.confirm(`Are you sure you want to delete this sub expense from "${getExpenseDisplayName(parentExpense)}"?`)) {
      return;
    }

    const updatedSubtasks = (parentExpense.subtasks || []).filter((subtask) => subtask.id !== subtaskId);

    try {
      const res = await fetch("/api/expenses", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: parentExpense._id,
          updates: { subtasks: updatedSubtasks },
        }),
      });
      const json = await res.json();
      if (!json.success) {
        toast.error(json.error || "Failed to delete sub expense.");
        return;
      }

      setExpenses((current) =>
        sortExpensesDescending(
          current.map((expense) =>
            expense._id === parentExpense._id ? { ...expense, subtasks: updatedSubtasks } : expense
          )
        )
      );
      toast.success("Sub expense deleted successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to delete sub expense.");
    }
  };

  const handleDeleteExpense = async (expense: Expense) => {
    if (!window.confirm(`Are you sure you want to delete "${getExpenseDisplayName(expense)}"? This cannot be undone.`)) {
      return;
    }

    try {
      const res = await fetch("/api/expenses", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: expense._id }),
      });
      const json = await res.json();
      if (!json.success) {
        toast.error(json.error || "Failed to delete expense.");
        return;
      }

      setExpenses((current) => current.filter((entry) => entry._id !== expense._id));
      toast.success("Expense deleted successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to delete expense.");
    }
  };

  const onStartEditExpense = (expense: Expense) => {
    setEditingExpense(expense);
    setEditExpenseFields({
      shop: expense.shop || "",
      productName: expense.productName || "",
      description: expense.description || "",
      quantity: String(expense.quantity || 1),
      unitPrice: String(expense.unitPrice ?? expense.amount),
      date: expense.date || today(),
      role: expense.role || "founder",
      paymentMode: expense.paymentMode || "cash",
      paymentType: getPaymentTypeValue(expense.paymentMode || "cash", expense.paymentType),
      employeeId: expense.employeeId || "",
      employeeName: expense.employeeName || "",
      attachments: (expense.attachments || []).join("\n"),
    });
  };

  const handleSaveEditExpense = async () => {
    if (!editingExpense) return;

    const quantity = Number(editExpenseFields.quantity);
    const unitPrice = Number(editExpenseFields.unitPrice);
    const amount = getExpenseAmount({ quantity, unitPrice, amount: 0 } as Expense);

    if (!Number.isFinite(quantity) || quantity <= 0) {
      toast.warn("Enter a valid quantity.");
      return;
    }

    if (!Number.isFinite(unitPrice) || unitPrice < 0) {
      toast.warn("Enter a valid unit price.");
      return;
    }

    if (editExpenseFields.role === "manager" && !editExpenseFields.employeeId) {
      toast.warn("Employee ID is required for Manager role.");
      return;
    }

    if (editExpenseFields.paymentMode === "upi" && !editExpenseFields.paymentType) {
      toast.warn("Payment Type is required for UPI.");
      return;
    }

    const employeeId = editExpenseFields.employeeId || null;
    const employeeName = employeeId
      ? EMPLOYEES.find((employee) => employee._id === employeeId)?.name || ""
      : null;

    const updates = {
      shop: editExpenseFields.shop.trim(),
      productName: editExpenseFields.productName.trim(),
      description: editExpenseFields.description.trim(),
      quantity,
      unitPrice,
      amount,
      date: editExpenseFields.date,
      weekStart: getWeekStart(editExpenseFields.date),
      role: editExpenseFields.role,
      employeeId,
      employeeName,
      paymentMode: editExpenseFields.paymentMode,
      paymentType: editExpenseFields.paymentMode === "upi" ? editExpenseFields.paymentType : null,
      attachments: editExpenseFields.attachments
        .split(/\n|,/)
        .map((attachment) => attachment.trim())
        .filter(Boolean),
    };

    try {
      const res = await fetch("/api/expenses", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingExpense._id, updates }),
      });
      const json = await res.json();
      if (!json.success) {
        toast.error(json.error || "Failed to update expense.");
        return;
      }

      setExpenses((current) =>
        sortExpensesDescending(
          current.map((expense) =>
            expense._id === editingExpense._id ? sanitizeExpense(json.data) : expense
          )
        )
      );
      setEditingExpense(null);
      toast.success("Expense updated successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to update expense.");
    }
  };

  const handleQuickRenameExpense = async (expense: Expense, productName: string) => {
    const trimmedName = productName.trim();

    try {
      const res = await fetch("/api/expenses", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: expense._id,
          updates: {
            productName: trimmedName,
          },
        }),
      });
      const json = await res.json();
      if (!json.success) {
        toast.error(json.error || "Failed to update product name.");
        return;
      }

      setExpenses((current) =>
        sortExpensesDescending(
          current.map((entry) => (entry._id === expense._id ? sanitizeExpense(json.data) : entry))
        )
      );
      toast.success("Product name updated successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to update product name.");
    }
  };

  const onStartEditSubtask = (parent: Expense, subtask: Subtask) => {
    setEditingSubtask({
      parentId: parent._id,
      subId: subtask.id,
      title: subtask.title,
      amount: String(subtask.amount ?? ""),
      date: subtask.date ?? today(),
      employeeId: subtask.employeeId ?? "",
    });
  };

  const handleSaveEditSubtask = async () => {
    if (!editingSubtask) return;

    const parentExpense = expenses.find((expense) => expense._id === editingSubtask.parentId);
    if (!parentExpense) {
      toast.error("Parent expense not found");
      return;
    }

    const employeeId = editingSubtask.employeeId || undefined;
    const employeeName = employeeId
      ? employees.find((employee) => employee._id === employeeId)?.name
      : undefined;

    const updatedSubtasks = (parentExpense.subtasks || []).map((subtask) =>
      subtask.id === editingSubtask.subId
        ? {
            ...subtask,
            title: editingSubtask.title,
            amount: Number(editingSubtask.amount),
            date: editingSubtask.date,
            employeeId,
            employeeName,
          }
        : subtask
    );

    try {
      const res = await fetch("/api/expenses", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: parentExpense._id,
          updates: { subtasks: updatedSubtasks },
        }),
      });
      const json = await res.json();
      if (!json.success) {
        toast.error(json.error || "Failed to update sub expense.");
        return;
      }

      setExpenses((current) =>
        sortExpensesDescending(
          current.map((expense) =>
            expense._id === parentExpense._id ? { ...expense, subtasks: updatedSubtasks } : expense
          )
        )
      );
      setEditingSubtask(null);
      toast.success("Sub expense updated successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to update sub expense.");
    }
  };

  return {
    employees,
    expenses,
    loading,
    error,
    initialAmountHistory,
    setInitialAmountHistory,
    activeWallet,
    setActiveWallet,
    selectedExpenseIds,
    showCumulativeModal,
    setShowCumulativeModal,
    modalSelectedIds,
    showInitialAmountHistory,
    setShowInitialAmountHistory,
    budgetPeriodStart,
    setBudgetPeriodStart,
    showHistory,
    setShowHistory,
    historyEmployeeId,
    setHistoryEmployeeId,
    visibleRowCount,
    isLoadingMore,
    showAddForm,
    setShowAddForm,
    editingExpense,
    setEditingExpense,
    editingSubtask,
    setEditingSubtask,
    expandedId,
    subTitle,
    setSubTitle,
    subAmount,
    setSubAmount,
    subDate,
    setSubDate,
    subEmployeeId,
    setSubEmployeeId,
    formValues,
    setFormValues,
    updateFormValue,
    editExpenseFields,
    setEditExpenseFields,
    expenseItems,
    setExpenseItems,
    filterRole,
    setFilterRole,
    filterStatus,
    setFilterStatus,
    filterEmployee,
    setFilterEmployee,
    filterShop,
    setFilterShop,
    filterProduct,
    setFilterProduct,
    filterWeek,
    setFilterWeek,
    filterSearch,
    setFilterSearch,
    filterFrom,
    setFilterFrom,
    filterTo,
    setFilterTo,
    shopSuggestions,
    productSuggestions,
    weekOptions,
    filteredExpenses,
    visibleExpenses,
    historyExpenses,
    employeeHistory,
    employeeHistoryTotal,
    filterTotals,
    currentWeekExpenses,
    filteredHistory,
    walletStats,
    addFormTotal,
    editFormTotal,
    loadMoreRows,
    toggleExpand,
    handleRowToggle,
    handleAddToCumulativeTotal,
    handleUpdatePaidStatus,
    handleAddExpense,
    handleAddSubtask,
    handleUpdateSubtaskStatus,
    handleDeleteSubtask,
    handleDeleteExpense,
    onStartEditExpense,
    handleSaveEditExpense,
    handleQuickRenameExpense,
    onStartEditSubtask,
    handleSaveEditSubtask,
    cancelEditExpense: () => setEditingExpense(null),
    cancelEditSubtask: () => setEditingSubtask(null),
  };
}
