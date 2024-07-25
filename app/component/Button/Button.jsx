import Link from "next/link";
import React from "react";

export default function Button({ link, text, target }) {
  return (
    <div className="my-5">
      <Link href={link} className="" target={target}>
        <button className="w-full bg-sharp-red  text-white  py-2 rounded-full text-lg hover:text-light-blue">
          {text}
        </button>
      </Link>
    </div>
  );
}
