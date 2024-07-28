import { useNavigate } from "react-router";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.section_home} p-3`}>
      <div
        className={`${styles.container} d-flex flex-column align-items-center gap-3`}
      >
        <div className={styles.video_container}>
          <video
            autoPlay
            muted
            loop
            className={styles.background_video}
            playbackRate="0.2"
          >
            <source src="/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.video_overlay}></div>
        </div>
        <h1>Welcome to IT Master Quiz!</h1>
        <p>Get ready to challenge your mind and expand your knowledge.</p>
        <button onClick={() => navigate("/quiz")}>Let's Start</button>
      </div>
    </div>
  );
};

export default Home;
