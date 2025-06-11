export default function Sidebar({ onSelect }) {
  return (
    <div className="w-48 bg-gray-100 border-r border-gray-300 p-2 text-sm">
      <div
        onClick={() => onSelect("desktop")}
        className="hover:bg-gray-200 p-2 rounded flex items-center gap-2 cursor-pointer"
      >
        🖥 <span>Desktop</span>
      </div>
      <div
        onClick={() => onSelect("recycle")}
        className="hover:bg-gray-200 p-2 rounded flex items-center gap-2 cursor-pointer"
      >
        🗑 <span>Recycle Bin</span>
      </div>
    </div>
  )
}
