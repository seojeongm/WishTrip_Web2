import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MapPage from "./pages/MapPage";
import HomePage from "./pages/HomePage";
import SettingPage from "./pages/SettingPage";
import ListAndMemo from "./pages/ListAndMemo";
import ListDetailPage from "./pages/ListDetailPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <main className="ml-60 w-full p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="/listandmemo" element={<ListAndMemo />} />
            <Route
              path="/listandmemo/listdetailpage"
              element={<ListDetailPage />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
