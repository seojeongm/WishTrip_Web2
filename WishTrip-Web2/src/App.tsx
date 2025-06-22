import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MapPage from './pages/MapPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <main className="ml-60 w-full p-4">
          <Routes>
            
            <Route path="/map" element={<MapPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
