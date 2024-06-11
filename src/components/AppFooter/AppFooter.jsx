import styles from "./AppFooter.module.css";

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>About Us</h4>
          <p>
            <span className="text-danger">Movieflix</span> is a streaming
            service that offers a wide variety of award-winning TV shows,
            movies, anime, documentaries, and more on thousands of
            internet-connected devices.
          </p>
        </div>
        <div className={styles.section}>
          <h4>Contact</h4>
          <p>Email: support@movieflix.com</p>
          <p>Phone: 1-800-123-4567</p>
        </div>
        <div className={styles.section}>
          <h4>Follow Us</h4>
          <p>
            <a href="#" className={styles.link}>
              Facebook
            </a>
          </p>
          <p>
            <a href="#" className={styles.link}>
              Twitter
            </a>
          </p>
          <p>
            <a href="#" className={styles.link}>
              Instagram
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
