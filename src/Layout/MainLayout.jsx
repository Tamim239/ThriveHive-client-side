import { Outlet } from "react-router-dom";
import { Navbar } from "../Shared/Navbar";
import { Footer } from "../Shared/Footer";

export const MainLayout = () => {
  return (
    <div>
       <Navbar />
      <div className="min-h-[calc(100vh-387px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  )
};
