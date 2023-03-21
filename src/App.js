import React from "react";
import { Route, Routes } from "react-router-dom"
import Search from "./Components/Search";
import Show from "./Components/Show";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/:id" element={<Show />} />
    </Routes>
  );
}

export default App;
