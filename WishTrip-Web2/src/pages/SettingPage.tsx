import { useState } from "react";

const SettingPage = () => {
  const [showResetModal, setShowResetModal] = useState(false);
  const [showFinishedModal, setShowFinishedModal] = useState(false);

  const handleResetClick = () => setShowResetModal(true);
  const handleConfirmReset = () => {
    setShowResetModal(false);
    setShowFinishedModal(true);
  };
  const handleCloseFinished = () => setShowFinishedModal(false);

  return (
    <div className="min-h-screen bg-gray-50 px-8 pt-16 pb-40 font-sans relative">
      <div className="bg-white shadow-md rounded-2xl p-10 mx-auto w-full max-w-xl">
        <h2 className="text-[24px] font-bold text-gray-900 mb-1">설정</h2>
        <p className="text-sm text-[#1C2E6E] mb-6">나만의 위시트립 설정</p>

        <button
          onClick={handleResetClick}
          className="w-full bg-[#1C2E6E] text-white text-base font-semibold py-3 rounded-md hover:bg-[#1C2E6E]/90 transition"
        >
          내 위시트립 초기화
        </button>

        <p className="text-xs text-[#1C2E6E] mt-3">
          초기화 후 되돌릴 수 없습니다.
        </p>
      </div>

      {/* Reset 모달 */}
      {showResetModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/20">
          <div className="bg-white rounded-2xl shadow-xl w-80 p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-2 text-center">
              위시트립을 초기화 하시겠습니까?
            </h3>
            <p className="text-sm text-gray-500 mb-6 text-center">
              초기화 후 되돌릴 수 없습니다.
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleConfirmReset}
                className="bg-[#1C2E6E] text-white text-sm font-medium px-6 py-2 rounded-md hover:bg-[#1C2E6E]/90 transition"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reset 완료 모달 */}
      {showFinishedModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/20">
          <div className="bg-white rounded-2xl shadow-xl w-80 p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-2 text-center">
              내 위시트립이 초기화 되었습니다.
            </h3>
            <p className="text-sm text-gray-500 mb-6 text-center">
              다시 나만의 위시트립을 채워보아요!
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleCloseFinished}
                className="bg-[#1C2E6E] text-white text-sm font-medium px-6 py-2 rounded-md hover:bg-[#1C2E6E]/90 transition"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingPage;
