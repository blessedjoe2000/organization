"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function PopUpImage() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    // Show popup when page loads
    setShowPopup(true);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowPopup(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setShowPopup(false);
    }
  };

  return (
    <>
      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={handleClickOutside}
        >
          <div
            className="relative bg-white p-4 rounded-xl shadow-lg max-w-md"
            ref={popupRef}
          >
            <button
              onClick={() => setShowPopup(false)}
              on
              className="absolute top-2 right-2 text-white px-3 py-1 rounded-full bg-light-blue hover:bg-dark-blue text-xl"
            >
              X
            </button>

            <Image
              src="https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiCPgBanWaHwke5hxVdFvnTNQgGYL86AM9RXBD"
              alt="Popup"
              width={700}
              height={900}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default PopUpImage;
