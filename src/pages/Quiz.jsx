import styles from "./Quiz.module.css";
import { useState } from "react";
import Questions from "../components/Questions";

const Quiz = () => {
  const [showQuestions, setShowQuestions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowQuestions(false);
  };

  const handleReadyClick = () => {
    if (selectedCategory) {
      setShowQuestions(true);
    } else {
      alert("Please choose a category!");
    }
  };

  return (
    <div className={`${styles.section_quiz}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.category}`}>
          <button onClick={() => handleCategoryClick("html")}>HTML</button>
          <button onClick={() => handleCategoryClick("css")}>CSS</button>
          <button onClick={() => handleCategoryClick("javascript")}>
            JavaScript
          </button>
          <button onClick={() => handleCategoryClick("react")}>React</button>
        </div>
        <div className={`${styles.questions}`}>
          {showQuestions ? (
            <Questions category={selectedCategory} />
          ) : (
            <>
              <h2 className="text-white mb-5">Test Your Knowledge</h2>
              <button onClick={handleReadyClick}>Ready</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
