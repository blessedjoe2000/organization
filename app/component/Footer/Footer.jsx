import Link from "next/link";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function Footer() {
  return (
    <div className="font-semi-bold bg-black text-white text-center">
      <div className="sm:flex justify-between items-center sm:p-20 p-10 gap-5">
        <div className="flex flex-col justify-center items-center">
          <h2>Social Links</h2>
          <SocialMedia />
        </div>
        <div className="flex flex-col gap-2 py-10 sm:py-0">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="flex flex-col gap-2 pb-10 sm:pb-0">
          <Link href="/projects">Projects</Link>
          <Link href="/executives">Executives</Link>
          <Link href="/esanheritage">Esan Heritage</Link>
        </div>
        <div>
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
