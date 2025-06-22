import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddWishModal from "../components/AddWishModal";
import AddWishModal2 from "../components/AddWishModal2";
import checkIcon from "../assets/check-circle.svg";
import memoAddIcon from "../assets/memo-add.svg";
import memoViewIcon from "../assets/memo-view.svg";

interface Memo {
  city: string;
  startDate: string;
  endDate: string;
  note: string;
  image?: File | null;
}

const ListAndMemo = () => {
  const navigate = useNavigate();
  const [memos, setMemos] = useState<Memo[]>([]);
  const [lastAddedCity, setLastAddedCity] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const MAX_VISIBLE = 2;

  useEffect(() => {
    const savedMemos = localStorage.getItem("memos");
    if (savedMemos) setMemos(JSON.parse(savedMemos));
  }, []);

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  const handleMemoSubmit = (memo: Memo) => {
    setMemos((prev) => [...prev, memo]);
    setLastAddedCity(memo.city);
    setShowAddModal(false);
    setShowCompleteModal(true);
  };

  const recentCitiesWithImages = Array.from(
    new Map(memos.map((m) => [m.city, m])).values()
  )
    .reverse()
    .slice(0, 2);

  return (
    <div className="p-10 space-y-10">
      {/* 여행지 목록 */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-[20px] font-bold mb-1">여행지 목록</h2>
        <p className="text-[14px] text-gray-500 mb-4">
          여행할 도시 및 완료한 여행지
        </p>
        <button
          className="bg-blue-900 text-white px-4 py-2 rounded mb-4 text-sm"
          onClick={() => navigate("/listandmemo/listdetailpage")}
        >
          여행지 더보기 →
        </button>
        <ul className="space-y-3">
          {recentCitiesWithImages.map((memo, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
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
                <div className="leading-tight">
                  <p className="text-[15px] font-semibold">{memo.city}</p>
                  <p className="text-[13px] text-gray-500">완료</p>
                </div>
              </div>
              <div className="flex gap-3 pr-2">
                <img
                  src={checkIcon}
                  alt="check-icon"
                  className="w-5 h-5 cursor-pointer"
                />
                <img
                  src={memo.note ? memoViewIcon : memoAddIcon}
                  alt="memo-icon"
                  className="w-5 h-5 cursor-pointer"
                  onClick={() =>
                    navigate("/listandmemo/listdetailpage", {
                      state: { city: memo.city },
                    })
                  }
                />
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 여행 기록 */}
      <section className="bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-[20px] font-bold">여행 기록</h2>
            <p className="text-[14px] text-gray-500">
              여행할 도시 및 완료한 여행지
            </p>
          </div>
          <button
            className="bg-blue-900 text-white px-4 py-2 rounded text-sm"
            onClick={() => setShowAddModal(true)}
          >
            새로운 메모 추가
          </button>
        </div>

        <div className="space-y-6">
          {(showAll ? memos : memos.slice(0, MAX_VISIBLE)).map((memo, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              {memo.image ? (
                <img
                  src={URL.createObjectURL(memo.image)}
                  alt={memo.city}
                  className="rounded-md w-24 h-24 object-cover"
                />
              ) : (
                <div className="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center text-sm text-gray-500">
                  No Img
                </div>
              )}
              <div className="leading-tight">
                <h3 className="text-[15px] font-semibold">{memo.city}</h3>
                <p className="text-[13px] text-gray-500">여행 도시</p>
                <p className="bg-gray-100 text-gray-700 text-[13px] px-3 py-1 rounded w-fit mt-2">
                  {memo.startDate} ~ {memo.endDate}
                </p>
                <p className="text-[13px] text-gray-700 mt-2 whitespace-pre-wrap">
                  {memo.note}
                </p>
              </div>
            </div>
          ))}
          {!showAll && memos.length > MAX_VISIBLE && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(true)}
                className="text-blue-800 text-sm font-semibold hover:underline"
              >
                더보기
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 모달 */}
      {showAddModal && (
        <AddWishModal
          onClose={() => setShowAddModal(false)}
          onSubmit={handleMemoSubmit}
        />
      )}
      {showCompleteModal && (
        <AddWishModal2
          onClose={() => setShowCompleteModal(false)}
          city={lastAddedCity}
        />
      )}
    </div>
  );
};

export default ListAndMemo;
