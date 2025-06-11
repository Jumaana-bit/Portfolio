import { useState } from 'react'
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import FileGrid from './FileGrid'

export default function ExplorerWindow() {
  const [activeView, setActiveView] = useState("desktop");

  return (
    <div className="w-[90vw] h-[90vh] bg-white rounded-md shadow-xl border border-gray-300 flex flex-col m-auto mt-10 overflow-hidden">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar onSelect={setActiveView} />
        <div className="flex-1 bg-white p-4">
          {activeView === "desktop" && <FileGrid />}
          {activeView === "recycle" && (
            <div className="text-gray-500 text-lg">🗑️ Recycle Bin is empty!</div>
          )}
        </div>
      </div>
    </div>
  )
}
