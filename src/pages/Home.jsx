import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${styles.section_home} p-3`}>
      <div
        className={`${styles.container}  d-flex flex-column align-items-center gap-3`}
      >
        <h1>Welcome to IT Master Quiz!</h1>
        <p>Get ready to challenge your mind and expand your knowledge.</p>
        <button>Let's Start</button>
      </div>
    </div>
  );
};

export default Home;
