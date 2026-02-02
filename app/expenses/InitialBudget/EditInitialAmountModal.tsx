import React, { useState } from "react";
import { toast } from "react-toastify";
import { InitialAmountHistoryEntry } from "../components/types";

interface EditInitialAmountModalProps {
    wallet: string;
    currentAmount: number;
    onClose: () => void;
    onSave: any
}

const EditInitialAmountModal: React.FC<EditInitialAmountModalProps> = ({
    wallet,
    currentAmount,
    onClose,
    onSave,
}) => {
    console.log("walletwallet", wallet);
    const [amount, setAmount] = useState(currentAmount.toString());
    const handleSave = () => {
        const num = Number(amount);
        if (isNaN(num) || num < 0) {
            toast.error("Enter a valid amount");
            return;
        }
        if (num === currentAmount) {
            toast.info("No changes made");
            onClose();
            return;
        }
        onSave({
            amount: num,
            date: new Date().toISOString(),
            wallet: wallet,
        });
        onClose();
    };


    return (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full">
                <h3 className="text-xl font-bold mb-4">Edit {wallet} Initial Amount</h3>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full border rounded px-3 py-2 mb-4"
                />
                <div className="flex justify-end gap-2">
                    <button
                        className="px-4 py-2 bg-gray-200 rounded"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                        onClick={
                            handleSave}

                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditInitialAmountModal;
