import { useState } from 'react';

export default function NavigationBar({ selectedFolder, onBack, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // notify parent of search query change
  };

  return (
    <div className="bg-gray-100 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        {/* Back Arrow */}
        <button onClick={onBack} className="text-gray-700 hover:text-blue-600">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
            </svg>

        </button>

        {/* Folder Name */}
        <span className="text-lg font-medium text-gray-600">
          {selectedFolder || "Home"}
        </span>
      </div>

      {/* Real search bar */}
      <div className="relative w-48">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-2 py-1 text-sm border rounded bg-white shadow-inner focus:outline-none focus:ring-1 focus:ring-blue-300"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <span className="absolute right-2 top-1 text-gray-400 pointer-events-none">🔍</span>
      </div>
    </div>
  );
}
