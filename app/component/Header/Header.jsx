import Link from "next/link";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <div className="flex justify-between items-center gap-5 px-10 py-2 text-sharp-red bg-white">
      <Logo />
      <div className="flex justify-between items-center lg:gap-20 md:gap-10 sm:gap-5">
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
        <Link href="/" className="nav-list">
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
  );
}

export default Header;
