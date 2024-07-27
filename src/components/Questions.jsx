import styles from "./Questions.module.css";
import React, { useState } from "react";
import data from "../assets/data";

const Questions = ({ category }) => {
  const questions = data[category] || [];
  const [index, setIndex] = useState(0);

  const handleBack = () => {
    if (index > 0) setIndex((cur) => cur - 1);
  };

  const handleNext = () => {
    if (index < questions.length - 1) setIndex((cur) => cur + 1);
  };

  return (
    <div>
      <div className={styles.questionCard}>
        <p>{questions[index].question}</p>
        <ul>
          {questions[index].options.map((option, i) => (
            <li key={i}>{option}</li>
          ))}
        </ul>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handleBack}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Questions;
