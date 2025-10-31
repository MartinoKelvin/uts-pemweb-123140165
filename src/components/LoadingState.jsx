export default function LoadingState() {
  return (
    <div className="space-y-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 h-48 animate-pulse" />
      ))}
    </div>
  )
}
