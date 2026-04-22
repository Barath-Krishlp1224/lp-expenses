"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  formatDate,
  getExpenseBreakdown,
  getExpenseAmount,
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
  children,
  selectedExpenseIds,
  onRowToggle,
}) => {
  const tableRef = useRef<HTMLDivElement>(null);
  const breakdownRef = useRef<HTMLTableCellElement | null>(null);
  const [openBreakdownId, setOpenBreakdownId] = useState<string | null>(null);
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
      <div className="p-16 text-center text-gray-800">
        <div className="text-4xl mb-4 text-gray-900">[ ]</div>
        <p className="font-bold text-lg">No expenses found</p>
        <p className="text-sm">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div ref={tableRef} className="overflow-x-auto" style={{ maxHeight: "70vh" }}>
      <table className="min-w-full">
        <thead className="bg-white sticky top-0 border-b border-gray-200">
          <tr>
            <th className="p-4 text-left font-black text-gray-900 text-xs">Select</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">#</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Shop</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Product</th>
            <th className="p-4 text-right font-black text-gray-900 uppercase tracking-wide text-xs">Qty</th>
            <th className="p-4 text-right font-black text-gray-900 uppercase tracking-wide text-xs">Unit Price</th>
            <th className="p-4 text-right font-black text-gray-900 uppercase tracking-wide text-xs">Total</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Date</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Role</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Employee</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Payment Mode</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Payment Type</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Status</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-gray-100">
          {visibleExpenses.map((expense, index) => {
            const paid = isExpensePaid(expense);
            const displayName = getExpenseDisplayName(expense);
            const totalAmount = getExpenseTotal(expense);
            const breakdownItems = getExpenseBreakdown(expense);
            const isBreakdownOpen = openBreakdownId === expense._id;

            return (
              <React.Fragment key={expense._id}>
                <tr
                  className={`transition-colors ${
                    selectedExpenseIds.includes(expense._id)
                      ? "bg-gray-100 ring-2 ring-gray-300"
                      : "hover:bg-gray-50"
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
                  <td className="p-4 text-gray-800 font-bold">{index + 1}</td>
                  <td className="p-4 text-gray-900 font-bold">{expense.shop || "-"}</td>
                  <td className="p-4 text-gray-900">
                    <button
                      type="button"
                      onClick={() => onToggleExpand(expense._id)}
                      className="text-left"
                    >
                      <div className="font-semibold text-gray-900">{displayName}</div>
                      <div className="text-xs text-gray-500">
                        {expense.description ? expense.description : "No notes"}
                      </div>
                    </button>
                  </td>
                  <td className="p-4 text-right font-bold text-gray-900">
                    {getExpenseQuantity(expense).toLocaleString()}
                  </td>
                  <td className="p-4 text-right font-bold text-gray-900">
                    ₹{getExpenseUnitPrice(expense).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td
                    ref={isBreakdownOpen ? breakdownRef : null}
                    className="p-4 text-right font-bold text-gray-900 relative"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenBreakdownId((current) => (current === expense._id ? null : expense._id))
                      }
                      className="inline-flex items-center justify-end rounded-md text-right text-gray-900 transition hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-expanded={isBreakdownOpen}
                      aria-label={`Show total breakdown for ${displayName}`}
                    >
                      ₹{totalAmount.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </button>

                    {isBreakdownOpen && (
                      <div className="absolute right-4 top-full z-20 mt-2 w-80 max-w-[calc(100vw-3rem)] rounded-xl border border-gray-200 bg-white p-4 text-left shadow-2xl">
                        <div className="mb-3 flex items-start justify-between gap-3">
                          <div>
                            <div className="text-xs font-black uppercase tracking-wide text-gray-500">
                              Total Breakdown
                            </div>
                            <div className="text-sm font-semibold text-gray-900">{displayName}</div>
                          </div>
                          <button
                            type="button"
                            onClick={() => setOpenBreakdownId(null)}
                            className="text-xs font-bold text-gray-500 transition hover:text-gray-900"
                            aria-label="Close total breakdown"
                          >
                            Close
                          </button>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-gray-900">
                          {breakdownItems.map((item, itemIndex) => (
                            <React.Fragment key={item.id}>
                              <span className="group relative inline-flex">
                                <span className="cursor-help rounded-md bg-blue-50 px-2 py-1 text-blue-800">
                                  ₹{item.amount.toLocaleString("en-IN", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })}
                                </span>
                                <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden w-56 -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-2 text-xs font-medium leading-relaxed text-white shadow-lg group-hover:block">
                                  {item.details}
                                </span>
                              </span>
                              {itemIndex < breakdownItems.length - 1 && (
                                <span className="text-gray-400">+</span>
                              )}
                            </React.Fragment>
                          ))}
                          <span className="text-gray-400">=</span>
                          <span className="rounded-md bg-gray-900 px-2 py-1 text-white">
                            ₹{totalAmount.toLocaleString("en-IN", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>

                        <p className="mt-3 text-xs text-gray-500">
                          Hover each amount to see what it covers.
                        </p>
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-gray-800 text-sm">{formatDate(expense.date)}</td>
                  <td className="p-4 text-gray-800 capitalize text-sm">{expense.role || "other"}</td>
                  <td className="p-4 text-gray-800 text-sm">{expense.employeeName || "-"}</td>
                  <td className="p-4 text-gray-800 text-sm">{expense.paymentMode || "-"}</td>
                  <td className="p-4 text-gray-800 text-sm">{expense.paymentType || "-"}</td>
                  <td className="p-4">
                    <select
                      value={paid ? "paid" : "unpaid"}
                      onChange={(e) => onUpdatePaidStatus(expense, e.target.value === "paid")}
                      className="border-2 rounded-lg px-3 py-2 text-xs font-bold outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer border-gray-300 text-gray-800"
                    >
                      <option value="unpaid">Pending</option>
                      <option value="paid">Done</option>
                    </select>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        className="px-4 py-2 rounded-lg text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
                        onClick={() => onToggleExpand(expense._id)}
                      >
                        {expandedId === expense._id ? "Hide" : "View"}
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all"
                        onClick={() => onStartEditExpense(expense)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all"
                        onClick={() => onDeleteExpense(expense)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                {expandedId === expense._id && children}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      <div className="text-center py-6 text-sm font-bold text-gray-800 bg-white">
        {isLoadingMore && <p>Loading more expenses...</p>}
        {!hasMoreExpenses && filteredExpenses.length > 0 && <p>All expenses loaded</p>}
        {hasMoreExpenses && !isLoadingMore && (
          <button
            onClick={onLoadMore}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-all shadow-md"
          >
            Load More ({filteredExpenses.length - visibleRowCount} remaining)
          </button>
        )}
      </div>
    </div>
  );
};

export default ExpensesTable;
