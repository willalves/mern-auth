/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import Logo from "../ui/Logo";
import { MenuIcon, X } from "lucide-react";
import NavbarMobile from "./NavbarMobile";
import { useState } from "react";

function Navbar({ firstNavItems, secondNavItems }) {
  const [showNavMobile, setShowNavMobile] = useState(false);

  return (
    <nav className="sticky top-0 bg-gray-100 font-sans w-full">
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/">
              <Logo />
            </Link>

            <ul className="hidden sm:flex sm:items-center">
              {firstNavItems.map((item, i) => (
                <NavLink
                  to={item.to}
                  className="text-gray-800 text-sm font-semibold hover:text-indigo-600 mr-4"
                  key={i}
                >
                  <li>{item.label}</li>
                </NavLink>
              ))}
            </ul>

            <div className="hidden sm:flex sm:items-center">
              {secondNavItems.map((item, i) => (
                <NavLink
                  to={item.to}
                  className={`text-gray-800 text-sm font-semibold hover:text-indigo-600 mr-4 ${
                    item.classes || ""
                  }`}
                  key={i}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Hamburger Btn */}
            <div className="sm:hidden cursor-pointer">
              {showNavMobile ? (
                <X color="#4f46e5" onClick={() => setShowNavMobile(false)} />
              ) : (
                <MenuIcon
                  color="#4f46e5"
                  onClick={() => setShowNavMobile(true)}
                />
              )}
            </div>
          </div>

          {/* Menu Mobile */}
          {showNavMobile && (
            <div className="block sm:hidden bg-white border-t-2 py-2">
              <NavbarMobile
                onCloseNavMobile={() => setShowNavMobile(false)}
                firstNavItems={firstNavItems}
                secondNavItems={secondNavItems}
              />
            </div>
          )}
          {/* Menu Mobile Ends */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
