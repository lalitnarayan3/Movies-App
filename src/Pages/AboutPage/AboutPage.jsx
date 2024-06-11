import styles from "./AboutPage.module.css";
const AboutPage = () => {
  return (
    <div className={styles.about}>
      <h2>About</h2>
      <p>
        <span className="text-danger"> Movieflix</span> is a streaming service
        that offers a wide variety of award-winning TV shows, movies, anime,
        documentaries, and more on thousands of internet-connected devices.
      </p>
      <p>
        You can watch as much as you want, whenever you want without a single
        commercial all for one low monthly price. Theres always something new to
        discover and new TV shows and movies are added every week!
      </p>
    </div>
  );
};

export default AboutPage;
