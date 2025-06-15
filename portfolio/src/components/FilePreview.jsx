export default function FilePreview({ file, onClose }) {
  if (!file) return null;

  const renderPreview = () => {
    switch (file.type) {
      case 'pdf':
        return (
          <iframe
            src={`/files/${file.name}`}
            className="w-full h-[500px] border rounded"
          />
        );
      case 'image':
        return (
          <img
            src={`/files/${file.name}`}
            alt={file.name}
            className="max-h-[500px] mx-auto"
          />
        );
      case 'txt':
        return (
          <iframe
            src={`/files/${file.name}`}
            className="w-full h-[300px] border rounded"
          />
        );
      default:
        return (
          <p className="text-sm text-gray-600">
            No preview available for this file type.
          </p>
        );
    }
  };

  return (
    <div className="mt-6 border rounded p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-700">
          📝 Preview: {file.name}
        </span>
        <button
          onClick={onClose}
          className="text-blue-600 hover:underline text-sm"
        >
          Close Preview
        </button>
      </div>
      {renderPreview()}
    </div>
  );
}
