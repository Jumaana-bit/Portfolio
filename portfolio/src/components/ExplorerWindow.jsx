import { useState } from 'react'
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import FileGrid from './FileGrid'
import NavigationBar from './NavigationBar'
import FilePreview from './FilePreview'
import FileItem from './FileItem'

const folderContents = {
  "Home Page": [{ name: "About Me.pdf", type: "pdf" }],
  "Education": [
    { name: "ONTECH Degree.pdf", type: "pdf" },
    { name: "Courses.pdf", type: "pdf" }
  ],
  "Experience": [
    { name: "OPS.pdf", type: "pdf" },
    { name: "Helios.pdf", type: "pdf" },
    { name: "Wouessi.pdf", type: "pdf" }
  ],
  "Projects": [
    { name: "Age and Gender Recognition System.png", type: "image" },
    { name: "Sky High Travels.pdf", type: "pdf" },
    { name: "Virtual Memory.pdf", type: "pdf" },
    { name: "Amusement Park Service.pdf", type: "pdf" }
  ],
  "Certificates": [
    { name: "Certificate.pdf", type: "pdf" },
    { name: "Catalyst Challenge.pdf", type: "pdf" },
    { name: "Jumaana Aslam ADC.pdf", type: "pdf" },
    { name: "Seize the Moment.pdf", type: "pdf" },
    { name: "Academic Achievements.pdf", type: "pdf" }
  ]
}

const recycleBinItems = [
  {
    name: "ReasonsToHire_Jumaana.txt",
    type: "txt"
  }
]

export default function ExplorerWindow() {
  const [activeView, setActiveView] = useState("desktop")
  const [selectedFolder, setSelectedFolder] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [search, setSearch] = useState('')
  const [currentPath, setCurrentPath] = useState(["Desktop"])
  const [recyclePreview, setRecyclePreview] = useState(null)

  const handleFolderClick = (folderName) => {
    setSelectedFolder(folderName)
    setSelectedFile(null)
  }

  const filteredFolders = Object.keys(folderContents).filter(folderName =>
    folderName.toLowerCase().includes(search.toLowerCase())
  )
  const filteredFiles = selectedFolder
    ? (folderContents[selectedFolder] || []).filter(file =>
        file.name.toLowerCase().includes(search.toLowerCase())
      )
    : []

  return (
    <div className="w-[90vw] h-[90vh] bg-white rounded-md shadow-xl border border-gray-300 flex flex-col m-auto mt-10 overflow-hidden">
      <TopBar selectedFolder={selectedFolder} />

      <NavigationBar
        selectedFolder={selectedFolder}
        currentPath={currentPath}
        activeView={activeView}
        onBack={() => {
            if (activeView === "recycle") {
              setRecyclePreview(null)
            } else {
              setSelectedFolder(null)
              setSelectedFile(null)
              setSearch('')
            }
        }}
        onSearch={setSearch}
      />

      <div className="flex flex-1 overflow-hidden">
        <div className="w-60 flex-shrink-0">
          <Sidebar
            onSelect={(view) => {
              setActiveView(view)
              setSelectedFolder(null)
              setSelectedFile(null)
              setSearch('')
            }}
            currentPath={currentPath}
            setCurrentPath={setCurrentPath}
          />
        </div>

        <main className="flex-1 overflow-auto p-4 bg-white">
          {activeView === "desktop" && !selectedFolder && (
            <FileGrid folders={filteredFolders} onFolderClick={handleFolderClick} />
          )}

          {activeView === "desktop" && selectedFolder && (
            <div className="space-y-4">
              <div className="grid grid-cols-5 gap-6 place-items-center">
                {filteredFiles.map((file, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedFile(file)}
                    className="cursor-pointer"
                  >
                    <FileItem label={file.name} fileType={file.type} />
                  </div>
                ))}
              </div>

              <FilePreview file={selectedFile} onClose={() => setSelectedFile(null)} />
            </div>
          )}

          {activeView === "recycle" && (
            <div className="space-y-4">
              {recyclePreview ? (
                <FilePreview
                  file={recyclePreview}
                  onClose={() => setRecyclePreview(null)}
                />
              ) : (
                <>
                  <h2 className="text-lg font-semibold text-gray-700">Recycle Bin</h2>
                  <div className="grid grid-cols-5 gap-6 place-items-center">
                    {recycleBinItems.map((file, idx) => (
                      <div
                        key={idx}
                        onClick={() => setRecyclePreview(file)}
                        className="cursor-pointer"
                      >
                        <FileItem label={file.name} fileType={file.type} />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
