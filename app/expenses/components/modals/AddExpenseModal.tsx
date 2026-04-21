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
    <div className="fixed inset-0 bg-white/90 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl w-full relative border-2 border-gray-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold"
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

