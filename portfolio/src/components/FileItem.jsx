export default function FileItem({ label }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 cursor-pointer hover:scale-105 transition">
      <img src="/folder.png" alt={label} className="w-12 h-12" />
      <span className="text-xs text-center">{label}</span>
    </div>
  )
}
