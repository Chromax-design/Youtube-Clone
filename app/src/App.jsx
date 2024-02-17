import React, { useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Channel from "./pages/Channel";
import Video from "./pages/Video";
import ScrollToTop from "./utils/scrollToTop";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/video/:id" element={<Video />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
