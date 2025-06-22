import { useState } from 'react';
import search from '../assets/search.png'; // 이미지 import

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
      <div className="relative w-full">
        {/* ✅ 이미지 import한 변수를 src로 사용 */}
        <img
          src={search}
          alt="Search"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-60"
        />
        <input
          type="text"
          placeholder="로마, 이탈리아"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 text-sm shadow-sm placeholder-gray-400 focus:outline-none"
        />
      </div>
    </form>
  );
}
