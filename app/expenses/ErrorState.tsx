import React from "react";

interface ErrorStateProps {
  error: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  return (
    <div className="p-16 text-center">
      <div className="inline-block w-16 h-16 rounded-full bg-red-100 items-center justify-center mb-4">
        <span className="text-3xl text-red-600">!</span>
      </div>
      <p className="text-red-600 font-bold">{error}</p>
    </div>
  );
};

export default ErrorState;