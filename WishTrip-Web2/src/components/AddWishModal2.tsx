interface Props {
  onClose: () => void;
  city: string;
}

const AddWishModal2 = ({ onClose, city }: Props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-[300px] text-center space-y-4">
        <h3 className="text-lg font-semibold">여행 기록이 완료되었습니다.</h3>
        <div>
          <p className="text-blue-800 font-bold text-lg">{city}</p>
          <p className="text-sm text-gray-600">추가가 완료되었어요</p>
        </div>
        <button
          onClick={onClose}
          className="bg-blue-900 text-white px-4 py-2 rounded"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default AddWishModal2;
