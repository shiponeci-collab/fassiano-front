export default function Loading() {
  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="h-20 w-48 bg-white/5 animate-pulse rounded-lg mx-auto" />
        <div className="h-4 w-64 bg-white/5 animate-pulse rounded mx-auto" />
      </div>
    </div>
  )
}
