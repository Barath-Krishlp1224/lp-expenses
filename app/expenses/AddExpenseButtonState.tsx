import React from "react";

interface AddExpenseButtonProps {
  showAddForm: boolean;
  onClick: () => void;
}

const AddExpenseButton: React.FC<AddExpenseButtonProps> = ({
  showAddForm,
  onClick,
}) => {
  if (showAddForm) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-linear-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-4xl font-light shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Add New Expense"
    >
      +
    </button>
  );
};

export default AddExpenseButton;