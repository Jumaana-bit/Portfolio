export default function FileItem({ label }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 cursor-pointer hover:scale-105 transition p-2 rounded hover:bg-gray-100">
      <img src="/folder2.png" alt={label} className="w-12 h-12 drop-shadow" />
      <span className="text-xs text-center text-gray-800 font-medium">{label}</span>
    </div>
  )
}

