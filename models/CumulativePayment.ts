// models/CumulativePayment.ts
import mongoose, { Schema, Document, model } from "mongoose";

export interface ICumulativePayment extends Document {
  paymentDate: string; // YYYY-MM-DD
  paymentTime: string; // HH:mm
  paidBy?: string;
  totalAmount: number;
  expenseIds: string[]; // references to Expense _id
  createdAt: Date;
  updatedAt: Date;
  paymentId:string;
}

const CumulativePaymentSchema: Schema<ICumulativePayment> = new Schema(
  {
    paymentDate: { type: String, required: true },
    paymentTime: { type: String, required: true },
    paidBy: { type: String },
    totalAmount: { type: Number, required: true },
    expenseIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Expense" }],
  },
  { timestamps: true }
);

export default mongoose.models.CumulativePayment ||
  model<ICumulativePayment>("CumulativePayment", CumulativePaymentSchema);
