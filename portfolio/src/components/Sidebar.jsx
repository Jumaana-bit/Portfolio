export default function Sidebar() {
  return (
    <div className="w-48 bg-gray-50 border-r border-gray-200 p-2 text-sm">
      <div className="hover:bg-gray-200 p-2 rounded flex items-center gap-2 cursor-pointer">
        🖥 <span>Desktop</span>
      </div>
      <div className="hover:bg-gray-200 p-2 rounded flex items-center gap-2 cursor-pointer">
        🗑 <span>Recycle Bin</span>
      </div>
    </div>
  )
}
