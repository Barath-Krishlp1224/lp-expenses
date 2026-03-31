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
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xs font-extrabold tracking-widest uppercase text-gray-800">
          {title}
        </h3>

        <div className="flex gap-2">
          {!isPostpaid && (
            <button
              onClick={onEdit}
              className="px-3 py-1 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition shadow-sm"
            >
              Edit
            </button>
          )}
          <button
            onClick={onHistory}
            className="px-3 py-1 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition shadow-sm"
          >
            History
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {!isPostpaid && (
          <div className="p-4 rounded-xl bg-white border border-gray-200 text-center">
            <div className="text-xs uppercase tracking-wide text-gray-800">
              Initial
            </div>
            <div className="mt-1 text-3xl font-bold text-gray-900">
              ₹{stats.initialAmount.toLocaleString()}
            </div>
          </div>
        )}

        <div className="p-4 rounded-xl bg-white border border-gray-200 text-center">
          <div className="text-xs uppercase tracking-wide text-gray-800">
            {isPostpaid ? "Pending Payment" : "Remaining"}
          </div>
          <div className="mt-1 text-3xl font-extrabold text-gray-900">
            {topAmount > 0
              ? isPostpaid
                ? `₹-${topAmount.toLocaleString()}`
                : `₹${topAmount.toLocaleString()}`
              : "₹0"}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm font-semibold">
        <div className="flex flex-col items-center p-4 rounded-xl bg-white border border-gray-200">
          <span className="text-xs uppercase tracking-wide text-gray-800">
            Spent
          </span>
          <span className="mt-1 text-lg font-bold text-gray-900">
            ₹{stats.spent.toLocaleString()}
          </span>
        </div>

        <div className="flex flex-col items-center p-4 rounded-xl bg-white border border-gray-200">
          <span className="text-xs uppercase tracking-wide text-gray-800">
            Pending
          </span>
          <span className="mt-1 text-lg font-bold text-gray-900">
            ₹{pendingDisplay.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
