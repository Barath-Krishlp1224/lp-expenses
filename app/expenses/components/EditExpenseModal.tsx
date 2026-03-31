"use client";

import React from "react";
import { type Expense, type Employee, type Role } from "./types";
import { EMPLOYEES } from "../InitialBudget/EmployeesList";

type PaymentMode = "cash" | "upi";
type PaymentType = "postpaid" | "";

interface EditExpenseFields {
  shop: string;
  description: string;
  amount: string;
  date: string;
  role: Role;
  paymentMode: string;
  paymentType: string;
  employeeId: string;
  employeeName: string;
}

interface EditExpenseModalProps {
  editingExpense: Expense;
  editExpenseFields: EditExpenseFields;
  setEditExpenseFields: React.Dispatch<
    React.SetStateAction<EditExpenseFields>
  >;
  employees: Employee[];
  onSave: (expenseId: string) => Promise<void>;
  onCancel: () => void;
}

const EditExpenseModal: React.FC<EditExpenseModalProps> = ({
  editingExpense,
  editExpenseFields,
  setEditExpenseFields,
  employees,
  onSave,
  onCancel,
}) => {
  const setField = (key: keyof EditExpenseFields, value: string) => {
    setEditExpenseFields((p) => ({ ...p, [key]: value }));
  };

  const handleEmployeeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = e.target.value;
    const selected = employees.find((emp) => emp._id === newId);
    setEditExpenseFields((p) => ({
      ...p,
      employeeId: newId,
      employeeName: selected ? selected.name : "",
    }));
  };

  const handleSave = () => onSave(editingExpense._id);

  return (
    <div className="fixed inset-0 bg-white/90 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Edit Expense</h3>

        <div className="space-y-6">
          {/* Shop & Description */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Shop / Vendor</label>
              <input
                value={editExpenseFields.shop}
                onChange={(e) => setField("shop", e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all"
                placeholder="Enter shop name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Description</label>
              <input
                value={editExpenseFields.description}
                onChange={(e) => setField("description", e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all"
                placeholder="What is this expense for?"
              />
            </div>
          </div>

          {/* Amount & Date */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Amount (₹)</label>
              <input
                type="number"
                value={editExpenseFields.amount}
                onChange={(e) => setField("amount", e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all"
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Date</label>
              <input
                type="date"
                value={editExpenseFields.date}
                onChange={(e) => setField("date", e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Role & Employee */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Role</label>
              <select
                value={editExpenseFields.role}
                onChange={(e) => setField("role", e.target.value as Role)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 bg-white cursor-pointer"
              >
                <option value="founder">Founder</option>
                <option value="manager">Manager</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Assign to Employee</label>
              <select
                value={editExpenseFields.employeeId}
                onChange={handleEmployeeChange}
                disabled={editExpenseFields.role !== "manager"}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 bg-white cursor-pointer disabled:bg-white disabled:cursor-not-allowed"
              >
                <option value="">Select Employee</option>
                {EMPLOYEES.map((emp) => (
                  <option key={emp._id} value={emp._id}>
                    {emp.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Payment Mode & Type */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Mode of Payment</label>
              <select
                value={editExpenseFields.paymentMode}
                onChange={(e) => {
                  const mode = e.target.value as PaymentMode;
                  setField("paymentMode", mode);
                  if (mode !== "upi") setField("paymentType", "");
                }}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 bg-white cursor-pointer"
              >
                <option value="cash">Cash</option>
                <option value="upi">UPI</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Payment Type</label>
              <select
                value={editExpenseFields.paymentType}
                disabled={editExpenseFields.paymentMode !== "upi"}
                onChange={(e) => setField("paymentType", e.target.value as PaymentType)}
                className={`w-full border-2 rounded-xl px-4 py-3 outline-none bg-white transition-all ${editExpenseFields.paymentMode !== "upi"
                    ? "border-gray-200 text-gray-800 cursor-not-allowed"
                    : "border-gray-200 text-gray-900 focus:border-blue-500"
                  }`}
              >
                <option value="">Select type</option>
                {/* n   <optiovalue="prepaid">Prepaid</option> */}
                <option value="postpaid">Postpaid</option>
              </select>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-end gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-8 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition-all"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditExpenseModal;
