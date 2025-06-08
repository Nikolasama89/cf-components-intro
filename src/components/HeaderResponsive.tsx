import CodingFactoryLogo from "./CodingFactoryLogo.tsx";
import {Link} from "react-router";
import React from "react";
import {Menu, X} from "lucide-react";

const HeaderResponsive = () => {

  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <header className="bg-[#782024] fixed w-full">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <CodingFactoryLogo/>

          <button className="text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={36}/> : <Menu size={36} />}
          </button>

          <nav
            className={`
              ${menuOpen ? "block" : "hidden"} md:flex gap-4 bg-red-800 absolute top-24 left-0 p-4 md:w-auto md:static text-white w-full 
            `}
          >

          {/*TO LINK ΧΡΗΣΙΜΟΠΟΙΕΙΤΑΙ ΓΙΑ ΤΟ HREF TOY a ELEMENT */}
          {/*<a href="/" className="text-white hover:underline hover:underline-offset-4">Home</a>*/}
          <Link to="/" onClick={() => setMenuOpen(false)} className="block md-inline hover:underline-offset-4">Home</Link>
          <Link to="/examples/name-changer" onClick={() => setMenuOpen(false)} className="block md-inline hover:underline-offset-4">Name Changer</Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default HeaderResponsive;