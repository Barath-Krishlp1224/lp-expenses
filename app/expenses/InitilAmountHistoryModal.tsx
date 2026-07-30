import React from "react";
import { InitialAmountHistoryEntry } from "./components/types";

interface InitialAmountHistoryModalProps {
  history: InitialAmountHistoryEntry[];
  onClose: () => void;
}

const InitialAmountHistoryModal: React.FC<InitialAmountHistoryModalProps> = ({ 
  history, 
  onClose 
}) => {
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-5 border-b border-slate-200 pb-4">
          <h3 className="text-lg font-bold text-slate-900">
            Initial Budget History
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <p className="text-sm text-slate-500 mb-4">
          This log shows all changes made to the initial budget amount.
        </p>
        <div className="space-y-2">
          {history.map((entry, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 rounded-xl border border-slate-100 bg-white"
            >
              <div>
                <div className="font-bold text-slate-900">
                  ₹{entry.amount.toLocaleString("en-IN")}
                  {index === 0 && (
                    <span className="ml-2 inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                      Current
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500 font-medium">
                  {new Date(entry.date).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
        {history.length === 0 && (
          <p className="text-center text-slate-500 pt-4">No history found.</p>
        )}
      </div>
    </div>
  );
};

export default InitialAmountHistoryModal;