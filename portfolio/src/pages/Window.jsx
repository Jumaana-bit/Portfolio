/ components/Window.jsx
export default function Window({ title, children }) {
  return (
    <div className="rounded-lg shadow-lg border border-gray-300 bg-white w-[600px]">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-200 border-b border-gray-300">
        <span className="font-semibold">{title}</span>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}