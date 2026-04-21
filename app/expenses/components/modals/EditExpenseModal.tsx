"use client";

import React from "react";
import { EditExpenseFields, Employee, Expense, Role } from "../../lib/expense-types";

interface EditExpenseModalProps {
  editingExpense: Expense;
  editExpenseFields: EditExpenseFields;
  setEditExpenseFields: React.Dispatch<React.SetStateAction<EditExpenseFields>>;
  employees: Employee[];
  computedTotal: number;
  onSave: () => Promise<void>;
  onCancel: () => void;
}

const fieldClassName =
  "w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all";

const EditExpenseModal: React.FC<EditExpenseModalProps> = ({
  editingExpense,
  editExpenseFields,
  setEditExpenseFields,
  employees,
  computedTotal,
  onSave,
  onCancel,
}) => {
  const setField = (key: keyof EditExpenseFields, value: string) => {
    setEditExpenseFields((current) => {
      const next = { ...current, [key]: value };
      if (key === "paymentMode" && value !== "upi") {
        next.paymentType = "";
      }
      if (key === "role" && value !== "manager") {
        next.employeeId = "";
        next.employeeName = "";
      }
      return next;
    });
  };

  return (
    <div className="fixed inset-0 bg-white/90 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Edit Expense
          <span className="ml-2 text-sm font-normal text-gray-500">
            {editingExpense.productName || editingExpense.description || editingExpense.shop || ""}
          </span>
        </h3>

        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Shop / Vendor</label>
              <input
                value={editExpenseFields.shop}
                onChange={(e) => setField("shop", e.target.value)}
                className={fieldClassName}
                placeholder="Enter shop name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Product / Name
                <span className="ml-2 text-xs font-normal text-gray-500">(Optional)</span>
              </label>
              <input
                value={editExpenseFields.productName}
                onChange={(e) => setField("productName", e.target.value)}
                className={fieldClassName}
                placeholder="Milk, stationery, fuel..."
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Quantity</label>
              <input
                type="number"
                min="0"
                step="1"
                value={editExpenseFields.quantity}
                onChange={(e) => setField("quantity", e.target.value)}
                className={fieldClassName}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Price Per Unit (₹)</label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={editExpenseFields.unitPrice}
                onChange={(e) => setField("unitPrice", e.target.value)}
                className={fieldClassName}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Total Amount (₹)</label>
              <div className={`${fieldClassName} bg-gray-50 font-semibold`}>
                ₹{computedTotal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Notes
                <span className="ml-2 text-xs font-normal text-gray-500">(Optional)</span>
              </label>
              <input
                value={editExpenseFields.description}
                onChange={(e) => setField("description", e.target.value)}
                className={fieldClassName}
                placeholder="What is this expense for?"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Date</label>
              <input
                type="date"
                value={editExpenseFields.date}
                onChange={(e) => setField("date", e.target.value)}
                className={fieldClassName}
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Role</label>
              <select
                value={editExpenseFields.role}
                onChange={(e) => setField("role", e.target.value as Role)}
                className={`${fieldClassName} bg-white cursor-pointer`}
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
                onChange={(e) => setField("employeeId", e.target.value)}
                disabled={editExpenseFields.role !== "manager"}
                className={`${fieldClassName} bg-white cursor-pointer disabled:bg-white disabled:cursor-not-allowed`}
              >
                <option value="">Select Employee</option>
                {employees.map((employee) => (
                  <option key={employee._id} value={employee._id}>
                    {employee.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Mode of Payment</label>
              <select
                value={editExpenseFields.paymentMode}
                onChange={(e) => setField("paymentMode", e.target.value)}
                className={`${fieldClassName} bg-white cursor-pointer`}
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
                onChange={(e) => setField("paymentType", e.target.value)}
                className={`${fieldClassName} bg-white cursor-pointer disabled:bg-white disabled:cursor-not-allowed`}
              >
                <option value="">Select type</option>
                <option value="postpaid">Postpaid</option>
              </select>
            </div>
          </div>
        </div>

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
            onClick={onSave}
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

