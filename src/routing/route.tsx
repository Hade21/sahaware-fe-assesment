import React from "react";
import { Routes, Route } from "react-router-dom";
import ArticlePage from "../pages/articlepage/articlepage";
import Homepage from "../pages/homepage/homepage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/article" element={<ArticlePage />} />
    </Routes>
  );
};

export default Router;
