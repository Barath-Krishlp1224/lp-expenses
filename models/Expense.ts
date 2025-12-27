import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema(
  {
    shopName: String,
    description: String,
    amount: Number,
    category: String,
    date: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: {
      type: String,
      enum: ["PENDING", "APPROVED", "REJECTED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Expense || mongoose.model("Expense", ExpenseSchema);