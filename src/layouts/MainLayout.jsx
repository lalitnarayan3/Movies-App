import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter/AppFooter";
import AppHeader from "../components/AppHeader/AppHeader";

const MainLayout = () => {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
};

export default MainLayout;
