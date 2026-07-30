"use client";

import { useMemo, useState } from "react";
import { FiEdit3, FiPaperclip, FiX } from "react-icons/fi";
import { formatDate, getExpenseDisplayName, getExpenseTotal, getSubtasksTotal } from "../lib/expense-helpers";
import { Expense } from "../lib/expense-types";

interface DailyExpenseSummaryProps {
  expenses: Expense[];
  onEditExpense: (expense: Expense) => void;
}

export default function DailyExpenseSummary({ expenses, onEditExpense }: DailyExpenseSummaryProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const dailyGroups = useMemo(() => {
    const grouped = new Map<string, Expense[]>();
    expenses.forEach((expense) => grouped.set(expense.date, [...(grouped.get(expense.date) || []), expense]));
    return [...grouped.entries()]
      .map(([date, entries]) => ({ date, entries, total: entries.reduce((sum, entry) => sum + getExpenseTotal(entry), 0) }))
      .sort((left, right) => right.date.localeCompare(left.date));
  }, [expenses]);
  const selected = dailyGroups.find((group) => group.date === selectedDate);

  return (
    <>
      <section className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h4 className="text-lg font-bold text-slate-900">Daily expense breakdown</h4>
            <p className="mt-1 text-sm text-slate-500">Selected-week daily totals, calculated from individual entries.</p>
          </div>
          <span className="text-xs font-semibold text-slate-400">{dailyGroups.length} day{dailyGroups.length === 1 ? "" : "s"}</span>
        </div>
        {dailyGroups.length ? (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {dailyGroups.map((group) => (
              <button key={group.date} type="button" onClick={() => setSelectedDate(group.date)} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-sky-300 hover:bg-sky-50">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{formatDate(group.date)}</div>
                <div className="mt-2 text-xl font-black text-slate-900">₹{group.total.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                <div className="mt-2 text-xs font-bold text-sky-700">View details · {group.entries.length} entries</div>
              </button>
            ))}
          </div>
        ) : <p className="text-sm text-slate-500">No expenses in the selected week.</p>}
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Daily expense details">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl md:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Expense details · {formatDate(selected.date)}</h3>
                <p className="mt-1 text-sm text-slate-500">Daily total: ₹{selected.total.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
              <button onClick={() => setSelectedDate(null)} className="rounded-xl p-2 text-slate-500 hover:bg-slate-100" aria-label="Close details"><FiX /></button>
            </div>
            <div className="space-y-4">
              {selected.entries.map((expense) => {
                const subtasksTotal = getSubtasksTotal(expense.subtasks);
                const hasSubtasks = (expense.subtasks || []).length > 0;
                return (
                  <article key={expense._id} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row">
                      <div>
                        <h4 className="font-bold text-slate-900">{getExpenseDisplayName(expense)}</h4>
                        <p className="mt-1 text-sm text-slate-600">{expense.description || "No description"}</p>
                      </div>
                      <div className="text-lg font-black text-slate-900">₹{getExpenseTotal(expense).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    </div>
                    <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-4">
                      <div><dt className="text-xs font-semibold uppercase text-slate-400">Expense date</dt><dd className="mt-1 font-medium">{formatDate(expense.date)}</dd></div>
                      <div><dt className="text-xs font-semibold uppercase text-slate-400">Vendor / Shop</dt><dd className="mt-1 font-medium">{expense.shop || "-"}</dd></div>
                      <div><dt className="text-xs font-semibold uppercase text-slate-400">Category</dt><dd className="mt-1 font-medium">{expense.productName || "Uncategorised"}</dd></div>
                      <div><dt className="text-xs font-semibold uppercase text-slate-400">Created by</dt><dd className="mt-1 font-medium">{expense.employeeName || expense.role || "-"}</dd></div>
                    </dl>

                    {/* Subtask / Expense Items Breakdown */}
                    {hasSubtasks && (
                      <div className="mt-4 rounded-xl border border-sky-100 bg-sky-50/50 p-3">
                        <h5 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Expense Items Breakdown</h5>
                        <div className="space-y-2">
                          {expense.subtasks!.map((subtask) => (
                            <div key={subtask.id} className="flex items-center justify-between gap-2 rounded-lg bg-white px-3 py-2 text-sm">
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-slate-900 truncate">{subtask.title}</div>
                                <div className="text-xs text-slate-500">
                                  {subtask.employeeName && <span>Vendor: {subtask.employeeName} · </span>}
                                  {subtask.date && <span>Date: {formatDate(subtask.date)}</span>}
                                </div>
                              </div>
                              <div className="font-bold text-slate-900 whitespace-nowrap">
                                ₹{(subtask.amount || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                              </div>
                            </div>
                          ))}
                          <div className="flex items-center justify-between border-t border-sky-200 pt-2 text-sm font-bold text-slate-900">
                            <span>Items Total</span>
                            <span>₹{subtasksTotal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {(expense.attachments || []).length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {expense.attachments!.map((attachment) => (
                          <a key={attachment} href={attachment} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-xl bg-sky-50 px-3 py-2 text-xs font-bold text-sky-700">
                            <FiPaperclip /> Attachment
                          </a>
                        ))}
                      </div>
                    )}
                    <button type="button" onClick={() => { setSelectedDate(null); onEditExpense(expense); }} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-xs font-bold text-white"><FiEdit3 /> Edit entry</button>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
