"use client";

import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  const christmas2022 =
    "https://unitedesanorganization1.s3.us-west-1.amazonaws.com/ueo13.jpg";
  const christmas2023 =
    "https://unitedesanorganization1.s3.us-west-1.amazonaws.com/christmasparty2023/ueo10.jpg";
  const picnic2023 =
    "https://unitedesanorganization1.s3.us-west-1.amazonaws.com/ueo13.jpg";

  return (
    <div className="min-h-screen p-5">
      <h2 className=" ">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        <div>
          <Link href="/christmasparty2023">
            <Image
              src={christmas2022}
              width={500}
              height={200}
              alt={`Christmas party photos`}
              className="w-full h-auto cursor-pointer"
            />
            <p className="text-center text-transform: uppercase text-sharp-red hover:text-light-blue text-2xl">
              Christmas party 2021
            </p>
          </Link>
        </div>

        <div>
          <Link href="/christmasparty2023">
            <Image
              src={picnic2023}
              width={500}
              height={200}
              alt={`Christmas party photos`}
              className="w-full h-auto cursor-pointer"
            />
            <p className="text-center text-transform: uppercase text-sharp-red hover:text-light-blue text-2xl">
              Picnic 2022
            </p>
          </Link>
        </div>
        <div>
          <Link href="/christmasparty2023">
            <Image
              src={christmas2023}
              width={500}
              height={200}
              alt={`Christmas party photos`}
              className="w-full h-auto cursor-pointer"
            />
            <p className="text-center text-transform: uppercase text-sharp-red hover:text-light-blue text-2xl">
              Christmas party 2022
            </p>
          </Link>
        </div>
        <div>
          <Link href="/christmasparty2023">
            <Image
              src={christmas2022}
              width={500}
              height={200}
              alt={`Christmas party photos`}
              className="w-full h-auto cursor-pointer"
            />
            <p className="text-center text-transform: uppercase text-sharp-red hover:text-light-blue text-2xl">
              Picnic 2023
            </p>
          </Link>
        </div>

        <div>
          <Link href="/christmasparty2023">
            <Image
              src={picnic2023}
              width={500}
              height={200}
              alt={`Christmas party photos`}
              className="w-full h-auto cursor-pointer"
            />
            <p className="text-center text-transform: uppercase text-sharp-red hover:text-light-blue text-2xl">
              Christmas Party 2023
            </p>
          </Link>
        </div>
        <div>
          <Link href="/christmasparty2023">
            <Image
              src={christmas2023}
              width={500}
              height={200}
              alt={`Christmas party photos`}
              className="w-full h-auto cursor-pointer"
            />
            <p className="text-center text-transform: uppercase text-sharp-red hover:text-light-blue text-2xl">
              Esan World Congress 2024
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
