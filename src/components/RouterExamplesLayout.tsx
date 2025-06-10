import { Outlet } from "react-router";
import HeaderResponsive from "./HeaderResponsive.tsx";
import Footer from "./Footer.tsx";
import ExamplesSection from "./ExamplesSection.tsx";

const RouterExamplesLayout = () => {
  return (
    <>
      <HeaderResponsive />
      <div className="container mx-auto min-h-[65vh] pt-24">
        <Outlet />
      </div>
      <ExamplesSection>

      </ExamplesSection>
      <Footer />
    </>
  )
}

export default RouterExamplesLayout;