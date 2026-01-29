import React from "react";

const HeaderSection: React.FC = () => {
  return (
    <div className="text-center mb-12 mt-16">
      <h1 className="text-5xl font-black text-gray-900 mb-3 tracking-tight">
        Expense Tracker
      </h1>
      <p className="text-lg text-gray-600">
        Manage your business finances with ease
      </p>
    </div>
  );
};

export default HeaderSection;