import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import { Layout } from "./Layout";
import { HomePage } from "./pages/HomePage";
import { Channel } from "./pages/Channel";
import { Search } from "./pages/Search";
import { Video } from "./pages/Video";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/channel/:id" element={<Channel />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/search/:search" element={<Search />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
