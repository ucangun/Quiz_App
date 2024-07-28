import { useNavigate, useParams } from "react-router";
import styles from "./ResultPage.module.css";

const ResultPage = () => {
  const { score } = useParams();
  const navigate = useNavigate();

  let emoji;

  if (score > 0 && score < 30) {
    emoji = "🤯";
  } else if (score >= 30 && score < 60) {
    emoji = "🤨";
  } else if (score >= 60 && score < 80) {
    emoji = "💪";
  } else if (score >= 80 && score <= 100) {
    emoji = "🏆";
  }

  return (
    <div className={`${styles.section_result}`}>
      <div className={styles.resultCard}>
        <h3>
          Your Score : <span> {score} / 100 </span>
        </h3>
        <p className={styles.icon}>{emoji}</p>
        <button onClick={() => navigate("/quiz")}>Try Again!</button>
      </div>
    </div>
  );
};

export default ResultPage;
