"use client";

import React from "react";
import { Employee, ExpenseFormValues } from "../../lib/expense-types";
import ExpenseForm from "../forms/ExpenseForm";

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
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 p-4 backdrop-blur-sm">
      <div className="glass-card relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-sm font-semibold text-slate-500 transition hover:text-slate-900"
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
        />
      </div>
    </div>
  );
};

export default AddExpenseModal;
