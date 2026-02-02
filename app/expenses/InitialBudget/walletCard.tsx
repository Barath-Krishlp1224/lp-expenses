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

  // Top box amount: Postpaid reduces pending by spent, others show remaining
  const topAmount = isPostpaid ? Math.max(stats.pending - stats.spent, 0) : stats.remaining;
  const topAmountColor = isPostpaid && topAmount > 0 ? "text-red-500" : "text-gray-900";

  // Stats box: pending display
  const pendingDisplay = stats.pending;

  return (
    <div className="bg-linear-to-r from-gray-100 via-white to-gray-50
                    rounded-2xl p-6 shadow-md border border-gray-200
                    hover:shadow-lg hover:scale-[1.015] transition-all duration-200 w-full max-w-xl">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">{title}</h3>
        <div className="flex gap-2">
          {!isPostpaid && (
            <button
              onClick={onEdit}
              className="px-3 py-1 text-xs font-semibold rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100"
            >
              Edit
            </button>
          )}
          <button
            onClick={onHistory}
            className="px-3 py-1 text-xs font-semibold rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100"
          >
            History
          </button>
        </div>
      </div>

      {/* Top Boxes: Initial & Remaining/Pending */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {!isPostpaid && (
          <div className="p-4 bg-white rounded-lg shadow-inner text-center flex flex-col justify-center">
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Initial</div>
            <div className="text-3xl font-bold text-gray-900">
              ₹{stats.initialAmount.toLocaleString()}
            </div>
          </div>
        )}

        <div className="p-4 bg-white rounded-lg shadow-inner text-center flex flex-col justify-center">
          <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            {isPostpaid ? "Pending Payment" : "Remaining"}
          </div>
          <div className={`text-3xl font-extrabold ${topAmountColor}`}>
            {isPostpaid
              ? `₹-${topAmount.toLocaleString()}`
              : `₹${topAmount.toLocaleString()}`
            }
          </div>
        </div>
      </div>

      {/* Stats: Spent & Pending */}
      <div className="grid grid-cols-2 gap-4 text-sm font-semibold">
        <div className="flex flex-col items-center p-3 bg-red-50 rounded-lg shadow-inner">
          <span className="text-red-600 text-xs uppercase tracking-wide">Spent</span>
          <span className="text-lg font-bold text-red-700">₹{stats.spent.toLocaleString()}</span>
        </div>

        <div className="flex flex-col items-center p-3 bg-yellow-50 rounded-lg shadow-inner">
          <span className="text-yellow-600 text-xs uppercase tracking-wide">
            {isPostpaid ? "Pending" : "Pending"}
          </span>
          <span className="text-lg font-bold text-yellow-700">₹{pendingDisplay.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
