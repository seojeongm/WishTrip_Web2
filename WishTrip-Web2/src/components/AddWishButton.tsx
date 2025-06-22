import React from 'react';

interface Props {
  onClick: () => void;
}

const AddWishButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:brightness-110 transition flex items-center gap-2"
    >
      <span className="text-lg font-bold">＋</span>
      여행지 목록에 추가
    </button>
  );
};

export default AddWishButton;
