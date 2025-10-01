import Link from "next/link";
import SocialMedia from "../SocialMedia/SocialMedia";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

export default function Footer() {
  return (
    <div className="font-semi-bold bg-black text-white text-center">
      <div className="sm:flex justify-between items-center sm:p-20 p-10 gap-5">
        <div className="flex flex-col justify-center items-center">
          <h2>Social Links</h2>
          <SocialMedia />
        </div>
        <div className="flex flex-col gap-2 py-10 sm:py-0">
          <Link className="nav-list" href="/">
            Home
          </Link>
          <Link className="nav-list" href="/projects">
            Projects
          </Link>
          <Link className="nav-list" href="/contact">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col gap-2 pb-10 sm:pb-0">
          <Link className="nav-list" href="/about">
            About Us
          </Link>
          <Link className="nav-list" href="/gallery">
            Gallery
          </Link>
          <Link className="nav-list" href="/esanheritage">
            Esan Heritage
          </Link>
        </div>
        <div>
          <Link
            href="https://www.zeffy.com/en-US/donation-form/donate-to-ueo"
            target="_blank"
            className="flex justify-center items-center gap-0.5 hover:bg-dark-red hover:underline px-3 py-1 bg-sharp-red rounded-xl text-white font-semibold"
          >
            <button>DONATE</button>
            <MonetizationOnIcon fontSize="small" />
          </Link>
        </div>
      </div>
      <div className="border-t-2">
        <h3 className="text-center p-5">
          United Esan Organization. ©{new Date().getFullYear()} All Rights
          Reserved.
        </h3>
      </div>
    </div>
  );
}
