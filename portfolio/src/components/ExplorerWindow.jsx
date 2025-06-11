import TopBar from './TopBar'
import Sidebar from './Sidebar'
import FileGrid from './FileGrid'

export default function ExplorerWindow() {
  return (
    <div className="w-[90vw] h-[90vh] bg-white rounded-md shadow-xl border border-gray-300 flex flex-col m-auto mt-10">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        <FileGrid />
      </div>
    </div>
  )
}
