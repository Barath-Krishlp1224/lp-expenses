import React from "react";

interface AddExpenseButtonProps {
  // showAddForm: boolean;
  onClick: () => void;
}

const AddExpenseButton: React.FC<AddExpenseButtonProps> = ({
  // showAddForm,
  onClick,
}) => {
  // if (showAddForm) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-4xl font-light shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Add New Expense"
    >
      +
    </button>
  );
};

export default AddExpenseButton;