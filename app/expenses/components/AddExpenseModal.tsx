"use client";

import React from "react";
import ExpenseForm from "./ExpenseForm";
import { type Role, type Employee } from "./types";

interface AddExpenseModalProps {
  show: boolean;
  onClose: () => void;
  shopName: string;
  setShopName: (v: string) => void;
  date: string;
  setDate: (v: string) => void;
  description: string;
  setDescription: (v: string) => void;
  amount: string;
  setAmount: (v: string) => void;
  role: Role;
  setRole: (r: Role) => void;
  selectedEmployeeId: string;
  setSelectedEmployeeId: (id: string) => void;
  paymentMode: "cash" | "upi";
  setPaymentMode: (v: "cash" | "upi") => void;
  paymentType: "postpaid" | "";
  setPaymentType: (v:  "postpaid" | "") => void;
  employees: Employee[];
  shops: string[];
  onSubmit: (e: React.FormEvent) => void;
}

const AddExpenseModal: React.FC<AddExpenseModalProps> = ({
  show,
  onClose,
  ...formProps
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-white/90 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl w-full relative border-2 border-gray-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold"
        >
          ✕
        </button>
        <ExpenseForm {...formProps} onCancel={onClose} />
      </div>
    </div>
  );
};

export default AddExpenseModal;
