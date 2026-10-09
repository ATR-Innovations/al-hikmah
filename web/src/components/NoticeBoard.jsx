const NoticeBoard = ({ fullPage = false }) => {
  const notices = [
    { id: 1, date: "20 Jan", text: "Final exam schedule published." },
    { id: 2, date: "15 Jan", text: "Admission open for 2026 session." },
    { id: 3, date: "10 Jan", text: "Annual sports day announcement." },
    { id: 4, date: "05 Jan", text: "Parent-teacher meeting on Sunday." },
  ];

  if (fullPage) {
    return (
      <section className="py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between gap-3">
            <h2 className="text-3xl font-bold text-gray-900">Notice Board</h2>
            <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
              Latest Updates
            </button>
          </div>

          <div className="rounded-2xl border-t-4 border-blue-600 bg-white p-5 shadow-lg sm:p-6">
            <div className="space-y-4">
              {notices.map((notice) => (
                <div
                  key={notice.id}
                  className="flex flex-col gap-3 border-b border-gray-100 pb-3 sm:flex-row sm:items-start"
                >
                  <span className="inline-flex w-fit items-center rounded bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700 whitespace-nowrap">
                    {notice.date}
                  </span>
                  <p className="text-sm text-gray-700 transition hover:text-blue-600 sm:text-base">
                    {notice.text}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full text-left text-sm font-semibold text-blue-600 hover:underline sm:text-base">
              View All Notices →
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-white border-t-4 border-blue-600 shadow-lg rounded-xl p-4 h-full">
      <h3 className="text-xl font-bold border-b pb-2 mb-4 flex items-center gap-2">
        <span>🔔</span> Notice Board
      </h3>
      <div className="space-y-4 overflow-y-auto max-h-[320px]">
        {notices.map((notice) => (
          <div key={notice.id} className="flex gap-3 items-start border-b border-gray-100 pb-2">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
              {notice.date}
            </span>
            <p className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer transition">
              {notice.text}
            </p>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full text-blue-600 text-sm font-semibold hover:underline">
        View All Notices →
      </button>
    </div>
  );
};

export default NoticeBoard;