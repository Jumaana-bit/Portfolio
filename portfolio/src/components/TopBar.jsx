export default function TopBar() {
  return (
    <div className="bg-gray-100 p-2 border-b text-sm flex justify-between">
      <div className="space-x-3 text-gray-700 font-medium">
        <span>File</span>
        <span>Home</span>
        <span>View</span>
      </div>
      <span className="text-gray-500">My Portfolio - File Explorer</span>
    </div>
  )
}
