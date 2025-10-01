"use client";

import Link from "next/link";
import Logo from "../Logo/Logo";
import { useState } from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

function Header() {
  const [showHamburger, setShowHamburger] = useState(false);

  const toggleHambuger = () => {
    setShowHamburger(!showHamburger);
  };

  return (
    <nav className="text-sharp-red bg-white sticky top-0 z-10">
      <div
        className={
          showHamburger
            ? "mb-64 flex justify-between items-center gap-5"
            : "mb-0 "
        }
      >
        <div className=" sm:flex justify-between items-center gap-5 px-10 md:px-5 py-2 hidden">
          <Logo />
          <div className="flex justify-between items-center lg:gap-20 md:gap-5 sm:gap-2">
            <Link href="/" className="nav-list">
              Home
            </Link>
            <Link href="/about" className="nav-list">
              About Us
            </Link>
            <Link href="/projects" className="nav-list">
              Projects
            </Link>
            <Link href="/esanheritage" className="nav-list">
              Esan Heritage
            </Link>
            <Link href="/gallery" className="nav-list">
              Gallery
            </Link>
            <Link href="/contact" className="nav-list">
              Contact Us
            </Link>
          </div>
          <Link
            href="https://www.zeffy.com/en-US/donation-form/donate-to-ueo"
            target="_blank"
            className="flex justify-center items-center gap-0.5 hover:bg-dark-red hover:underline px-3 py-1 bg-sharp-red rounded-xl text-white font-semibold"
          >
            <button>DONATE</button>
            <MonetizationOnIcon fontSize="small" />
          </Link>
        </div>

        <div onClick={toggleHambuger} className=" sm:hidden  ">
          <div className="space-y-1 p-2 ">
            <div className="w-6 h-1 bg-sharp-red"></div>
            <div className="w-6 h-1 bg-sharp-red"></div>
            <div className="w-6 h-1 bg-sharp-red"></div>
          </div>

          <div
            className={
              showHamburger
                ? "sm:hidden flex flex-col justify-center w-screen items-center absolute -top-0 right-0 duration-150 pb-3 pt-2 bg-white "
                : "hidden"
            }
          >
            <button className="p-2 mb-1 relative mr-auto">
              <div className="w-6 h-1 rotate-45 absolute bg-sharp-red"></div>
              <div className="w-6 h-1 -rotate-45 absolute bg-sharp-red"></div>
            </button>

            <div className="flex flex-col items-center gap-1">
              <div
                className={
                  "flex flex-col gap-1 justify-center items-center mt-3"
                }
              >
                <Link href="/" className="nav-list">
                  Home
                </Link>
                <Link href="/about" className="nav-list">
                  About Us
                </Link>
                <Link href="/projects" className="nav-list">
                  Projects
                </Link>
                <Link href="/esanheritage" className="nav-list">
                  Esan Heritage
                </Link>
                <Link href="/gallery" className="nav-list">
                  Gallery
                </Link>
                <Link href="/contact" className="nav-list">
                  Contact Us
                </Link>
                <Link
                  href="https://www.zeffy.com/en-US/donation-form/donate-to-ueo"
                  target="_blank"
                  className="flex justify-center items-center gap-0.5  hover:underline px-3 py-1 bg-sharp-red rounded-xl text-white font-semibold"
                >
                  <button>DONATE</button>
                  <MonetizationOnIcon fontSize="small" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
