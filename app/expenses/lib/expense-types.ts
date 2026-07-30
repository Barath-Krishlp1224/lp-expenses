export type Role = "founder" | "manager" | "other";

export type PaymentMode = "cash" | "upi";
export type PaymentType = "postpaid" | "";

export interface Employee {
  _id: string;
  name: string;
}

export interface Subtask {
  id: string;
  title: string;
  done: boolean;
  amount?: number;
  date?: string;
  employeeId?: string;
  employeeName?: string;
}

export interface Expense {
  _id: string;
  shop: string;
  productName?: string;
  description: string;
  quantity?: number;
  unitPrice?: number;
  amount: number;
  date: string;
  weekStart: string;
  role: Role;
  employeeId?: string | null;
  employeeName?: string | null;
  paymentMode: PaymentMode;
  paymentType?: PaymentType | null;
  /** Links to receipts or other supporting documents, when attachments are enabled. */
  attachments?: string[];
  paid: boolean;
  subtasks?: Subtask[];
  createdAt: string;
  updatedAt: string;
}

export interface InitialAmountHistoryEntry {
  walletType?: "cash" | "upi_postpaid";
  wallet?: "cash" | "upi_postpaid";
  amount: number;
  date: string;
}

export interface ExpenseFormValues {
  shopName: string;
  productName: string;
  description: string;
  quantity: string;
  unitPrice: string;
  date: string;
  role: Role;
  selectedEmployeeId: string;
  paymentMode: PaymentMode;
  paymentType: PaymentType;
}

export interface EditExpenseFields {
  shop: string;
  productName: string;
  description: string;
  quantity: string;
  unitPrice: string;
  date: string;
  role: Role;
  paymentMode: PaymentMode;
  paymentType: PaymentType;
  employeeId: string;
  employeeName: string;
  attachments: string;
}

export interface EditingSubtaskState {
  parentId: string;
  subId: string;
  title: string;
  amount: string;
  date: string;
  employeeId?: string;
}

export interface FilterTotals {
  filteredTotal: number;
  selectedProductTotal: number;
  selectedWeekTotal: number;
}
