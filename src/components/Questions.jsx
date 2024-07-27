import styles from "./Questions.module.css";
import React, { useEffect, useState } from "react";
import data from "../assets/data";
import { useParams } from "react-router";

const Questions = () => {
  const { selectedCategory } = useParams();
  const questions = data[selectedCategory] || [];
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answer, setAnswer] = useState(null);

  const handleAnswer = (i) => {
    setSelectedOption(i);
    if (questions[index].correctOption === i) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const handleBack = () => {
    if (index > 0) setIndex((cur) => cur - 1);
    setSelectedOption(null);
    setAnswer(null);
  };

  const handleNext = () => {
    if (index < questions.length - 1) setIndex((cur) => cur + 1);
    setSelectedOption(null);
    setAnswer(null);
  };

  return (
    <div className={`${styles.section_questions}`}>
      <div className={styles.questionCard}>
        <p>{questions[index].question}</p>
        <ul>
          {questions[index].options.map((option, i) => (
            <li
              key={i}
              onClick={() => handleAnswer(i)}
              style={
                selectedOption === i
                  ? {
                      backgroundColor: answer ? "green" : "red",
                      color: "white",
                    }
                  : {}
              }
            >
              {option}
            </li>
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
