import { useState } from 'react';

export default function SearchBar({ onSearch }: { onSearch: (place: string) => void }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center mb-4">
      <input
        type="text"
        placeholder="도시, 명소 입력"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 px-4 py-2 w-full rounded-l-md focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
      >
        검색
      </button>
    </form>
  );
}
