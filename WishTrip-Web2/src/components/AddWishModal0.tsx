
// components/AddWishModal.tsx
import React from 'react';

interface Props {
  placeName: string;
  onClose: () => void;
}

const AddWishModal: React.FC<Props> = ({ placeName, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80">
        <p className="text-lg font-semibold mb-2">‘내 여행지’에 추가되었습니다.</p>
        <p className="text-blue-600 underline mb-4">{placeName}</p>
        <p className="text-sm text-gray-500 mb-4">이탈리아의 수도</p>
        <button
          onClick={onClose}
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800"
        >
          닫기
        </button>
)
      </div>
    </div>
  );
}