import { useState } from "react";
import UploadPhoto from "../assets/upload-photo.png";

interface AddWishModalProps {
  onClose: () => void;
  onSubmit: (memo: {
    city: string;
    startDate: string;
    endDate: string;
    note: string;
    image?: File | null;
  }) => void;
}

const AddWishModal = ({ onClose, onSubmit }: AddWishModalProps) => {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [note, setNote] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSelectedImage(file);
  };

  const handleSubmit = () => {
    if (!city || !startDate || !endDate) return;
    onSubmit({ city, startDate, endDate, note, image: selectedImage });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-xl p-8 w-[500px]">
        <h2 className="text-xl font-bold mb-6">새로운 메모 추가하기</h2>

        <label className="block mb-2 text-sm font-semibold">장소 선택</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="예: 파리, 뉴욕"
          className="w-full border rounded px-4 py-2 mb-4"
        />

        <label className="block mb-2 text-sm font-semibold">일정 날짜</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full border rounded px-4 py-2 mb-2"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full border rounded px-4 py-2 mb-4"
        />

        <label className="block mb-2 text-sm font-semibold">메모</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="이번 여행에 대한 특별한 감정을 기록해보세요."
          className="w-full border rounded px-4 py-2 h-24 mb-4"
        />

        <div className="mt-6">
          <label className="block font-semibold mb-2">사진 추가 (선택)</label>
          <div className="flex items-center gap-3">
            <label htmlFor="image-upload" className="cursor-pointer">
              <img src={UploadPhoto} alt="사진 업로드" className="w-8 h-8" />
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <span className="text-sm text-gray-700">
              {selectedImage ? selectedImage.name : "선택된 파일 없음"}
            </span>
          </div>
        </div>

        <div className="flex justify-end mt-8 gap-4">
          <button
            onClick={onClose}
            className="bg-gray-200 px-4 py-2 rounded text-sm"
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-900 text-white px-4 py-2 rounded text-sm"
          >
            입력하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWishModal;
