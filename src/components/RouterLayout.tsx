import { Outlet } from "react-router";
import HeaderResponsive from "./HeaderResponsive.tsx";
import Footer from "./Footer.tsx";
import {Toaster} from "sonner";

const RouterLayout = () => {
  return (
    <>
      <HeaderResponsive />
      <div className="container mx-auto min-h-[95vh] pt-24">
        <Outlet />
      </div>
      <Footer />
      <Toaster richColors/>
    </>
  )
}

export default RouterLayout;