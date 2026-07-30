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
      <div className="p-12 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
          <svg className="h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 11.625l2.25-2.25M12 11.625l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
        </div>
        <p className="text-lg font-bold text-slate-900">No expenses found</p>
        <p className="mt-1 text-sm text-slate-500">Try adjusting your filters or add a new expense</p>
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
          className="inline-flex items-center rounded-lg bg-slate-900 px-2.5 py-1.5 text-xs font-bold text-white transition hover:bg-slate-800"
          aria-expanded={isBreakdownOpen}
          aria-label={`Show total breakdown for ${displayName}`}
        >
          ₹{totalAmount.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </button>

        {isBreakdownOpen && (
          <div className="absolute right-0 top-full z-20 mt-2 w-80 max-w-[calc(100vw-3rem)] rounded-xl border border-slate-200 bg-white p-4 text-left shadow-xl">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Total Breakdown
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-900">{displayName}</div>
              </div>
              <button
                type="button"
                onClick={() => setOpenBreakdownId(null)}
                className="text-xs font-semibold text-slate-400 transition hover:text-slate-900"
                aria-label="Close total breakdown"
              >
                Close
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-900">
              {breakdownItems.map((item, itemIndex) => (
                <React.Fragment key={item.id}>
                  <span className="group relative inline-flex">
                    <span className="cursor-help rounded-lg bg-sky-50 px-2 py-1 text-xs text-sky-800">
                      ₹{item.amount.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                    <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden w-56 -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium leading-relaxed text-white shadow-lg group-hover:block">
                      {item.details}
                    </span>
                  </span>
                  {itemIndex < breakdownItems.length - 1 && <span className="text-slate-300">+</span>}
                </React.Fragment>
              ))}
              <span className="text-slate-300">=</span>
              <span className="rounded-lg bg-slate-900 px-2 py-1 text-xs text-white">
                ₹{totalAmount.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>

            <p className="mt-2 text-xs text-slate-400">Hover each amount to see what it covers.</p>
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
        <div className="rounded-lg border border-sky-200 bg-sky-50/70 p-2">
          <input
            value={editingNameValue}
            onChange={(event) => setEditingNameValue(event.target.value)}
            className="w-full rounded-lg border border-sky-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            placeholder="Enter product name"
            autoFocus
          />
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              onClick={() => saveInlineEdit(expense)}
              disabled={isSaving}
              className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-800 disabled:cursor-wait disabled:opacity-70"
            >
              <FiSave className="h-3 w-3" />
              {isSaving ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              onClick={cancelInlineEdit}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              <FiX className="h-3 w-3" />
              Cancel
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="group">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold text-slate-900 truncate">{displayName}</div>
            <div className="mt-0.5 text-xs text-slate-500 truncate">
              {expense.description ? expense.description : "No additional notes"}
            </div>
          </div>
          <button
            type="button"
            onClick={() => startInlineEdit(expense)}
            className="inline-flex shrink-0 items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-slate-400 opacity-0 transition hover:bg-slate-50 hover:text-slate-700 group-hover:opacity-100"
          >
            <FiEdit3 className="h-3 w-3" />
            Rename
          </button>
        </div>
      </div>
    );
  };

  const renderActions = (expense: Expense) => (
    <div className="flex flex-wrap gap-1.5">
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
        onClick={() => onToggleExpand(expense._id)}
      >
        <FiChevronRight className={`h-3 w-3 transition ${expandedId === expense._id ? "rotate-90" : ""}`} />
        {expandedId === expense._id ? "Hide" : "Details"}
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-lg bg-sky-600 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-sky-700"
        onClick={() => onStartEditExpense(expense)}
      >
        <FiEdit3 className="h-3 w-3" />
        Edit
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-lg bg-rose-600 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-rose-700"
        onClick={() => onDeleteExpense(expense)}
      >
        <FiTrash2 className="h-3 w-3" />
        Delete
      </button>
    </div>
  );

  return (
    <div className="space-y-3">
      {/* Mobile Card View */}
      <div className="grid gap-3 lg:hidden">
        {visibleExpenses.map((expense, index) => {
          const paid = isExpensePaid(expense);
          const displayName = getExpenseDisplayName(expense);
          const totalAmount = getExpenseTotal(expense);

          return (
            <div
              key={expense._id}
              className={`rounded-xl border p-4 transition ${
                selectedExpenseIds.includes(expense._id)
                  ? "border-sky-300 bg-sky-50/60"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <label className="inline-flex items-center gap-2 text-xs font-medium text-slate-400">
                  <input
                    type="checkbox"
                    checked={selectedExpenseIds.includes(expense._id)}
                    onChange={() => onRowToggle(expense._id)}
                    className="h-4 w-4 cursor-pointer rounded border-slate-300"
                  />
                  Select
                </label>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-500">
                  #{index + 1}
                </span>
              </div>

              <div className="mb-3">{renderProductCell(expense, displayName)}</div>

              <div className="mb-3 grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-slate-50 p-2.5">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Qty</div>
                  <div className="mt-1 text-base font-bold text-slate-900">
                    {getExpenseQuantity(expense).toLocaleString()}
                  </div>
                </div>
                <div className="rounded-lg bg-slate-50 p-2.5">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Unit Price</div>
                  <div className="mt-1 text-base font-bold text-slate-900">
                    ₹{getExpenseUnitPrice(expense).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
              </div>

              <div className="mb-3 flex items-center justify-between rounded-lg bg-slate-900 p-3 text-white">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-white/60">Total</div>
                  <div className="mt-0.5 text-xl font-bold tracking-tight">
                    ₹{totalAmount.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
                {renderBreakdown(expense, totalAmount, displayName)}
              </div>

              <div className="mb-3 grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-lg border border-slate-100 p-2.5">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Vendor</div>
                  <div className="mt-0.5 font-semibold text-slate-800">{expense.shop || "-"}</div>
                </div>
                <div className="rounded-lg border border-slate-100 p-2.5">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Date</div>
                  <div className="mt-0.5 font-semibold text-slate-800">{formatDate(expense.date)}</div>
                </div>
                <div className="rounded-lg border border-slate-100 p-2.5">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Assignee</div>
                  <div className="mt-0.5 font-semibold text-slate-800">{expense.employeeName || "-"}</div>
                </div>
                <div className="rounded-lg border border-slate-100 p-2.5">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Status</div>
                  <select
                    value={paid ? "paid" : "unpaid"}
                    onChange={(e) => onUpdatePaidStatus(expense, e.target.value === "paid")}
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-800 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  >
                    <option value="unpaid">Pending</option>
                    <option value="paid">Done</option>
                  </select>
                </div>
              </div>

              <div>{renderActions(expense)}</div>
              {expandedId === expense._id && <div className="mt-3 overflow-hidden rounded-lg border border-slate-200">{children}</div>}
            </div>
          );
        })}
      </div>

      {/* Desktop Table View */}
      <div ref={tableRef} className="hidden overflow-x-auto lg:block" style={{ maxHeight: "70vh" }}>
        <table className="premium-table min-w-[1320px] w-full">
          <thead>
            <tr>
              <th className="!w-12">Select</th>
              <th className="!w-10">#</th>
              <th>Vendor</th>
              <th>Product</th>
              <th className="!text-right">Qty</th>
              <th className="!text-right">Unit Price</th>
              <th className="!text-right">Total</th>
              <th>Date</th>
              <th>Role</th>
              <th>Employee</th>
              <th>Payment</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {visibleExpenses.map((expense, index) => {
              const paid = isExpensePaid(expense);
              const displayName = getExpenseDisplayName(expense);
              const totalAmount = getExpenseTotal(expense);

              return (
                <React.Fragment key={expense._id}>
                  <tr
                    className={`${
                      selectedExpenseIds.includes(expense._id)
                        ? "!bg-sky-50/70"
                        : ""
                    }`}
                  >
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedExpenseIds.includes(expense._id)}
                        onChange={() => onRowToggle(expense._id)}
                        className="cursor-pointer"
                      />
                    </td>
                    <td className="!font-semibold">{index + 1}</td>
                    <td className="!font-medium">{expense.shop || "-"}</td>
                    <td>{renderProductCell(expense, displayName)}</td>
                    <td className="!text-right !font-semibold">
                      {getExpenseQuantity(expense).toLocaleString()}
                    </td>
                    <td className="!text-right !font-semibold">
                      ₹{getExpenseUnitPrice(expense).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="!text-right !font-semibold">
                      {renderBreakdown(expense, totalAmount, displayName)}
                    </td>
                    <td className="!text-slate-500">{formatDate(expense.date)}</td>
                    <td className="!capitalize !text-slate-500">{expense.role || "other"}</td>
                    <td className="!text-slate-500">{expense.employeeName || "-"}</td>
                    <td className="!text-slate-500">{expense.paymentMode || "-"}</td>
                    <td className="!text-slate-500">{expense.paymentType || "-"}</td>
                    <td>
                      <select
                        value={paid ? "paid" : "unpaid"}
                        onChange={(e) => onUpdatePaidStatus(expense, e.target.value === "paid")}
                        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-800 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                      >
                        <option value="unpaid">Pending</option>
                        <option value="paid">Done</option>
                      </select>
                    </td>
                    <td>{renderActions(expense)}</td>
                  </tr>
                  {expandedId === expense._id && (
                    <tr>
                      <td colSpan={14} className="!border-b-0 !p-0">
                        <div className="border-t border-slate-100 bg-slate-50/50 p-4">
                          {children}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Load More */}
      <div className="rounded-xl border border-slate-200 bg-white py-4 text-center text-sm font-semibold text-slate-600">
        {isLoadingMore && <p>Loading more expenses...</p>}
        {!hasMoreExpenses && filteredExpenses.length > 0 && <p>All expenses loaded</p>}
        {hasMoreExpenses && !isLoadingMore && (
          <button
            onClick={onLoadMore}
            className="btn-primary"
          >
            Load More ({filteredExpenses.length - visibleRowCount} remaining)
          </button>
        )}
      </div>
    </div>
  );
};

export default ExpensesTable;