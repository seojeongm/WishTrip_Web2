import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SettingPage from "./pages/SettingPage";
import ListAndMemo from "./pages/ListAndMemo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/listandmemo" element={<ListAndMemo />} />
      </Routes>
    </Router>
  );
}

export default App;
