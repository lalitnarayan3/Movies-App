import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Movies.module.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { moviesData } from "../utils/data";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const Movies = () => {
  const data = moviesData;

  const [action, setAction] = useState([]);
  const [adventure, setAdventure] = useState([]);
  const [kids, setKids] = useState([]);
  const [drama, setDrama] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const actionData = data.filter((item) => item.category === "Action");
    const adventureData = data.filter((item) => item.category === "Adventure");
    const kidsData = data.filter((item) => item.category === "Kids");
    const dramaData = data.filter((item) => item.category === "Drama");

    setAction(actionData);
    setAdventure(adventureData);
    setDrama(dramaData);
    setKids(kidsData);
    setIsLoader(false);
  }, [data]);

  useEffect(() => {
    const filterdSearch = data.filter(
      (item) => item.title.toLowerCase() === input.toLowerCase()
    );
    setSearchData(filterdSearch);
  }, [data, input]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <div>&#10095;</div>,
    prevArrow: <div> &#10094;</div>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <>
          <div className={styles.inp}>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search movie here..."
            />
          </div>
          {searchData.length > 0 ? (
            searchData.map((item) => (
              <>
                <div key={item.id} className={styles.card}>
                  <Link to={`/movies/${item.id}`}>
                    <img src={item.image} alt="movie-poster" />
                  </Link>
                  <p className={styles.movieRating}>
                    <i
                      className="bi bi-star-fill"
                      style={{ color: "rgb(220,53,69)" }}
                    ></i>
                    {item.rating}
                  </p>
                </div>
              </>
            ))
          ) : (
            <>
              <h3 className={styles.category}>Action</h3>
              <div className={styles.container}>
                <Slider {...settings}>
                  {action.map((item) => (
                    <div key={item.id} className={styles.card}>
                      <Link to={`/movies/${item.id}`}>
                        <img src={item.image} alt="movie-poster" />
                      </Link>
                      <p className={styles.movieRating}>
                        <i
                          className="bi bi-star-fill"
                          style={{ color: "rgb(220,53,69)" }}
                        ></i>
                        {item.rating}
                      </p>
                    </div>
                  ))}
                </Slider>
              </div>
              <h3 className={styles.category}>Drama</h3>
              <div className={styles.container}>
                <Slider {...settings}>
                  {drama.map((item) => (
                    <div key={item.id} className={styles.card}>
                      <Link to={`/movies/${item.id}`}>
                        <img src={item.image} alt="movie-poster" />
                      </Link>
                      <p className={styles.movieRating}>
                        <i
                          className="bi bi-star-fill"
                          style={{ color: "rgb(220,53,69)" }}
                        ></i>
                        {item.rating}
                      </p>
                    </div>
                  ))}
                </Slider>
              </div>
              <h3 className={styles.category}>Adventure</h3>
              <div className={styles.container}>
                <Slider {...settings}>
                  {adventure.map((item) => (
                    <div key={item.id} className={styles.card}>
                      <Link to={`/movies/${item.id}`}>
                        <img src={item.image} alt="movie-poster" />
                      </Link>
                      <p className={styles.movieRating}>
                        <i
                          className="bi bi-star-fill"
                          style={{ color: "rgb(220,53,69)" }}
                        ></i>
                        {item.rating}
                      </p>
                    </div>
                  ))}
                </Slider>
              </div>
              <h3 className={styles.category}>Kids</h3>
              <div className={styles.container}>
                <Slider {...settings}>
                  {kids.map((item) => (
                    <div key={item.id} className={styles.card}>
                      <Link to={`/movies/${item.id}`}>
                        <img src={item.image} alt="movie-poster" />
                      </Link>
                      <p className={styles.movieRating}>
                        <i
                          className="bi bi-star-fill"
                          style={{ color: "rgb(220,53,69)" }}
                        ></i>
                        {item.rating}
                      </p>
                    </div>
                  ))}
                </Slider>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Movies;
