import FileItem from './FileItem'

export default function FileGrid({ onFolderClick }) {
  const folders = ["Resume", "Projects", "Contact", "Certificates", "Interests"]

  return (
    <div className="flex-1 bg-white p-4 grid grid-cols-5 gap-6 place-items-center">
      {folders.map(folder => (
        <div key={folder} onClick={() => onFolderClick(folder)}>
          <FileItem label={folder} />
        </div>
      ))}
    </div>
  )
}