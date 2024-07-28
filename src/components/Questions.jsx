import styles from "./Questions.module.css";
import React, { useState } from "react";
import data from "../assets/data";
import { useNavigate, useParams } from "react-router";
import ProgressBar from "react-bootstrap/ProgressBar";
import Timer from "./Timer";

const Questions = () => {
  const navigate = useNavigate();

  const { selectedCategory } = useParams();
  const questions = data[selectedCategory] || [];
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(20);

  if (secondsRemaining === 0) {
    navigate("/resultpage");
  }

  const handleAnswer = (i) => {
    if (disabled) return;
    setSelectedOption(i);
    setDisabled(true);
    if (questions[index].correctOption === i) {
      setAnswer(true);
      setScore(score + questions[index].points);
    } else {
      setAnswer(false);
    }
  };

  /*
  const handleBack = () => {
    if (index > 0) setIndex((cur) => cur - 1);
    setSelectedOption(null);
    setAnswer(null);
  };
*/

  const handleNext = () => {
    if (index < questions.length - 1) setIndex((cur) => cur + 1);
    setSelectedOption(null);
    setAnswer(null);
    setDisabled(false);
    if (index === questions.length - 1) navigate("/resultpage");
  };

  return (
    <div className={`${styles.section_questions}`}>
      <ProgressBar
        variant="success"
        now={score}
        label={`${score}`}
        className={styles.progress}
        max={100}
        animated
      />
      <div className={styles.questionCard}>
        <p>{`${index + 1} - ${questions[index].question}`}</p>
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
              className={disabled ? styles.disabled : ""}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.buttonContainer}>
        <Timer
          secondsRemaining={secondsRemaining}
          setSecondsRemaining={setSecondsRemaining}
        />
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Questions;
