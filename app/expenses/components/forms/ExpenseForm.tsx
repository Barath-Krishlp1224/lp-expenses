"use client";

import React from "react";
import { Employee, ExpenseFormValues, Role } from "../../lib/expense-types";

interface ExpenseFormProps {
  formValues: ExpenseFormValues;
  setFormValue: <K extends keyof ExpenseFormValues>(key: K, value: ExpenseFormValues[K]) => void;
  employees: Employee[];
  onSubmit: (e: React.FormEvent) => void;
  shops: string[];
  productSuggestions: string[];
  computedTotal: number;
  onCancel: () => void;
  submitLabel?: string;
  title?: string;
}

const fieldClassName =
  "w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all";

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  formValues,
  setFormValue,
  employees,
  onSubmit,
  shops,
  productSuggestions,
  computedTotal,
  onCancel,
  submitLabel = "Add Expense",
  title = "Add Expense",
}) => {
  return (
    <form onSubmit={onSubmit} className="p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>

      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Shop / Vendor</label>
            <input
              value={formValues.shopName}
              onChange={(e) => setFormValue("shopName", e.target.value)}
              list="shops-list"
              className={fieldClassName}
              placeholder="Enter shop name"
            />
            <datalist id="shops-list">
              {shops.map((shop) => (
                <option key={shop} value={shop} />
              ))}
            </datalist>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product / Name
              <span className="ml-2 text-xs font-normal text-gray-500">(Optional)</span>
            </label>
            <input
              value={formValues.productName}
              onChange={(e) => setFormValue("productName", e.target.value)}
              list="product-list"
              className={fieldClassName}
              placeholder="Milk, stationery, fuel..."
            />
            <datalist id="product-list">
              {productSuggestions.map((product) => (
                <option key={product} value={product} />
              ))}
            </datalist>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              min="0"
              step="1"
              value={formValues.quantity}
              onChange={(e) => setFormValue("quantity", e.target.value)}
              className={fieldClassName}
              placeholder="1"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Price Per Unit (₹)</label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={formValues.unitPrice}
              onChange={(e) => setFormValue("unitPrice", e.target.value)}
              className={fieldClassName}
              placeholder="0.00"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Total Amount (₹)</label>
            <div className={`${fieldClassName} bg-gray-50 font-semibold`}>
              ₹{computedTotal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Notes
              <span className="ml-2 text-xs font-normal text-gray-500">(Optional)</span>
            </label>
            <input
              value={formValues.description}
              onChange={(e) => setFormValue("description", e.target.value)}
              className={fieldClassName}
              placeholder="What is this expense for?"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
            <input
              type="date"
              value={formValues.date}
              onChange={(e) => setFormValue("date", e.target.value)}
              className={fieldClassName}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
            <select
              value={formValues.role}
              onChange={(e) => setFormValue("role", e.target.value as Role)}
              className={`${fieldClassName} bg-white cursor-pointer`}
            >
              <option value="founder">Founder</option>
              <option value="manager">Manager</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Assign to Employee</label>
            <select
              value={formValues.selectedEmployeeId}
              onChange={(e) => setFormValue("selectedEmployeeId", e.target.value)}
              disabled={formValues.role !== "manager"}
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
            <label className="block text-sm font-semibold text-gray-700 mb-2">Mode of Payment</label>
            <select
              value={formValues.paymentMode}
              onChange={(e) => setFormValue("paymentMode", e.target.value as "cash" | "upi")}
              className={`${fieldClassName} bg-white cursor-pointer`}
            >
              <option value="cash">Cash</option>
              <option value="upi">UPI</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Payment Type</label>
            <select
              value={formValues.paymentType}
              disabled={formValues.paymentMode !== "upi"}
              onChange={(e) => setFormValue("paymentType", e.target.value as "" | "postpaid")}
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
          type="submit"
          className="px-8 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition-all"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;

