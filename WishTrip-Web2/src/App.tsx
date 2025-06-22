<<<<<<< HEAD
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
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SettingPage from "./pages/SettingPage";
import ListAndMemo from "./pages/ListAndMemo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/listandmemo" element={<ListAndMemo />} />
      </Routes>
    </Router>
>>>>>>> 39beda23fe3e5714620c9a9ad7bec78397d5980c
  );
}

export default App;
