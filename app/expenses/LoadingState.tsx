import React from "react";

interface LoadingStateProps {
  message?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = "Loading expenses..." 
}) => {
  return (
    <div className="p-12 text-center">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-slate-900 border-t-transparent"></div>
      <p className="mt-3 text-sm font-medium text-slate-500">{message}</p>
    </div>
  );
};

export default LoadingState;