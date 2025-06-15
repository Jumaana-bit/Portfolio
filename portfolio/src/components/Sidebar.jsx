export default function Sidebar({ onSelect }) {
  return (
    <div className="flex flex-col h-full p-4 space-y-4 bg-gray-50 border-r border-gray-200">
      {/* Top-level label */}
      <div className="text-xs text-gray-500 font-semibold tracking-wide px-1">
        Jumaana – Personal
      </div>

      {/* Folder entries */}
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => onSelect("desktop")}
          className="flex items-center text-sm text-gray-800 hover:bg-blue-100 px-2 py-1 rounded space-x-2"
        >
          <span className="text-gray-400">{'>'}</span>
          <span>🖥️</span>
          <span>Desktop</span>
        </button>

        <button
          onClick={() => onSelect("recycle")}
          className="flex items-center text-sm text-gray-800 hover:bg-blue-100 px-2 py-1 rounded space-x-2"
        >
          <span className="text-gray-400">{'>'}</span>
          <span>🗑️</span>
          <span>Recycle Bin</span>
        </button>
      </div>
    </div>
  )
}
