import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import checkIcon from "../assets/check-circle.svg";
import memoViewIcon from "../assets/memo-view.svg";

interface Memo {
  city: string;
  startDate: string;
  endDate: string;
  note: string;
  image?: File | null;
}

const ListDetailPage = () => {
  const location = useLocation();
  const selectedCity = location.state?.city;

  const [memos, setMemos] = useState<Memo[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("memos");
    if (saved) setMemos(JSON.parse(saved));
  }, []);

  // 도시별로 하나씩만 추려냄 (중복 제거)
  const uniqueCityMemos = Array.from(
    new Map(memos.map((m) => [m.city, m])).values()
  );

  // 필터링 (특정 도시만 보기 옵션)
  const filtered = selectedCity
    ? uniqueCityMemos.filter((m) => m.city === selectedCity)
    : uniqueCityMemos;

  return (
    <div className="min-h-screen bg-gray-50 px-8 pt-16 pb-40 font-sans">
      <div className="bg-white shadow-md rounded-2xl p-10 w-full max-w-5xl mx-auto">
        <h2 className="text-[24px] font-bold text-gray-900 mb-1">
          여행지 목록
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          여행할 도시 및 완료한 여행지
        </p>

        <ul className="space-y-4">
          {filtered.map((memo, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  {memo.image ? (
                    <img
                      src={URL.createObjectURL(memo.image)}
                      alt={memo.city}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src="https://via.placeholder.com/40"
                      alt="no-img"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div>
                  <p className="text-base font-semibold">{memo.city}</p>
                  <p className="text-sm text-gray-500">완료</p>
                </div>
              </div>
              <div className="flex gap-3 pr-2">
                <img src={checkIcon} alt="check" className="w-5 h-5" />
                <img src={memoViewIcon} alt="memo" className="w-5 h-5" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListDetailPage;
