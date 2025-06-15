export default function FileItem({ label, isFolder = false, fileType }) {
  // Map file types to icon paths
  const iconMap = {
    pdf: "/icons/pdf.png",
    doc: "/icons/doc.png",
    txt: "/icons/txt.png",
    image: "/icons/image.png",
    folder: "/folder2.png",
  }

  // Choose icon src based on folder or file type
  const iconSrc = isFolder
    ? iconMap.folder
    : fileType && iconMap[fileType]
    ? iconMap[fileType]
    : "/icons/file.png" // default icon

  return (
    <div className="flex flex-col items-center justify-center space-y-1 cursor-pointer hover:scale-105 transition p-2 rounded hover:bg-gray-100">
      <img src={iconSrc} alt={label} className="w-12 h-12 drop-shadow" />
      <span className="text-xs text-center text-gray-800 font-medium">{label}</span>
    </div>
  )
}
