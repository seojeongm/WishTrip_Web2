import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import AddWishButton from '../components/AddWishButton';
import MapViewer from '../components/MapViewer';
import Footer from '../components/Footer';
import SearchBar from '../components/Searchbar';
import AddWishModal0 from '../components/AddWishModal0';
import NavBar from '../components/NavBar';
import search from '../assets/search.png';

const MapPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const initialQuery = searchParams.get('query');
    if (initialQuery) {
      setSelectedPlace(initialQuery);
    }
  }, [searchParams]);

  const handleAddClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSearch = (query: string) => {
    setSelectedPlace(query);
  };

  return (
    <>
      {/* 내브바는 고정 상단 */}
      <NavBar />

      {/* 본문 */}
      <main className="flex flex-col items-center px-4 py-8 bg-gray-100 min-h-screen min-h-screen">
        <h1 className="text-2xl font-extrabold mb-2">여행지를 추가하고 체크하세요!</h1>
        <p className="text-blue-900 text-sm mb-4">원하는 여행지를 검색하고 기록해보세요.</p>

        <div className="w-full max-w-2xl">
          <SearchBar onSearch={handleSearch} />
        </div>

        {selectedPlace ? (
          <>
            <div className="relative w-full max-w-2xl mt-4 rounded-xl shadow">
              <MapViewer searchPlace={selectedPlace} />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                <AddWishButton onClick={handleAddClick} />
              </div>
            </div>

            {modalOpen && (
              <AddWishModal0 placeName={selectedPlace} onClose={handleCloseModal} />
            )}
          </>
        ) : (
          <div className="text-center text-gray-400 mt-24">
            원하는 장소를 입력해주세요.
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};
export default MapPage;