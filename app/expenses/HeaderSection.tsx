import React from "react";

const HeaderSection: React.FC = () => {
  return (
    <header className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 px-6 py-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-white" />
      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 text-center md:text-5xl">
            LemonPay Expenses
          </h1>
          <p className="max-w-2xl text-center text-sm text-slate-600 md:text-base">
            Track every purchase with clearer totals, faster edits, and a cleaner workspace designed
            for day-to-day finance operations.
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
