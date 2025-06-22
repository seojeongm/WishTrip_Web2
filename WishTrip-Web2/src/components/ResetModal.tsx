interface ResetModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

const ResetModal = ({ onClose, onConfirm }: ResetModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white p-6 rounded-xl w-80 text-center shadow-lg">
        <h2 className="text-base font-semibold mb-2">
          위시트립을 초기화 하시겠습니까?
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          초기화 후 되돌릴 수 없습니다.
        </p>
        <div className="flex justify-center">
          <button
            onClick={onConfirm}
            className="bg-blue-900 text-white py-2 px-5 rounded hover:brightness-110"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetModal;
