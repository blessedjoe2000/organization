import Link from "next/link";
import React from "react";

export default function Button({ link, text, target }) {
  return (
    <div className="mt-5">
      <Link href={link} target={target}>
        <button className="w-full bg-light-blue  text-white  p-2 rounded-full text-lg hover:bg-dark-blue">
          {text}
        </button>
      </Link>
    </div>
  );
}
