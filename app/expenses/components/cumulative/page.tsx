"use client";

import React, { useState } from "react";
import { Expense } from "../types";

interface CumulativeModalProps {
    isOpen: boolean;
    onClose: () => void;
    expenses: Expense[];
    selectedExpenseIds: string[];
}

export function CumulativeModal({
    isOpen,
    onClose,
    expenses,
    selectedExpenseIds,
}: CumulativeModalProps) {
    if (!isOpen) return null;
    const selectedExpenses = expenses.filter((e) =>
        selectedExpenseIds.includes(e._id)
    );

    const totalAmount = selectedExpenses.reduce((sum, e) => {
        const mainAmount = Number(e.amount) || 0;
        const subTotal = e.subtasks?.reduce(
            (s, sub) => s + (Number(sub.amount) || 0),
            0
        ) || 0;

        return sum + mainAmount + subTotal;
    }, 0);


    const now = new Date();
    const [paymentDate, setPaymentDate] = useState(
        now.toISOString().split("T")[0]
    );
    const [paymentTime, setPaymentTime] = useState(
        now.toTimeString().slice(0, 5)
    );
    const [paidBy, setPaidBy] = useState("");
    const [showExpenses, setShowExpenses] = useState(false);

   const handleAdd = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/cumulativeExpense", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentDate,
        paymentTime,
        paidBy: paidBy || undefined,
        totalAmount,
        expenseIds: selectedExpenses.map((e) => e._id),
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Failed to add cumulative payment");
    }

    const data = await res.json();
    console.log("Cumulative Payment Added:", data.data);
    onClose(); // close modal
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};



    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 p-4">
            <form
                onSubmit={handleAdd}
                className="bg-white rounded-3xl shadow-xl w-full max-w-4xl p-8 flex flex-col space-y-6"
            >
                <h3 className="text-2xl font-bold text-gray-900 text-center">
                    Add Cumulative Payment
                </h3>

                {/* Payment Info */}
                <div className="grid gap-6 md:grid-cols-3">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Payment Date
                        </label>
                        <input
                            type="date"
                            value={paymentDate}
                            onChange={(e) => setPaymentDate(e.target.value)}
                            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Payment Time
                        </label>
                        <input
                            type="time"
                            value={paymentTime}
                            onChange={(e) => setPaymentTime(e.target.value)}
                            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Paid By (optional)
                        </label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={paidBy}
                            onChange={(e) => setPaidBy(e.target.value)}
                            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all"
                        />
                    </div>
                </div>

                {/* Total Amount */}
                <div className="flex justify-between items-center font-bold text-lg border-t pt-4">
                    <span>Total Amount</span>
                    <span className="text-green-600">₹{totalAmount.toLocaleString()}</span>
                </div>

                {/* View Expenses Toggle */}
                {selectedExpenses.length > 0 && (
                    <button
                        type="button"
                        onClick={() => setShowExpenses(!showExpenses)}
                        className="self-start bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl font-semibold transition-all"
                    >
                        {showExpenses ? "Hide Expenses" : "View Expenses"}
                    </button>
                )}

                {/* Selected Expenses */}
                {showExpenses && (
                    <div className="border rounded-xl overflow-hidden max-h-72 overflow-y-auto mt-2">
                        <div className="grid grid-cols-3 bg-gray-100 font-semibold text-gray-700 text-sm p-3 border-b">
                            <span>Shop</span>
                            <span>Role</span>
                            <span>Amount</span>
                        </div>
                        {selectedExpenses.map((e) => {
                            const subTotal =
                                e.subtasks?.reduce((s, sub) => s + (sub.amount || 0), 0) || 0;
                            return (
                                <div
                                    key={e._id}
                                    className="grid grid-cols-3 text-sm text-gray-700 p-3 border-b last:border-b-0"
                                >
                                    <span>{e.shop}</span>
                                    <span>{e.role}</span>
                                    <span>₹{(e.amount + subTotal).toLocaleString()}</span>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Action Buttons */}
                <div className="mt-6 flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-3 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-8 py-3 rounded-xl font-semibold text-white bg-linear-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-lg transition-all"
                    >
                        Add Cumulative Payment
                    </button>
                </div>
            </form>
        </div>
    );
}
