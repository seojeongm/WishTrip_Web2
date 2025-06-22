import { useEffect, useState } from "react";

interface Memo {
  city: string;
  startDate: string;
  endDate: string;
  note: string;
  image?: File | null;
}

const ListDetail = () => {
  const [memos, setMemos] = useState<Memo[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("memos");
    if (saved) setMemos(JSON.parse(saved));
  }, []);

  const cities = Array.from(new Set(memos.map((m) => m.city)));

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold">모든 여행지</h2>
      <ul className="space-y-2">
        {cities.map((city, idx) => (
          <li key={idx} className="border-b pb-2">
            <p className="text-lg font-medium">{city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDetail;
