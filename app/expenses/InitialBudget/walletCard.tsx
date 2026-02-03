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

  /* 🎨 STRONG, DISTINCT WALLET THEMES */
  const theme =
    walletKey === "cash"
      ? {
        // Fresh, premium green (cash feel)
        outer:
          "from-emerald-500 via-emerald-300 to-lime-200",
        inner:
          "from-emerald-50 via-emerald-100/80 to-white",
        accent: "text-emerald-900",
        chip: "bg-emerald-200/80 text-emerald-900",
      }
      : walletKey === "upi_prepaid"
        ? {
          // Clean digital blue (trust + tech)
          outer:
            "from-indigo-500 via-blue-400 to-sky-300",
          inner:
            "from-indigo-50 via-blue-100/80 to-white",
          accent: "text-indigo-900",
          chip: "bg-indigo-200/80 text-indigo-900",
        }
        : {
          // Credit risk / postpaid (warm + danger)
          outer:
            "from-rose-500 via-orange-400 to-amber-300",
          inner:
            "from-rose-50 via-orange-100/80 to-white",
          accent: "text-rose-900",
          chip: "bg-rose-200/80 text-rose-900",
        };


  return (
    <div
      className={`
    relative w-full rounded-3xl p-0.5
    bg-linear-to-br ${theme.outer}
    transition-all duration-300
    hover:scale-[1.02]
    hover:shadow-2xl
  `}
    >

      {/* Inner card WITH gradient */}
      <div
        className={`
          rounded-3xl p-6
          bg-linear-to-br ${theme.inner}
          backdrop-blur-xl
          animate-fade-in
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3
            className={`text-xs font-extrabold tracking-widest uppercase ${theme.accent}`}
          >
            {title}
          </h3>

          <div className="flex gap-2">
            {!isPostpaid && (
              <button
                onClick={onEdit}
                className="px-3 py-1 text-xs font-semibold rounded-lg bg-white/70 hover:bg-white active:scale-95 transition"
              >
                Edit
              </button>
            )}
            <button
              onClick={onHistory}
              className={`px-3 py-1 text-xs font-semibold rounded-lg ${theme.chip} active:scale-95 transition`}
            >
              History
            </button>
          </div>
        </div>

        {/* Main numbers */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {!isPostpaid && (
            <div className="p-4 rounded-xl bg-white/70 shadow-inner text-center hover:-translate-y-1 transition">
              <div className="text-xs uppercase tracking-wide text-gray-500">
                Initial
              </div>
              <div className="mt-1 text-3xl font-bold text-gray-900">
                ₹{stats.initialAmount.toLocaleString()}
              </div>
            </div>
          )}

          <div className="p-4 rounded-xl bg-white/70 shadow-inner text-center hover:-translate-y-1 transition">
            <div className="text-xs uppercase tracking-wide text-gray-500">
              {isPostpaid ? "Pending Payment" : "Remaining"}
            </div>
            <div className={`mt-1 text-3xl font-extrabold ${theme.accent}`}>
              {topAmount > 0
                ? isPostpaid
                  ? `₹-${topAmount.toLocaleString()}`
                  : `₹${topAmount.toLocaleString()}`
                : "₹0"}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 text-sm font-semibold">
          <div className="flex flex-col items-center p-4 rounded-xl bg-red-50/80 shadow-inner hover:-translate-y-1 transition">
            <span className="text-xs uppercase tracking-wide text-red-600">
              Spent
            </span>
            <span className="mt-1 text-lg font-bold text-red-700">
              ₹{stats.spent.toLocaleString()}
            </span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-xl bg-yellow-50/80 shadow-inner hover:-translate-y-1 transition">
            <span className="text-xs uppercase tracking-wide text-yellow-700">
              Pending
            </span>
            <span className="mt-1 text-lg font-bold text-yellow-800">
              ₹{pendingDisplay.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
