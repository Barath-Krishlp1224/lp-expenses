import React from "react";

interface AddExpenseButtonProps {
  onClick: () => void;
}

const AddExpenseButton: React.FC<AddExpenseButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-2xl font-light text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-slate-800 hover:shadow-2xl"
      aria-label="Add New Expense"
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </button>
  );
};

export default AddExpenseButton;