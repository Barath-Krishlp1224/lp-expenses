import React, { useState } from 'react'
import { toast } from 'react-toastify';


function CurrentBudgetPeriod({ budgetPeriodStart }: any) {
    const getMonthStart = (dateString: string) => {
        const date = new Date(dateString);
        return new Date(date.getFullYear(), date.getMonth(), 1)
            .toISOString()
            .slice(0, 10);
    };
    const [, setBudgetPeriodStart] = useState(() => {
        const now = new Date().toISOString().slice(0, 10);
        return getMonthStart(now);
    });

    return (
        <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100">
            <h3 className="text-xl font-black text-gray-900 mb-4">
                Current Budget Period
            </h3>
            <div className="flex flex-col md:flex-row items-end gap-4">
                <div className="flex-1 w-full">
                    <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Period Start Date (Resets Wallet Stats)
                    </label>
                    <input
                        type="date"
                        value={budgetPeriodStart}
                        onChange={(e) => setBudgetPeriodStart(e.target.value)}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white"
                    />
                </div>
                <button
                    onClick={() => {
                        const now = new Date().toISOString().slice(0, 10);
                        setBudgetPeriodStart(getMonthStart(now));
                        toast.info("Budget period reset to the start of the current month.");
                    }}
                    className="w-full md:w-auto px-6 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition-all flex items-center justify-center text-sm"
                >
                    Reset to Current Month
                </button>
            </div>
        </div>
    )
}

export default CurrentBudgetPeriod