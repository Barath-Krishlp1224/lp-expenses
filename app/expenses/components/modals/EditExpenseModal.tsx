"use client";

import React from "react";
import { FiCalendar, FiCreditCard, FiPackage, FiShoppingBag, FiUser } from "react-icons/fi";
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

const fieldClassName = "input-field";
const labelClassName = "mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500";

const FieldShell = ({
  label,
  icon,
  optional,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  optional?: boolean;
  children: React.ReactNode;
}) => (
  <div>
    <label className={labelClassName}>
      {icon}
      {label}
      {optional && <span className="text-[10px] font-medium normal-case tracking-normal text-slate-400">Optional</span>}
    </label>
    {children}
  </div>
);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 p-4 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:p-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              Edit Expense
            </h3>
            <span className="mt-1 block text-sm text-slate-500">
              Update the key details without losing the existing expense history.
            </span>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Current Entry</div>
            <div className="mt-1 text-sm font-semibold text-slate-700">
            {editingExpense.productName || editingExpense.description || editingExpense.shop || ""}
            </div>
            <div className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              ₹{computedTotal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <FieldShell label="Shop / Vendor" icon={<FiShoppingBag className="h-4 w-4" />}>
              <input
                value={editExpenseFields.shop}
                onChange={(e) => setField("shop", e.target.value)}
                className={fieldClassName}
                placeholder="Enter shop name"
              />
            </FieldShell>

            <FieldShell label="Product / Name" icon={<FiPackage className="h-4 w-4" />} optional>
              <input
                value={editExpenseFields.productName}
                onChange={(e) => setField("productName", e.target.value)}
                className={fieldClassName}
                placeholder="Milk, stationery, fuel..."
              />
            </FieldShell>
          </div>

          <FieldShell label="Supporting attachments" icon={<FiPackage className="h-4 w-4" />} optional>
            <textarea
              value={editExpenseFields.attachments}
              onChange={(e) => setField("attachments", e.target.value)}
              className={fieldClassName}
              rows={3}
              placeholder="One attachment URL per line (if attachments are permitted)"
            />
          </FieldShell>

          <div className="grid gap-4 md:grid-cols-3">
            <FieldShell label="Quantity" icon={<FiPackage className="h-4 w-4" />}>
              <input
                type="number"
                min="0"
                step="1"
                value={editExpenseFields.quantity}
                onChange={(e) => setField("quantity", e.target.value)}
                className={fieldClassName}
              />
            </FieldShell>
            <FieldShell label="Price Per Unit" icon={<FiCreditCard className="h-4 w-4" />}>
              <input
                type="number"
                min="0"
                step="0.01"
                value={editExpenseFields.unitPrice}
                onChange={(e) => setField("unitPrice", e.target.value)}
                className={fieldClassName}
              />
            </FieldShell>
            <FieldShell label="Total Amount" icon={<FiCreditCard className="h-4 w-4" />}>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900">
                ₹{computedTotal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </FieldShell>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FieldShell label="Notes" icon={<FiPackage className="h-4 w-4" />} optional>
              <input
                value={editExpenseFields.description}
                onChange={(e) => setField("description", e.target.value)}
                className={fieldClassName}
                placeholder="What is this expense for?"
              />
            </FieldShell>
            <FieldShell label="Date" icon={<FiCalendar className="h-4 w-4" />}>
              <input
                type="date"
                value={editExpenseFields.date}
                onChange={(e) => setField("date", e.target.value)}
                className={fieldClassName}
              />
            </FieldShell>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FieldShell label="Role" icon={<FiUser className="h-4 w-4" />}>
              <select
                value={editExpenseFields.role}
                onChange={(e) => setField("role", e.target.value as Role)}
                className="select-field"
              >
                <option value="founder">Founder</option>
                <option value="manager">Manager</option>
                <option value="other">Other</option>
              </select>
            </FieldShell>

            <FieldShell label="Assign to Employee" icon={<FiUser className="h-4 w-4" />}>
              <select
                value={editExpenseFields.employeeId}
                onChange={(e) => setField("employeeId", e.target.value)}
                disabled={editExpenseFields.role !== "manager"}
                className="select-field disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">Select Employee</option>
                {employees.map((employee) => (
                  <option key={employee._id} value={employee._id}>
                    {employee.name}
                  </option>
                ))}
              </select>
            </FieldShell>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FieldShell label="Mode of Payment" icon={<FiCreditCard className="h-4 w-4" />}>
              <select
                value={editExpenseFields.paymentMode}
                onChange={(e) => setField("paymentMode", e.target.value)}
                className="select-field"
              >
                <option value="cash">Cash</option>
                <option value="upi">UPI</option>
              </select>
            </FieldShell>

            <FieldShell label="Payment Type" icon={<FiCreditCard className="h-4 w-4" />}>
              <select
                value={editExpenseFields.paymentType}
                disabled={editExpenseFields.paymentMode !== "upi"}
                onChange={(e) => setField("paymentType", e.target.value)}
                className="select-field disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">Select type</option>
                <option value="postpaid">Postpaid</option>
              </select>
            </FieldShell>
          </div>
        </div>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="btn-secondary"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSave}
            className="btn-primary"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditExpenseModal;