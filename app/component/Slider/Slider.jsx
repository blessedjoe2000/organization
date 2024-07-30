"use client";

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "/images/sliders/ueo_slider1.jpg",
  "/images/sliders/ueo_slider2.jpg",
  "/images/sliders/ueo_slider3.jpg",
  "/images/sliders/ueo_slider4.jpg",
  "/images/sliders/ueo_slider5.jpg",
  "/images/sliders/ueo_slider6.jpg",
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {},
};

export default function Slider() {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage})`,
                height: "500px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
