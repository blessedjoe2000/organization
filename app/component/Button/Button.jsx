import Link from "next/link";
import React from "react";

export default function Button({ link, text, target }) {
  return (
    <div className="mt-5">
      <Link href={link} target={target}>
        <button className="w-full bg-sharp-red  text-white  p-2 rounded-full text-lg hover:text-light-blue hover:bg-dark-red">
          {text}
        </button>
      </Link>
    </div>
  );
}
