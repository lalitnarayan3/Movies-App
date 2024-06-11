import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "./watchListSlice";
import styles from "./MovieWatchList.module.css";

const MovieWatchList = () => {
  const movieList = useSelector((state) => state.cart.watchList);
  const dispatch = useDispatch();

  const handleRemove = (movieId) => {
    dispatch(removeMovie({ movieId }));
  };

  const handleWatch = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className={styles.container}>
      <p className={styles.heading}>My Watch List</p>

      {movieList.length > 0 ? (
        movieList.map((movie) => (
          <div key={movie.id} className={styles.movieCard}>
            <img src={movie.image} alt={movie.title} />
            <div className={styles.movieInfo}>
              <p>{movie.title}</p>
              <button
                onClick={() => handleWatch(movie.trailer)}
                className={styles.button1}
              >
                Watch Now
              </button>
              <button
                onClick={() => handleRemove(movie.id)}
                className={styles.button2}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <h3 className={styles.err}>Your List Should be Empty</h3>
      )}
    </div>
  );
};

export default MovieWatchList;
