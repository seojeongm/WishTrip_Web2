import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/map?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="w-full h-[70px] bg-white px-8 py-4 flex justify-end items-center shadow-sm">
      <form
        onSubmit={handleSearch}
        className="relative w-[230px] h-[42px] flex items-center border border-gray-300 rounded-full bg-white"
      >
        <input
          type="text"
          placeholder="여행지 검색하기"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-full px-5 pr-10 text-sm text-gray-800 rounded-full focus:outline-none"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
        >
          🔍
        </button>
      </form>
    </div>
  );
}


