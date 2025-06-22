interface ResetFinishedModalProps {
  onClose: () => void;
}

const ResetFinishedModal = ({ onClose }: ResetFinishedModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white p-6 rounded-xl w-80 text-center shadow-lg">
        <h2 className="text-base font-semibold mb-2">
          내 위시트립이 초기화 되었습니다.
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          다시 나만의 위시트립을 채워보아요!
        </p>
        <button
          onClick={onClose}
          className="bg-blue-900 text-white py-2 px-5 rounded hover:brightness-110"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default ResetFinishedModal;
