import React from "react";
import { Routes, Route } from "react-router-dom";
import { Validate } from "../components";
import ArticlePage from "../pages/articlepage/articlepage";
import CreateArticle from "../pages/createArticle/createArticle";
import DetailPage from "../pages/detailpage/detailPage";
import Homepage from "../pages/homepage/homepage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/article/:id" element={<DetailPage />} />
      <Route
        path="/create"
        element={
          <Validate>
            <CreateArticle />
          </Validate>
        }
      />
    </Routes>
  );
};

export default Router;
