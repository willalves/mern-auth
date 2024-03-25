/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function NavbarMobile({ onCloseNavMobile, firstNavItems, secondNavItems }) {
  return (
    <div className="flex flex-col gap-2">
      {firstNavItems.map((item, i) => (
        <NavLink
          to={item.to}
          className="text-gray-800 text-sm font-semibold hover:text-indigo-600"
          onClick={onCloseNavMobile}
          key={i}
        >
          {item.label}
        </NavLink>
      ))}
      <div className="flex justify-between items-center border-t-2 pt-2">
        {secondNavItems.map((item, i) => (
          <NavLink
            to={item.to}
            className={`text-gray-800 text-sm font-semibold hover:text-indigo-600 ${
              item.classes || ""
            }`}
            onClick={onCloseNavMobile}
            key={i}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavbarMobile;
