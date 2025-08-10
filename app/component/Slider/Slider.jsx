"use client";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhig6BEeslzdBIL4Qb6WnpTeyVwfOl03iGv9P2x",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiQFPLjsqW3eF7GOrLaUD5iXkJoYfEhn2Sd8uv",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiZCZmWxoxdhKlTEWtMzO4eUb08VR3CnagoLFy",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiM3CmadH8wsP0WLeCc1TrinQImzBavHZJ4F7O",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi5VbPhIN3gGKxRru9b6Jw2dIBOfPLvaQyHWqE",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiaL5gYhgZFXZ1C9tgNRPAhIUWK20ybd5QJBD7",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiND7rihOQ6lt0IyHEJ8j7mpqMf5UwzC2VhGDT",
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
