"use client";

import React from "react";
import { Employee, ExpenseFormValues } from "../../lib/expense-types";
import ExpenseForm from "../forms/ExpenseForm";

interface ExpenseItem {
  id: string;
  shopName: string;
  productName: string;
  description: string;
  amount: number;
}

interface AddExpenseModalProps {
  show: boolean;
  onClose: () => void;
  formValues: ExpenseFormValues;
  setFormValue: <K extends keyof ExpenseFormValues>(key: K, value: ExpenseFormValues[K]) => void;
  employees: Employee[];
  shops: string[];
  productSuggestions: string[];
  computedTotal: number;
  onSubmit: (e: React.FormEvent) => void;
  expenseItems?: ExpenseItem[];
  onExpenseItemsChange?: (items: ExpenseItem[]) => void;
}

const AddExpenseModal: React.FC<AddExpenseModalProps> = ({
  show,
  onClose,
  formValues,
  setFormValue,
  employees,
  shops,
  productSuggestions,
  computedTotal,
  onSubmit,
  expenseItems = [],
  onExpenseItemsChange,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 p-4 backdrop-blur-sm">
      <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
        >
          ✕
        </button>
        <ExpenseForm
          formValues={formValues}
          setFormValue={setFormValue}
          employees={employees}
          shops={shops}
          productSuggestions={productSuggestions}
          computedTotal={computedTotal}
          onSubmit={onSubmit}
          onCancel={onClose}
          expenseItems={expenseItems}
          onExpenseItemsChange={onExpenseItemsChange}
        />
      </div>
    </div>
  );
};

export default AddExpenseModal;