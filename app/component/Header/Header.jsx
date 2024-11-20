"use client";

import Link from "next/link";
import Logo from "../Logo/Logo";
import { useState } from "react";

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
            <Link href="/executives" className="nav-list">
              Executives
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
            href="https://donate.stripe.com/6oE8zx6Q0c3D7TO288"
            target="_blank"
            className="flex justify-center items-center gap-0.5 hover:text-light-blue hover:underline px-3 py-1 bg-sharp-red rounded-xl text-white font-semibold"
          >
            <button>DONATE</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
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
                <Link href="/executives" className="nav-list">
                  Executives
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
                  href="https://donate.stripe.com/6oE8zx6Q0c3D7TO288"
                  target="_blank"
                  className="flex justify-center items-center gap-0.5 hover:text-light-blue hover:underline px-3 py-1 bg-sharp-red rounded-xl text-white font-semibold mt-2"
                >
                  <button>DONATE</button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
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
