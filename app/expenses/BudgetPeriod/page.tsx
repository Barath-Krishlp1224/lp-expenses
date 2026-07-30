"use client"
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
        <div className="premium-card p-5 md:p-6">
            <h3 className="text-base font-bold text-slate-900 mb-4">
                Current Budget Period
            </h3>
            <div className="flex flex-col md:flex-row items-end gap-4">
                <div className="flex-1 w-full">
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                        Period Start Date (Resets Wallet Stats)
                    </label>
                    <input
                        type="date"
                        value={budgetPeriodStart}
                        onChange={(e) => setBudgetPeriodStart(e.target.value)}
                        className="input-field"
                    />
                </div>
                <button
                    onClick={() => {
                        const now = new Date().toISOString().slice(0, 10);
                        setBudgetPeriodStart(getMonthStart(now));
                        toast.info("Budget period reset to the start of the current month.");
                    }}
                    className="btn-primary w-full md:w-auto"
                >
                    Reset to Current Month
                </button>
            </div>
        </div>
    )
}

export default CurrentBudgetPeriod