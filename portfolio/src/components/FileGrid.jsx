import FileItem from './FileItem'

export default function FileGrid({ folders = [], files = [], onFolderClick, onFileClick }) {
  // If showing folders
  if (folders.length > 0) {
    return (
      <div className="flex-1 bg-white p-4 grid grid-cols-5 gap-6 place-items-center">
        {folders.map((folder) => (
          <div key={folder} onClick={() => onFolderClick && onFolderClick(folder)} className="cursor-pointer">
            <FileItem label={folder} isFolder={true} />
          </div>
        ))}
      </div>
    )
  }

  // If showing files
  if (files.length > 0) {
    return (
      <div className="flex-1 bg-white p-4 grid grid-cols-5 gap-6 place-items-center">
        {files.map((file, idx) => (
          <div key={idx} onClick={() => onFileClick && onFileClick(file)} className="cursor-pointer">
            <FileItem label={file.name} fileType={file.type} />
          </div>
        ))}
      </div>
    )
  }

  // Nothing to show
  return (
    <div className="flex-1 bg-white p-4 text-center text-gray-500">
      No items found
    </div>
  )
}
