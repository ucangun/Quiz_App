import styles from "./Quiz.module.css";

const Quiz = () => {
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
          <h2 className="text-white">Test Your Knowledge</h2>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
