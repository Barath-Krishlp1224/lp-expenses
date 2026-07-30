"use client";

import React, { useState } from "react";
import { FiCalendar, FiCreditCard, FiPackage, FiShoppingBag, FiUser, FiPlus, FiTrash2 } from "react-icons/fi";
import { Employee, ExpenseFormValues, Role } from "../../lib/expense-types";

interface ExpenseItem {
  id: string;
  shopName: string;
  productName: string;
  description: string;
  amount: number;
}

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
  expenseItems?: ExpenseItem[];
  onExpenseItemsChange?: (items: ExpenseItem[]) => void;
}

const fieldClassName =
  "w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3.5 text-sm text-slate-900 shadow-sm outline-none transition duration-200 placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100";

const labelClassName = "mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500";

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
  expenseItems = [],
  onExpenseItemsChange,
}) => {
  const [newItemShop, setNewItemShop] = useState("");
  const [newItemProduct, setNewItemProduct] = useState("");
  const [newItemDesc, setNewItemDesc] = useState("");
  const [newItemAmount, setNewItemAmount] = useState("");

  const addExpenseItem = () => {
    if (!newItemShop.trim() && !newItemProduct.trim()) return;
    const amount = parseFloat(newItemAmount) || 0;
    if (amount <= 0) return;

    const item: ExpenseItem = {
      id: Math.random().toString(36).slice(2, 9),
      shopName: newItemShop.trim(),
      productName: newItemProduct.trim(),
      description: newItemDesc.trim(),
      amount,
    };

    onExpenseItemsChange?.([...expenseItems, item]);
    setNewItemShop("");
    setNewItemProduct("");
    setNewItemDesc("");
    setNewItemAmount("");
  };

  const removeExpenseItem = (id: string) => {
    onExpenseItemsChange?.(expenseItems.filter((item) => item.id !== id));
  };

  const itemsTotal = expenseItems.reduce((sum, item) => sum + item.amount, 0);
  const grandTotal = computedTotal + itemsTotal;

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-4xl p-1">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{title}</h3>
          <p className="mt-2 text-sm text-slate-500">
            Capture product, quantity, unit price, and payment details in one compact flow.
          </p>
        </div>
        <div className="accent-panel rounded-3xl border border-white/80 px-5 py-4 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Live Total</div>
          <div className="mt-2 text-3xl font-black tracking-tight text-slate-900">
            ₹{grandTotal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          <FieldShell label="Shop / Vendor" icon={<FiShoppingBag className="h-4 w-4" />}>
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
          </FieldShell>

          <FieldShell label="Product / Name" icon={<FiPackage className="h-4 w-4" />} optional>
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
          </FieldShell>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <FieldShell label="Quantity" icon={<FiPackage className="h-4 w-4" />}>
            <input
              type="number"
              min="0"
              step="1"
              value={formValues.quantity}
              onChange={(e) => setFormValue("quantity", e.target.value)}
              className={fieldClassName}
              placeholder="1"
            />
          </FieldShell>

          <FieldShell label="Price Per Unit" icon={<FiCreditCard className="h-4 w-4" />}>
            <input
              type="number"
              min="0"
              step="0.01"
              value={formValues.unitPrice}
              onChange={(e) => setFormValue("unitPrice", e.target.value)}
              className={fieldClassName}
              placeholder="0.00"
            />
          </FieldShell>

          <FieldShell label="Total Amount" icon={<FiCreditCard className="h-4 w-4" />}>
            <div className={`${fieldClassName} accent-panel border-white/70 font-semibold`}>
              ₹{computedTotal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </FieldShell>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <FieldShell label="Notes" icon={<FiPackage className="h-4 w-4" />} optional>
            <input
              value={formValues.description}
              onChange={(e) => setFormValue("description", e.target.value)}
              className={fieldClassName}
              placeholder="What is this expense for?"
            />
          </FieldShell>

          <FieldShell label="Date" icon={<FiCalendar className="h-4 w-4" />}>
            <input
              type="date"
              value={formValues.date}
              onChange={(e) => setFormValue("date", e.target.value)}
              className={fieldClassName}
            />
          </FieldShell>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <FieldShell label="Role" icon={<FiUser className="h-4 w-4" />}>
            <select
              value={formValues.role}
              onChange={(e) => setFormValue("role", e.target.value as Role)}
              className={`${fieldClassName} bg-white cursor-pointer`}
            >
              <option value="founder">Founder</option>
              <option value="manager">Manager</option>
              <option value="other">Other</option>
            </select>
          </FieldShell>

          <FieldShell label="Assign to Employee" icon={<FiUser className="h-4 w-4" />}>
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
          </FieldShell>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <FieldShell label="Mode of Payment" icon={<FiCreditCard className="h-4 w-4" />}>
            <select
              value={formValues.paymentMode}
              onChange={(e) => setFormValue("paymentMode", e.target.value as "cash" | "upi")}
              className={`${fieldClassName} bg-white cursor-pointer`}
            >
              <option value="cash">Cash</option>
              <option value="upi">UPI</option>
            </select>
          </FieldShell>

          <FieldShell label="Payment Type" icon={<FiCreditCard className="h-4 w-4" />}>
            <select
              value={formValues.paymentType}
              disabled={formValues.paymentMode !== "upi"}
              onChange={(e) => setFormValue("paymentType", e.target.value as "" | "postpaid")}
              className={`${fieldClassName} bg-white cursor-pointer disabled:bg-white disabled:cursor-not-allowed`}
            >
              <option value="">Select type</option>
              <option value="postpaid">Postpaid</option>
            </select>
          </FieldShell>
        </div>

        {/* Multi-Item Entry Section */}
        <div className="rounded-2xl border-2 border-dashed border-sky-200 bg-sky-50/40 p-5">
          <h4 className="mb-4 text-sm font-bold text-slate-900">Additional Expense Items</h4>
          <p className="mb-4 text-xs text-slate-500">
            Add multiple expense items under this record. Each item will be saved as a sub-expense.
          </p>

          {/* Existing items list */}
          {expenseItems.length > 0 && (
            <div className="mb-4 space-y-2">
              {expenseItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 rounded-xl border border-sky-200 bg-white p-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-slate-900 truncate">
                      {item.shopName || item.productName || "Item"}
                    </div>
                    <div className="text-xs text-slate-500 truncate">
                      {item.productName && `${item.productName}${item.description ? " · " : ""}`}
                      {item.description}
                    </div>
                  </div>
                  <div className="text-sm font-bold text-slate-900 whitespace-nowrap">
                    ₹{item.amount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeExpenseItem(item.id)}
                    className="rounded-lg p-1.5 text-rose-500 hover:bg-rose-50 transition"
                  >
                    <FiTrash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
              <div className="flex items-center justify-between rounded-xl border border-sky-300 bg-sky-100/50 p-3">
                <span className="text-sm font-bold text-slate-900">Items Total</span>
                <span className="text-lg font-black text-slate-900">
                  ₹{itemsTotal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          )}

          {/* Add new item form */}
          <div className="grid gap-3 md:grid-cols-4">
            <div>
              <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Shop / Vendor
              </label>
              <input
                value={newItemShop}
                onChange={(e) => setNewItemShop(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                placeholder="Shop A"
              />
            </div>
            <div>
              <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Product / Category
              </label>
              <input
                value={newItemProduct}
                onChange={(e) => setNewItemProduct(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                placeholder="Material"
              />
            </div>
            <div>
              <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Description
              </label>
              <input
                value={newItemDesc}
                onChange={(e) => setNewItemDesc(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                placeholder="Optional notes"
              />
            </div>
            <div>
              <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Amount (₹)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={newItemAmount}
                  onChange={(e) => setNewItemAmount(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                  placeholder="0.00"
                />
                <button
                  type="button"
                  onClick={addExpenseItem}
                  disabled={!newItemShop.trim() && !newItemProduct.trim()}
                  className="inline-flex items-center gap-1 rounded-xl bg-sky-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FiPlus className="h-3.5 w-3.5" />
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-2xl bg-slate-900 px-8 py-3 font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          {submitLabel} (₹{grandTotal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })})
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;