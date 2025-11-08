export default function DataTable({ columns = [], data = [] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5">
      <table className="min-w-full">
        <thead>
          <tr className="text-left text-slate-300">
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 text-sm font-medium">{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-4 py-6 text-slate-400 text-sm">No data yet.</td>
            </tr>
          )}
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-white/5">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-sm text-white/90">
                  {typeof col.render === 'function' ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
