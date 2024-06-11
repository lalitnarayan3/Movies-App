import { useNavigate, useParams } from "react-router-dom";
import { moviesData } from "../utils/data";
import styles from "./MoviesDetails.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useDispatch } from "react-redux";
import { addToList } from "../MovieWatchList/watchListSlice";

const MoviesDetails = () => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const { pid } = useParams();
  const dispatch = useDispatch();

  const playBtnHandler = (link) => {
    window.open(link, "_blank");
  };

  const myListHandler = (item) => {
    if (isAuth === true) {
      dispatch(addToList(item));
    } else {
      alert("PLEASE LOGIN FIRST");
      navigate("/login");
    }
  };

  const movie = moviesData.find((movie) => movie.id === parseInt(pid));

  if (!movie) {
    return <h4 className={styles.textCenter}>Movie not found</h4>;
  }

  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${movie.background})` }}
      >
        <div className={styles.header}>
          <span className={styles.badge1}>M</span>
          <span className={styles.badge2}>FILM</span>
        </div>
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.details}>
          <span>{movie.releaseDate}</span>
          <span>{movie.category} Movie</span>
          <span>{movie.time}</span>
        </div>
        <p className={styles.rating}>
          <i className={`bi bi-star-fill ${styles.ratingIcon}`}></i>
          {movie.rating}
        </p>
        <p className={styles.overview}>{movie.overview}</p>
        <div className={styles.actions}>
          <button
            className={styles.btn1}
            onClick={() => playBtnHandler(movie.trailer)}
          >
            <i className="bi bi-play-fill"></i>Play
          </button>
          <button className={styles.btn2} onClick={() => myListHandler(movie)}>
            <i className="bi bi-plus-lg"></i> My List
          </button>
        </div>
      </div>
      <div className={styles.castSection}>
        <h2>Cast</h2>
        <div className={styles.castGrid}>
          {movie.cast.map((actor, idx) => (
            <div key={idx} className={styles.castItem}>
              <img src={actor.img} alt="cast" className={styles.castImage} />
              <p>{actor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MoviesDetails;
