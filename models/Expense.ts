// models/Expense.ts
import mongoose, { Schema, Document } from "mongoose";

export type Role = "founder" | "manager" | "other";

export interface SubExpense {
  id: string;
  title: string;
  done: boolean;
  amount?: number;
  date?: string;
  employeeId?: string;
  employeeName?: string;
}

export interface IExpense extends Document {
  productName?: string;
  description: string;
  quantity?: number;
  unitPrice?: number;
  amount: number;
  date: string;
  createdAt: Date;
  shop: string;
  paid: boolean;
  weekStart: string;
  subtasks: SubExpense[];
  role: Role;
  employeeId?: string;
  employeeName?: string;
  paymentMode: string;
  paymentType?: string;
  attachments?: string[];
}

const SubExpenseSchema = new Schema<SubExpense>(
  {
    id: { type: String, required: true },
    title: { type: String, required: true, trim: true },
    done: { type: Boolean, default: false },
    amount: { type: Number, required: false },
    date: { type: String, required: false },
    employeeId: { type: String, required: false },
    employeeName: { type: String, required: false, trim: true },
  },
  { _id: false }
);

const ExpenseSchema = new Schema<IExpense>(
  {
    productName: { type: String, default: "", trim: true },
    description: { type: String, default: "", trim: true },
    quantity: { type: Number, required: false, default: 1 },
    unitPrice: { type: Number, required: false, default: 0 },
    amount: { type: Number, required: true },
    date: { type: String, required: true },
    shop: { type: String, default: "", trim: true },
    paid: { type: Boolean, default: false },
    weekStart: { type: String, required: true },
    subtasks: { type: [SubExpenseSchema], default: [] },
    role: {
      type: String,
      enum: ["founder", "manager", "other"],
      default: "other",
    },
    employeeId: { type: String, required: false },
    employeeName: { type: String, required: false, trim: true },
    paymentMode: { type: String, required: true },
    paymentType: { type: String, required: false },
    attachments: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.models.Expense ||
  mongoose.model<IExpense>("Expense", ExpenseSchema);
