import { useState } from 'react'
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import FileGrid from './FileGrid'

// ✅ 1. Use objects for each file
const folderContents = {
  "Resume": [
    { name: "Resume.pdf", type: "pdf" },
    { name: "TTC job.pdf", type: "pdf" }
  ]
}

// ✅ 2. Map type to icon
const getFileIcon = (type) => {
  switch (type) {
    case "pdf": return "/icons/pdf.png"
    case "doc": return "/icons/doc.png"
    case "txt": return "/icons/txt.png"
    case "image": return "/icons/image.png"
    case "folder": return "/folder.png"
    default: return "/icons/file.png"
  }
}

export default function ExplorerWindow() {
  const [activeView, setActiveView] = useState("desktop");
  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleFolderClick = (folderName) => {
    setSelectedFolder(folderName);
  }

  return (
    <div className="w-[90vw] h-[90vh] bg-white rounded-md shadow-xl border border-gray-300 flex flex-col m-auto mt-10 overflow-hidden">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar
          onSelect={(view) => {
            setActiveView(view);
            setSelectedFolder(null);
          }}
        />
        <div className="flex-1 bg-white p-4">
          {activeView === "desktop" && !selectedFolder && (
            <FileGrid onFolderClick={handleFolderClick} />
          )}

          {activeView === "desktop" && selectedFolder && (
            <div className="p-4 space-y-4">
              <div className="text-lg font-semibold text-gray-700">
                📂 {selectedFolder}
              </div>

              <div className="grid grid-cols-5 gap-6 place-items-center">
                {folderContents[selectedFolder]?.map((file, idx) => (
                  <a
                    key={idx}
                    href={`/files/${file.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-1 hover:scale-105 transition"
                  >
                    <img
                      src={getFileIcon(file.type)}
                      alt={file.name}
                      className="w-12 h-12"
                    />
                    <span className="text-xs text-center text-gray-700">
                      {file.name}
                    </span>
                  </a>
                ))}
              </div>

              <button
                onClick={() => setSelectedFolder(null)}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm"
              >
                ← Back to Desktop
              </button>
            </div>
          )}

          {activeView === "recycle" && (
            <div className="text-gray-500 text-lg">
              🗑️ Recycle Bin is empty!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
