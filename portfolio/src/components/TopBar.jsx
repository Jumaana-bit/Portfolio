export default function TopBar({ selectedFolder }) {
  return (
    <div className="bg-blue-100 text-sm shadow-sm">
        {/* Spacer fills space and pushes title right */}
        <div className="flex-1 text-right text-gray-600 font-medium pb-1 pr-2">
          My Portfolio
        </div>
      </div>
  );
}
