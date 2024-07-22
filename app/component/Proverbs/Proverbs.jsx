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

  console.log("initial Proverb in client :>> ", initialProverb);
  console.log("currentProverb in client :>> ", currentProverb);

  if (!currentProverb) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black text-white p-28 text-center my-10">
      <div className="flex justify-center items-center gap-2 font-semibold text-2xl ">
        <h3 className="font-protestRevolution">
          {" "}
          {currentProverb.esanProverb}
        </h3>
        <p className="font-aclonica ">"{currentProverb.value}"</p>
      </div>

      <div className="flex justify-center items-center gap-2 font-semibold text-2xl mb-20 mt-10">
        <h3 className="font-protestRevolution">
          {currentProverb.englishProverb}
        </h3>
        <p className="font-aclonica">"{currentProverb.englishValue}"</p>
      </div>
      <div>
        <div className=" text-center text-lg">
          <p> {author}</p>
          <p className="text-gray-400">Author</p>
        </div>
      </div>
    </div>
  );
}
