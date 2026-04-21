"use client"
import React, { useMemo, useState } from 'react'
import { INITIAL_AMOUNT_CONSTANT, isExpensePaid, getExpenseTotal, expenseBelongsToWallet } from '../lib/expense-helpers';
import { InitialAmountHistoryEntry } from '../components/types';
import { toast } from 'react-toastify';
import { WalletKey, WALLETS } from './walletType';
import WalletCard from './walletCard';
import EditInitialAmountModal from './EditInitialAmountModal';


interface InitialBudgetProps {
    budgetPeriodStart: string;
    setShowInitialAmountHistory: (show: boolean) => void;
    expenses: any;
    initialAmountHistory: InitialAmountHistoryEntry[];
    setInitialAmountHistory: any;
    onOpenHistory: (wallet: WalletKey) => void;
    activeWallet: WalletKey | null;
    onEditWallet: (wallet: WalletKey) => void;
}

function InitialBudget({ budgetPeriodStart, setShowInitialAmountHistory, expenses, initialAmountHistory, setInitialAmountHistory, onOpenHistory,
    activeWallet,
    onEditWallet }: InitialBudgetProps) {
    // const [expenses, setExpenses] = useState<Expense[]>([]);
    const [isEditingInitialAmount, setIsEditingInitialAmount] = useState(false);
    // const [initialAmountHistory, setInitialAmountHistory] = useState<
    //     InitialAmountHistoryEntry[]
    // >([]);
    const [, setActiveWallet] = useState<WalletKey | null>(null);
    console.log('activeWallet: ', activeWallet);
    const [showEdit, setShowEdit] = useState(false);

    console.log("initialAmountHistoryinitialAmountHistory", initialAmountHistory);

    const initialAmount =
        initialAmountHistory[0]?.amount || INITIAL_AMOUNT_CONSTANT;
    const [initialAmountInput, setInitialAmountInput] = useState(
        initialAmount.toString()


    );

    const walletStats = useMemo(() => {
        const map: Record<WalletKey, {
            spent: number;
            pending: number;
            remaining: number;
            initialAmount: number;
        }> = {} as any;

        WALLETS.forEach(({ key }) => {
            const walletHistory = initialAmountHistory
                .filter((h: any) => h.wallet === key)
                .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

            const initialAmount =
                walletHistory[0]?.amount ?? INITIAL_AMOUNT_CONSTANT;

            let spent = 0;
            let pending = 0;

            expenses
                .filter((e: any) => e.date >= budgetPeriodStart)
                .filter((e: any) => expenseBelongsToWallet(e, key))
                .forEach((e: any) => {
                    if (isExpensePaid(e)) {
                        spent += getExpenseTotal(e);
                    } else {
                        pending += getExpenseTotal(e);
                    }
                });

            map[key] = {
                spent,
                pending,
                remaining: initialAmount - spent,
                initialAmount,
            };
        });

        return map;
    }, [expenses, initialAmountHistory, budgetPeriodStart]);
    // const [budgetPeriodStart, setBudgetPeriodStart] = useState(() => {
    //     const now = new Date().toISOString().slice(0, 10);
    //     return getMonthStart(now);
    // });

    // const [showInitialAmountHistory, setShowInitialAmountHistory] = useState(false);

    // const walletStats = useMemo(() => {
    //     let spent = 0;
    //     let pending = 0;

    //     const periodExpenses = expenses.filter(
    //         (e: any) => e.date >= budgetPeriodStart
    //     );

    //     periodExpenses.forEach((e: any) => {
    //         const base = e.amount;
    //         const subsTotal = (e.subtasks || []).reduce(
    //             (sum: any, s: any) => sum + (s.amount || 0),
    //             0
    //         );
    //         const full = base + subsTotal;

    //         const paid = isExpensePaid(e);

    //         if (paid) {
    //             spent += full;
    //         } else {
    //             pending += full;
    //         }
    //     });

    //     const remaining = initialAmount - spent;
    //     return { spent, pending, remaining };
    // }, [expenses, initialAmount, budgetPeriodStart]);

    const handleUpdateInitialAmount = async () => {
        const newAmount = Number(initialAmountInput);
        if (!Number.isNaN(newAmount) && newAmount >= 0) {
            const newEntry: InitialAmountHistoryEntry = {
                amount: newAmount,
                date: new Date().toISOString(),
                walletType: "cash"
            };

            if (newAmount !== initialAmountHistory[0]?.amount) {
                try {
                    const res = await fetch("/api/initial-amount", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(newEntry),
                    });
                    console.log("resres", res);
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
        <>
            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {WALLETS.map(w => (
                        <WalletCard
                            key={w.key}
                            walletKey={w.key}
                            title={w.label}
                            stats={walletStats[w.key]}
                            onEdit={() => {
                                onEditWallet(w.key);
                                setShowEdit(true);
                            }}
                            onHistory={() => {
                                onOpenHistory(w.key);
                            }}
                        />
                    ))}
                </div>
            </div>

            {showEdit && activeWallet && (
                <EditInitialAmountModal
                    wallet={activeWallet}
                    currentAmount={walletStats[activeWallet].initialAmount}
                    onClose={() => setShowEdit(false)}
                    onSave={async (newEntry: any) => {
                        try {
                            const res = await fetch("/api/initial-amount", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(newEntry),
                            });

                            const json = await res.json();
                            if (!json.success) {
                                toast.error(json.error || "Failed to save initial amount.");
                                return;
                            }

                            setInitialAmountHistory((prev: any) => [newEntry, ...prev]);
                            toast.success("Initial amount updated successfully!");
                        } catch (err: any) {
                            toast.error(err.message || "Failed to update initial amount.");
                        }
                    }}
                />
            )}


        </>

    )
}

export default InitialBudget
