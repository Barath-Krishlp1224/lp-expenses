import React, { useMemo, useState } from 'react'
import { INITIAL_AMOUNT_CONSTANT, InitialAmountHistoryEntry } from '../components/types';
import { Expense, isExpensePaid } from '../types';
import { toast } from 'react-toastify';


const getMonthStart = (dateString: string) => {
    const date = new Date(dateString);
    return new Date(date.getFullYear(), date.getMonth(), 1)
        .toISOString()
        .slice(0, 10);
};
function InitialBudget({ budgetPeriodStart, setShowInitialAmountHistory, expenses,initialAmountHistory, setInitialAmountHistory }: any) {
    // const [expenses, setExpenses] = useState<Expense[]>([]);
    const [isEditingInitialAmount, setIsEditingInitialAmount] = useState(false);
    // const [initialAmountHistory, setInitialAmountHistory] = useState<
    //     InitialAmountHistoryEntry[]
    // >([]);
    console.log("initialAmountHistoryinitialAmountHistory",initialAmountHistory);

    const initialAmount =
        initialAmountHistory[0]?.amount || INITIAL_AMOUNT_CONSTANT;
    const [initialAmountInput, setInitialAmountInput] = useState(
        initialAmount.toString()
    );
    // const [budgetPeriodStart, setBudgetPeriodStart] = useState(() => {
    //     const now = new Date().toISOString().slice(0, 10);
    //     return getMonthStart(now);
    // });

    // const [showInitialAmountHistory, setShowInitialAmountHistory] = useState(false);

    const walletStats = useMemo(() => {
        let spent = 0;
        let pending = 0;

        const periodExpenses = expenses.filter(
            (e: any) => e.date >= budgetPeriodStart
        );

        periodExpenses.forEach((e: any) => {
            const base = e.amount;
            const subsTotal = (e.subtasks || []).reduce(
                (sum: any, s: any) => sum + (s.amount || 0),
                0
            );
            const full = base + subsTotal;

            const paid = isExpensePaid(e);

            if (paid) {
                spent += full;
            } else {
                pending += full;
            }
        });

        const remaining = initialAmount - spent;
        return { spent, pending, remaining };
    }, [expenses, initialAmount, budgetPeriodStart]);

    const handleUpdateInitialAmount = async () => {
        const newAmount = Number(initialAmountInput);
        if (!Number.isNaN(newAmount) && newAmount >= 0) {
            const newEntry: InitialAmountHistoryEntry = {
                amount: newAmount,
                date: new Date().toISOString(),
            };

            if (newAmount !== initialAmountHistory[0]?.amount) {
                try {
                    const res = await fetch("/api/initial-amount", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(newEntry),
                    });
                    console.log("resres",res);
                    const json = await res.json();
                    if (!json.success) {
                        toast.error(
                            json.error || "Failed to save initial amount to database."
                        );
                        return;
                    }

                    const newHistory = [newEntry, ...initialAmountHistory];
                    setInitialAmountHistory(newHistory);
                    toast.success("Initial amount updated successfully!");
                } catch (err: any) {
                    toast.error(err.message || "Failed to update initial amount.");
                }
            }
            setIsEditingInitialAmount(false);
        } else {
            toast.error("Please enter a valid amount.");
        }
    };




    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">
                            Initial Budget
                        </div>
                        {!isEditingInitialAmount && (
                            <div className="text-3xl font-black text-gray-900">
                                ₹{initialAmount.toLocaleString()}
                            </div>
                        )}
                    </div>
                    <div className="flex gap-2">
                        {!isEditingInitialAmount && (
                            <button
                                onClick={() => {
                                    setIsEditingInitialAmount(true);
                                    setInitialAmountInput(initialAmount.toString());
                                }}
                                className="px-3 py-1 rounded-lg text-xs font-bold text-blue-600 bg-blue-100 hover:bg-blue-200 transition-all"
                            >
                                Edit
                            </button>
                        )}
                        <button
                            onClick={() => setShowInitialAmountHistory(true)}
                            className="px-3 py-1 rounded-lg text-xs font-bold text-teal-600 bg-teal-100 hover:bg-teal-200 transition-all"
                        >
                            History
                        </button>
                    </div>
                </div>
                {isEditingInitialAmount && (
                    <div className="space-y-3">
                        <input
                            type="number"
                            value={initialAmountInput}
                            onChange={(e) => setInitialAmountInput(e.target.value)}
                            className="w-full border-2 border-gray-300 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500"
                            placeholder="Enter new amount"
                        />
                        <div className="flex gap-2">
                            <button
                                onClick={handleUpdateInitialAmount}
                                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-bold transition-all"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => {
                                    setIsEditingInitialAmount(false);
                                    setInitialAmountInput(initialAmount.toString());
                                }}
                                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-2 rounded-lg text-sm font-bold transition-all"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-linear-to-br from-white to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                    Total Spent (Current Period)
                </div>
                <div className="text-3xl font-black text-black">
                    ₹{walletStats.spent.toLocaleString()}
                </div>
            </div>

            <div className="bg-linear-to-br from-white to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                    Pending (Current Period)
                </div>
                <div className="text-3xl font-black text-black">
                    ₹{walletStats.pending.toLocaleString()}
                </div>
            </div>

            <div className="bg-linear-to-br from-white to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                    Remaining (Current Period)
                </div>
                <div className="text-3xl font-black text-black">
                    ₹{walletStats.remaining.toLocaleString()}
                </div>
            </div>
        </div>
    )
}

export default InitialBudget