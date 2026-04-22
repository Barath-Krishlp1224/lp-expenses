"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiChevronRight, FiEdit3, FiSave, FiTrash2, FiX } from "react-icons/fi";
import {
  formatDate,
  getExpenseBreakdown,
  getExpenseDisplayName,
  getExpenseQuantity,
  getExpenseTotal,
  getExpenseUnitPrice,
  isExpensePaid,
} from "../../lib/expense-helpers";
import { Expense } from "../../lib/expense-types";

interface ExpensesTableProps {
  visibleExpenses: Expense[];
  filteredExpenses: Expense[];
  isLoadingMore: boolean;
  visibleRowCount: number;
  expandedId: string | null;
  onToggleExpand: (id: string) => void;
  onStartEditExpense: (expense: Expense) => void;
  onDeleteExpense: (expense: Expense) => void;
  onUpdatePaidStatus: (expense: Expense, status: boolean) => void;
  onLoadMore: () => void;
  onQuickRenameExpense: (expense: Expense, productName: string) => Promise<void>;
  children?: React.ReactNode;
  selectedExpenseIds: string[];
  onRowToggle: (id: string) => void;
}

const ExpensesTable: React.FC<ExpensesTableProps> = ({
  visibleExpenses,
  filteredExpenses,
  isLoadingMore,
  visibleRowCount,
  expandedId,
  onToggleExpand,
  onStartEditExpense,
  onDeleteExpense,
  onUpdatePaidStatus,
  onLoadMore,
  onQuickRenameExpense,
  children,
  selectedExpenseIds,
  onRowToggle,
}) => {
  const tableRef = useRef<HTMLDivElement>(null);
  const breakdownRef = useRef<HTMLDivElement | null>(null);
  const [openBreakdownId, setOpenBreakdownId] = useState<string | null>(null);
  const [editingNameId, setEditingNameId] = useState<string | null>(null);
  const [editingNameValue, setEditingNameValue] = useState("");
  const [savingNameId, setSavingNameId] = useState<string | null>(null);
  const hasMoreExpenses = visibleRowCount < filteredExpenses.length;

  useEffect(() => {
    const tableElement = tableRef.current;
    if (!tableElement) return;

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = tableElement;
      if (scrollHeight - (scrollTop + clientHeight) < 200 && !isLoadingMore && hasMoreExpenses) {
        onLoadMore();
      }
    };

    tableElement.addEventListener("scroll", handleScroll);
    return () => tableElement.removeEventListener("scroll", handleScroll);
  }, [hasMoreExpenses, isLoadingMore, onLoadMore]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!breakdownRef.current) return;
      if (breakdownRef.current.contains(event.target as Node)) return;
      setOpenBreakdownId(null);
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  if (visibleExpenses.length === 0 && filteredExpenses.length === 0) {
    return (
      <div className="p-16 text-center text-slate-700">
        <div className="mb-4 text-4xl text-slate-400">[ ]</div>
        <p className="text-lg font-bold">No expenses found</p>
        <p className="text-sm text-slate-500">Try adjusting your filters</p>
      </div>
    );
  }

  const startInlineEdit = (expense: Expense) => {
    setEditingNameId(expense._id);
    setEditingNameValue(expense.productName || "");
  };

  const cancelInlineEdit = () => {
    setEditingNameId(null);
    setEditingNameValue("");
  };

  const saveInlineEdit = async (expense: Expense) => {
    setSavingNameId(expense._id);
    await onQuickRenameExpense(expense, editingNameValue);
    setSavingNameId(null);
    setEditingNameId(null);
    setEditingNameValue("");
  };

  const renderBreakdown = (expense: Expense, totalAmount: number, displayName: string) => {
    const breakdownItems = getExpenseBreakdown(expense);
    const isBreakdownOpen = openBreakdownId === expense._id;

    return (
      <div ref={isBreakdownOpen ? breakdownRef : null} className="relative">
        <button
          type="button"
          onClick={() => setOpenBreakdownId((current) => (current === expense._id ? null : expense._id))}
          className="inline-flex items-center justify-end rounded-2xl bg-slate-900 px-3 py-2 text-right text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          aria-expanded={isBreakdownOpen}
          aria-label={`Show total breakdown for ${displayName}`}
        >
          ₹{totalAmount.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </button>

        {isBreakdownOpen && (
          <div className="absolute right-0 top-full z-20 mt-3 w-80 max-w-[calc(100vw-3rem)] rounded-[1.5rem] border border-slate-200 bg-white p-4 text-left shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-400">
                  Total Breakdown
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-900">{displayName}</div>
              </div>
              <button
                type="button"
                onClick={() => setOpenBreakdownId(null)}
                className="text-xs font-bold text-slate-400 transition hover:text-slate-900"
                aria-label="Close total breakdown"
              >
                Close
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-900">
              {breakdownItems.map((item, itemIndex) => (
                <React.Fragment key={item.id}>
                  <span className="group relative inline-flex">
                    <span className="cursor-help rounded-xl bg-sky-50 px-2.5 py-1.5 text-sky-800">
                      ₹{item.amount.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                    <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden w-56 -translate-x-1/2 rounded-xl bg-slate-900 px-3 py-2 text-xs font-medium leading-relaxed text-white shadow-lg group-hover:block">
                      {item.details}
                    </span>
                  </span>
                  {itemIndex < breakdownItems.length - 1 && <span className="text-slate-300">+</span>}
                </React.Fragment>
              ))}
              <span className="text-slate-300">=</span>
              <span className="rounded-xl bg-slate-900 px-2.5 py-1.5 text-white">
                ₹{totalAmount.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>

            <p className="mt-3 text-xs text-slate-500">Hover each amount to see what it covers.</p>
          </div>
        )}
      </div>
    );
  };

  const renderProductCell = (expense: Expense, displayName: string) => {
    const isEditing = editingNameId === expense._id;
    const isSaving = savingNameId === expense._id;

    if (isEditing) {
      return (
        <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-3 shadow-sm transition-all">
          <input
            value={editingNameValue}
            onChange={(event) => setEditingNameValue(event.target.value)}
            className="w-full rounded-xl border border-sky-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
            placeholder="Enter product name"
            autoFocus
          />
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => saveInlineEdit(expense)}
              disabled={isSaving}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 disabled:cursor-wait disabled:opacity-70"
            >
              <FiSave className="h-3.5 w-3.5" />
              {isSaving ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              onClick={cancelInlineEdit}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              <FiX className="h-3.5 w-3.5" />
              Cancel
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="group">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-base font-bold text-slate-900">{displayName}</div>
            <div className="mt-1 text-xs leading-relaxed text-slate-500">
              {expense.description ? expense.description : "No additional notes"}
            </div>
          </div>
          <button
            type="button"
            onClick={() => startInlineEdit(expense)}
            className="inline-flex items-center gap-1 rounded-full border border-transparent px-2.5 py-1 text-xs font-semibold text-slate-400 transition hover:border-slate-200 hover:bg-slate-50 hover:text-slate-700 group-hover:text-slate-700"
          >
            <FiEdit3 className="h-3.5 w-3.5" />
            Rename
          </button>
        </div>
      </div>
    );
  };

  const renderActions = (expense: Expense) => (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50"
        onClick={() => onToggleExpand(expense._id)}
      >
        <FiChevronRight className={`h-3.5 w-3.5 transition ${expandedId === expense._id ? "rotate-90" : ""}`} />
        {expandedId === expense._id ? "Hide" : "Details"}
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-3 py-2 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-sky-700"
        onClick={() => onStartEditExpense(expense)}
      >
        <FiEdit3 className="h-3.5 w-3.5" />
        Edit
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-3 py-2 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-rose-700"
        onClick={() => onDeleteExpense(expense)}
      >
        <FiTrash2 className="h-3.5 w-3.5" />
        Delete
      </button>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:hidden">
        {visibleExpenses.map((expense, index) => {
          const paid = isExpensePaid(expense);
          const displayName = getExpenseDisplayName(expense);
          const totalAmount = getExpenseTotal(expense);

          return (
            <div
              key={expense._id}
              className={`rounded-[1.5rem] border p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                selectedExpenseIds.includes(expense._id)
                  ? "border-sky-300 bg-sky-50/60"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <label className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  <input
                    type="checkbox"
                    checked={selectedExpenseIds.includes(expense._id)}
                    onChange={() => onRowToggle(expense._id)}
                    className="h-4 w-4 cursor-pointer rounded border-slate-300"
                  />
                  Select
                </label>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">
                  #{index + 1}
                </span>
              </div>

              <div className="mt-4">{renderProductCell(expense, displayName)}</div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Quantity
                  </div>
                  <div className="mt-2 text-lg font-bold text-slate-900">
                    {getExpenseQuantity(expense).toLocaleString()}
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Unit Price
                  </div>
                  <div className="mt-2 text-lg font-bold text-slate-900">
                    ₹{getExpenseUnitPrice(expense).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between gap-3 rounded-[1.25rem] bg-gradient-to-r from-slate-900 to-slate-700 p-4 text-white">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    Total Amount
                  </div>
                  <div className="mt-2 text-2xl font-black tracking-tight">
                    ₹{totalAmount.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
                {renderBreakdown(expense, totalAmount, displayName)}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-200 p-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Vendor</div>
                  <div className="mt-1 font-semibold text-slate-800">{expense.shop || "-"}</div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Date</div>
                  <div className="mt-1 font-semibold text-slate-800">{formatDate(expense.date)}</div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Assignee</div>
                  <div className="mt-1 font-semibold text-slate-800">{expense.employeeName || "-"}</div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Status</div>
                  <select
                    value={paid ? "paid" : "unpaid"}
                    onChange={(e) => onUpdatePaidStatus(expense, e.target.value === "paid")}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                  >
                    <option value="unpaid">Pending</option>
                    <option value="paid">Done</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">{renderActions(expense)}</div>
              {expandedId === expense._id && <div className="mt-4 overflow-hidden rounded-[1.25rem]">{children}</div>}
            </div>
          );
        })}
      </div>

      <div ref={tableRef} className="hidden overflow-x-auto lg:block" style={{ maxHeight: "70vh" }}>
        <table className="min-w-[1320px] w-full">
          <thead className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
            <tr>
              <th className="p-4 text-left text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Select</th>
              <th className="p-4 text-left text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">#</th>
              <th className="p-4 text-left text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Vendor</th>
              <th className="p-4 text-left text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Product</th>
              <th className="p-4 text-right text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Qty</th>
              <th className="p-4 text-right text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Unit Price</th>
              <th className="p-4 text-right text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Total</th>
              <th className="p-4 text-left text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Date</th>
              <th className="p-4 text-left text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Role</th>
              <th className="p-4 text-left text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Employee</th>
              <th className="p-4 text-left text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Payment</th>
              <th className="p-4 text-left text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Type</th>
              <th className="p-4 text-left text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Status</th>
              <th className="p-4 text-left text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {visibleExpenses.map((expense, index) => {
              const paid = isExpensePaid(expense);
              const displayName = getExpenseDisplayName(expense);
              const totalAmount = getExpenseTotal(expense);

              return (
                <React.Fragment key={expense._id}>
                  <tr
                    className={`transition-colors ${
                      selectedExpenseIds.includes(expense._id)
                        ? "bg-sky-50/70"
                        : "bg-white hover:bg-slate-50/80"
                    }`}
                  >
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedExpenseIds.includes(expense._id)}
                        onChange={() => onRowToggle(expense._id)}
                        className="cursor-pointer"
                      />
                    </td>
                    <td className="p-4 text-sm font-bold text-slate-700">{index + 1}</td>
                    <td className="p-4 text-sm font-semibold text-slate-900">{expense.shop || "-"}</td>
                    <td className="p-4 text-slate-900">{renderProductCell(expense, displayName)}</td>
                    <td className="p-4 text-right text-sm font-bold text-slate-900">
                      {getExpenseQuantity(expense).toLocaleString()}
                    </td>
                    <td className="p-4 text-right text-sm font-bold text-slate-900">
                      ₹{getExpenseUnitPrice(expense).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="p-4 text-right font-bold text-slate-900">
                      {renderBreakdown(expense, totalAmount, displayName)}
                    </td>
                    <td className="p-4 text-sm text-slate-600">{formatDate(expense.date)}</td>
                    <td className="p-4 text-sm capitalize text-slate-600">{expense.role || "other"}</td>
                    <td className="p-4 text-sm text-slate-600">{expense.employeeName || "-"}</td>
                    <td className="p-4 text-sm text-slate-600">{expense.paymentMode || "-"}</td>
                    <td className="p-4 text-sm text-slate-600">{expense.paymentType || "-"}</td>
                    <td className="p-4">
                      <select
                        value={paid ? "paid" : "unpaid"}
                        onChange={(e) => onUpdatePaidStatus(expense, e.target.value === "paid")}
                        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-800 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                      >
                        <option value="unpaid">Pending</option>
                        <option value="paid">Done</option>
                      </select>
                    </td>
                    <td className="p-4">{renderActions(expense)}</td>
                  </tr>
                  {expandedId === expense._id && children}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="rounded-[1.5rem] border border-slate-200 bg-white py-5 text-center text-sm font-bold text-slate-700 shadow-sm">
        {isLoadingMore && <p>Loading more expenses...</p>}
        {!hasMoreExpenses && filteredExpenses.length > 0 && <p>All expenses loaded</p>}
        {hasMoreExpenses && !isLoadingMore && (
          <button
            onClick={onLoadMore}
            className="rounded-2xl bg-slate-900 px-6 py-3 font-bold text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Load More ({filteredExpenses.length - visibleRowCount} remaining)
          </button>
        )}
      </div>
    </div>
  );
};

export default ExpensesTable;
