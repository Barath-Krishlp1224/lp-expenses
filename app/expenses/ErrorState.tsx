import React from "react";

interface ErrorStateProps {
  error: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  return (
    <div className="p-16 text-center">
      <div className="inline-flex w-16 h-16 rounded-full border border-gray-300 items-center justify-center mb-4">
        <span className="text-3xl text-gray-900">!</span>
      </div>
      <p className="text-gray-900 font-bold">{error}</p>
    </div>
  );
};

export default ErrorState;
