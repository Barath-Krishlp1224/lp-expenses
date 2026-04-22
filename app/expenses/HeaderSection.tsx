import React from "react";

const HeaderSection: React.FC = () => {
  return (
    <header className="relative py-4 overflow-hidden">
      <div className="max-w-5xl mx-auto relative px-6">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center">
            LemonPay Expenses
          </h1>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
