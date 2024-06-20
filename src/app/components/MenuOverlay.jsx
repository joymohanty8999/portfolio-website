import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, closeMenu }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-20 flex items-center justify-center">
      <ul className="flex flex-col space-y-4 text-center">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} onClick={closeMenu} />
          </li>
        ))}
      </ul>
      {/* Close button */}
      <button
        onClick={closeMenu}
        className="absolute top-5 right-5 text-white text-2xl"
      >
        &times;
      </button>
    </div>
  );
};

export default MenuOverlay;