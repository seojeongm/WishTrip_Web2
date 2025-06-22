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
    <form onSubmit={handleSearch} className="flex w-full max-w-2xl mb-4">
      <input
        type="text"
        placeholder="로마, 이탈리아"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow rounded-full px-6 py-3 border border-gray-300 focus:outline-none text-sm placeholder-gray-400 shadow-sm"
      />
      <button
        type="submit"
        className="ml-2 px-6 py-3 bg-blue-900 text-white rounded-full text-sm font-semibold hover:brightness-110 transition"
      >
        여행지 검색하기
      </button>
    </form>
  );
}

