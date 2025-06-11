import FileItem from './FileItem'

export default function FileGrid() {
  return (
    <div className="flex-1 bg-white p-4 grid grid-cols-5 gap-6 place-items-center">
      <FileItem label="Resume" />
      <FileItem label="Projects" />
      <FileItem label="Contact" />
      <FileItem label="Certificates" />
      <FileItem label="Interests" />
    </div>
  )
}
