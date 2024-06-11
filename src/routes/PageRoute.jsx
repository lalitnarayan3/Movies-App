import HomePage from "../Pages/HomePage";
import MoviesPage from "../Pages/MoviesPage";
import MovieDetails from "../components/MoviesDetails/MoviesDetails";
import LoginPage from "../Pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import MovieWatchListPage from "../Pages/MovieWatchListPage";
import SignupPage from "../Pages/SignupPage";
import SupportPage from "../Pages/SupportPage/SupportPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MainLayout from "../layouts/MainLayout";

export const PageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies">
          <Route index element={<MoviesPage />} />
          <Route path=":pid" element={<MovieDetails />} />
        </Route>
        <Route path="watchlist" element={<MovieWatchListPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
