// pages/MapPage.tsx
import React, { useState } from 'react';
import AddWishButton from '../components/AddWishButton';
import AddWishModal from '../components/AddWishModal';
import MapViewer from '../components/MapViewer';
import SearchBar from '../components/Searchbar';
import Footer from '../components/Footer';


const MapPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState('로마'); // 초기값

  const handleAddClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSearch = (query: string) => {
    setSelectedPlace(query); // 검색한 값 지도에 반영
  };

  return (
    <div className="flex flex-col items-center px-4 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold mb-2">여행지를 추가하고 체크하세요!</h1>
      <p className="text-gray-600 mb-4">원하는 여행지를 검색하고 기록해보세요.</p>

      <div className="w-full max-w-2xl">
        <SearchBar onSearch={handleSearch} />
      </div>
      {/* 지도 영역 + 버튼 */}
      <div className="relative w-full max-w-2xl mt-4 rounded-xl shadow">
        <MapViewer searchPlace={selectedPlace} />

        {/* 지도 위 가운데 버튼 */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <AddWishButton onClick={handleAddClick} />
        </div>
      </div>

      {/* 모달 */}
      {modalOpen && (
        <AddWishModal placeName={selectedPlace} onClose={handleCloseModal} />
      )}

      
    </div>
  );
};

export default MapPage;
