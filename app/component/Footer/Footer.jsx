import Link from "next/link";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function Footer() {
  return (
    <div className=" font-semi-bold bg-black text-white ">
      <div className="flex justify-between items-center p-20 gap-5">
        <div>
          <h2>Social</h2>
          <SocialMedia />
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/about">About Us</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/executives">Executives</Link>
          <Link href="/">Gallery</Link>
          <Link href="/">Esan Heritage</Link>
        </div>
        <div>
          <Link
            href="/"
            className="flex justify-center items-center gap-0.5 hover:text-light-blue hover:underline px-3 py-1 bg-sharp-red rounded-xl text-white font-semibold"
          >
            <p>DONATE</p>
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
      <div className="border-t-2">
        <h3 className="text-center p-5">
          United Esan Association. All Rights Reserved. ©
          {new Date().getFullYear()}
        </h3>
      </div>
    </div>
  );
}
