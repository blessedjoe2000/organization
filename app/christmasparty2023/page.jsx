"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../component/Button/Button";

const images = [
  "/images/sliders/ueo_slider1.jpg",
  "/images/sliders/ueo_slider2.jpg",
  "/images/sliders/ueo_slider3.jpg",
  "/images/sliders/ueo_slider4.jpg",
  "/images/sliders/ueo_slider5.jpg",
  "/images/sliders/ueo_slider6.jpg",
  "/images/sliders/ueo_slider1.jpg",
  "/images/sliders/ueo_slider2.jpg",
  "/images/sliders/ueo_slider3.jpg",
  "/images/sliders/ueo_slider4.jpg",
  "/images/sliders/ueo_slider5.jpg",
  "/images/sliders/ueo_slider6.jpg",
  "/images/sliders/ueo_slider1.jpg",
  "/images/sliders/ueo_slider2.jpg",
  "/images/sliders/ueo_slider3.jpg",
  "/images/sliders/ueo_slider4.jpg",
  "/images/sliders/ueo_slider5.jpg",
  "/images/sliders/ueo_slider6.jpg",
];

function Christmas2023() {
  const link = "/gallery";
  const text = "Back";

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSelectedImageIndex(null);
    } else if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "ArrowLeft") {
      prevImage();
    }
  };

  useEffect(() => {
    if (selectedImageIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex]);

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + images.length) % images.length
      );
    }
  };

  return (
    <div className="min-h-screen p-5">
      <h2 className=" ">Christmas Party 2023</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {images.map((url, index) => (
          <Image
            key={index}
            src={url}
            width={500}
            height={300}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-auto cursor-pointer"
            onClick={() => setSelectedImageIndex(index)}
          />
        ))}
      </div>
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div className="relative">
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent p-2"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 bg-offwhite text-sharp-red rounded-full "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <Image
              src={images[selectedImageIndex]}
              alt="Selected"
              height={400}
              width={900}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent p-2"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 bg-offwhite text-sharp-red rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      <Button link={link} text={text} />
    </div>
  );
}

export default Christmas2023;
