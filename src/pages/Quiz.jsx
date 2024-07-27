import styles from "./Quiz.module.css";
import { useState } from "react";
import Questions from "../components/Questions";

const Quiz = () => {
  const [showQuestions, setShowQuestions] = useState(false);
  const handleReadyClick = () => {
    setShowQuestions(true);
  };
  return (
    <div className={`${styles.section_quiz}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.category}`}>
          <button>HTML</button>
          <button>CSS</button>
          <button>JavaScript</button>
          <button>React</button>
        </div>
        <div className={`${styles.questions}`}>
          {showQuestions ? (
            <Questions />
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
