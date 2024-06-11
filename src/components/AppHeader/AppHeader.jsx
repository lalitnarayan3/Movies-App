import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./AppHeader.module.css";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { Button } from "react-bootstrap";

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const user = JSON.parse(localStorage.getItem("movieUser"));

  const { isDark, lightToDark, darkToLight } = useContext(ThemeContext);
  const { isAuth, logoutHandler } = useContext(AuthContext);

  const navigate = useNavigate();
  const handlerLogout = () => {
    logoutHandler();
    navigate("/login");
  };
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <NavLink to="/" className={styles.brandLink}>
          <h2>Movieflix</h2>
        </NavLink>
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Movies
        </NavLink>

        {isAuth && (
          <NavLink
            to="/watchlist"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Watch List
          </NavLink>
        )}

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          About
        </NavLink>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Support
        </NavLink>
        {isAuth ? (
          <>
            <i className="bi bi-person-circle">{user.name}</i>

            <NavLink to="/login">
              <Button
                className="text-white fw-bold"
                variant="info"
                onClick={handlerLogout}
              >
                Logout
              </Button>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Log in
            </NavLink>

            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Sign up
            </NavLink>
          </>
        )}

        <button
          className={styles.iconButton}
          onClick={isDark ? darkToLight : lightToDark}
        >
          {isDark ? (
            <i className="bi bi-brightness-high-fill"></i>
          ) : (
            <i className="bi bi-moon-fill"></i>
          )}
        </button>
      </nav>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default AppHeader;
