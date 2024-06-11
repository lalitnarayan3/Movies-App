import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
const Home = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  };
  const signupHandler = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className={styles.home}>
        <p className={styles.p}>Unlimited movies, TV shows and more</p>
        <div className={styles.btn}>
          <button className={styles.btn1} onClick={loginHandler}>
            Login
          </button>
          <button className={styles.btn2} onClick={signupHandler}>
            Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
