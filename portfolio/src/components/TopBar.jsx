export default function TopBar() {
  return (
    <div className="bg-blue-100 p-2 border-b text-sm flex justify-between items-center shadow-sm">
      <div className="space-x-3 text-blue-900 font-semibold">
        <span className="hover:bg-white hover:shadow px-2 py-1 rounded cursor-pointer">File</span>
        <span className="hover:bg-white hover:shadow px-2 py-1 rounded cursor-pointer">Home</span>
        <span className="hover:bg-white hover:shadow px-2 py-1 rounded cursor-pointer">View</span>
      </div>
      <span className="text-gray-600 font-medium">💼 My Portfolio - File Explorer</span>
    </div>
  )
}
