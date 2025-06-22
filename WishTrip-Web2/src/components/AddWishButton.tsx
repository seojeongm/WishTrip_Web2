// components/AddWishButton.tsx
import React from 'react';

interface Props {
  onClick: () => void;
}

const AddWishButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      className="absolute top-4 right-4 bg-blue-700 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-blue-800 z-40 flex items-center gap-2 whitespace-nowrap"
      onClick={onClick}
    >
      <span className="text-xl font-bold">+</span> 여행지 목록에 추가
    </button>
  );
};

export default AddWishButton;
