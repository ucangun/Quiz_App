import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import Questions from "../components/Questions";
import ResultPage from "../pages/ResultPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/questions/:selectedCategory" element={<Questions />} />
        <Route path="/resultpage/:score" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
