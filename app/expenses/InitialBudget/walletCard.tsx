export default function WalletCard({
  walletKey,
  title,
  stats,
  onEdit,
  onHistory,
}: {
  walletKey: string;
  title: string;
  stats: {
    initialAmount: number;
    spent: number;
    pending: number;
    remaining: number;
  };
  onEdit: () => void;
  onHistory: () => void;
}) {
  const isPostpaid = walletKey === "upi_postpaid";

  const topAmount = isPostpaid
    ? Math.max(stats.pending - stats.spent, 0)
    : stats.remaining;

  const pendingDisplay = stats.pending;

  return (
    <div className="premium-card p-5 md:p-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            isPostpaid ? "bg-violet-100 text-violet-700" : "bg-emerald-100 text-emerald-700"
          }`}>
            {isPostpaid ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            ) : (
              <span className="text-lg font-bold leading-none">₹</span>
            )}
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">{title}</h3>
            <p className="text-xs text-slate-500">{isPostpaid ? "Credit card / Postpaid" : "Cash / Prepaid"}</p>
          </div>
        </div>

        <div className="flex gap-2">
          {!isPostpaid && (
            <button
              onClick={onEdit}
              className="btn-secondary !px-3 !py-1.5 !text-xs"
            >
              Edit
            </button>
          )}
          <button
            onClick={onHistory}
            className="btn-secondary !px-3 !py-1.5 !text-xs"
          >
            History
          </button>
        </div>
      </div>

      {/* Main Stat */}
      <div className="mb-5 rounded-xl bg-slate-50 p-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {isPostpaid ? "Pending Payment" : "Remaining Balance"}
        </div>
        <div className="mt-1 text-3xl font-extrabold text-slate-900">
          {topAmount > 0
            ? isPostpaid
              ? `₹-${topAmount.toLocaleString("en-IN")}`
              : `₹${topAmount.toLocaleString("en-IN")}`
            : "₹0"}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        {!isPostpaid && (
          <div className="rounded-xl border border-slate-100 bg-white p-3 text-center">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Initial
            </div>
            <div className="mt-1 text-base font-bold text-slate-900">
              ₹{stats.initialAmount.toLocaleString("en-IN")}
            </div>
          </div>
        )}
        <div className={`rounded-xl border border-slate-100 bg-white p-3 text-center ${isPostpaid ? "col-span-1" : ""}`}>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Spent
          </div>
          <div className="mt-1 text-base font-bold text-slate-900">
            ₹{stats.spent.toLocaleString("en-IN")}
          </div>
        </div>
        <div className="rounded-xl border border-slate-100 bg-white p-3 text-center">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Pending
          </div>
          <div className="mt-1 text-base font-bold text-slate-900">
            ₹{pendingDisplay.toLocaleString("en-IN")}
          </div>
        </div>
        {isPostpaid && (
          <div className="rounded-xl border border-slate-100 bg-white p-3 text-center">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Limit
            </div>
            <div className="mt-1 text-base font-bold text-slate-900">
              ₹{stats.initialAmount.toLocaleString("en-IN")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}