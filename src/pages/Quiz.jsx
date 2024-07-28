import styles from "./Quiz.module.css";
import { useNavigate } from "react-router";
import { useState } from "react";

const Quiz = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleReadyClick = () => {
    if (selectedCategory) {
      navigate(`/questions/${selectedCategory}`);
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
          <h2 className="text-white mb-5">Test Your Knowledge</h2>
          <button onClick={handleReadyClick}>Ready</button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
