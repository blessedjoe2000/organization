"use client";

import { getProverbs, getRandomProverb } from "@/app/lib/getProverbs";
import { useEffect, useState } from "react";

export default function Proverbs({ initialProverb }) {
  const proverbs = getProverbs();

  const author = "Iseribhor Okhueleigbe";

  const [currentProverb, setCurrentProverb] = useState(
    initialProverb || getRandomProverb(initialProverb)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProverb(getRandomProverb(proverbs));
    }, 15000);

    return () => clearInterval(interval);
  }, [proverbs]);

  if (!currentProverb) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black text-white sm:p-28 p-10 text-center sm:my-10 my-5">
      <div className="sm:flex justify-center items-center gap-2 font-semibold text-2xl ">
        <h3 className="font-protestRevolution">{currentProverb.esanProverb}</h3>
        <div className="font-aclonica">
          <blockquote>
            <q>{currentProverb.value}</q>
          </blockquote>
        </div>
      </div>

      <div className="sm:flex justify-center items-center gap-2 font-semibold text-2xl mb-20 mt-10">
        <h3 className="font-protestRevolution">
          {currentProverb.englishProverb}
        </h3>
        <div className="font-aclonica">
          <blockquote>
            <q>{currentProverb.englishValue}</q>
          </blockquote>
        </div>
      </div>
      <div>
        <div className="text-center text-lg">
          <p> {author}</p>
          <p className="text-gray-400">Author</p>
        </div>
      </div>
    </div>
  );
}
