"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Publications",
    path: "#publications"
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#3e3e3e] bg-opacity-90 py-4 px-6">
      <div className="flex items-center justify-between mx-auto px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-lg md:text-5xl text-white font-semibold">
          <Image
            src="/images/logo.png"
            alt="logo"
            height={100}
            width={100}
            className="mr-2 rounded-full"
          />
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Main Menu Links for Larger Screens */}
        <div className="hidden md:block md:w-auto">
          <ul className="flex flex-row space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Full Screen Overlay Menu for Mobile */}
      {navbarOpen && <MenuOverlay links={navLinks} closeMenu={closeMenu} />}
    </nav>
  );
};

export default NavBar;