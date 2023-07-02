import { Outlet } from "react-router-dom";
import { Navbar } from "../../navbar";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="Layout-Content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
