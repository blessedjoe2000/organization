"use client";

import { Box, Container } from "@mui/system";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  BackToGallery,
  GalleryImageContainer,
  PhotoPreviewContainer,
} from "../christmasparty2024/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const images = [
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiodz9y9LitDdcXlyRpgEIh4bFCZW9m7eJTBPj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiw2ZoLdJecSAsezopEyCfJx9PbBw25gX7v4Ta",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhid6qMfiwrnfN5UZGx1VSJXT79leQBky3RcAi0",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiRqWIes6LBPQZHCvnSt6kmMl0Grei9XWU18Yj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiGavw9EnNKldaY5ygf0oRZJMtBxWw9ED7TUbv",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiEHLs5iyXCQVona9mTg4uqZ51lfNJdBkhRFSM",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiCZg50yWaHwke5hxVdFvnTNQgGYL86AM9RXBD",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhidXmLXYwrnfN5UZGx1VSJXT79leQBky3RcAi0",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiRc3F0e6LBPQZHCvnSt6kmMl0Grei9XWU18Yj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhixGP0LX9GuqUIhDO7KjmY4oB35fZXFHinTaMp",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiIZZAsVCpc0L41Gsjtg3PJ2doI6uUne8lMVwh",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiTStqGLefwajdVnh5Q9lRvTxDI10EZocMLq7O",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi57ODYBN3gGKxRru9b6Jw2dIBOfPLvaQyHWqE",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhimcmeWP1APSulrLnQzpfj50dbFYqy96sGgTMo",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiJbo5dM8dhJZqCmEIknoyjt30u2MHBKYw4Dvx",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi9ZFCGUJ5yYNHJQRVoUgs21Czart6hjimbE8v",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiH72bvLavm8xnl7rdgNtoyXPpB3iAI1HYUuGL",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi6xrFFWQbuhio0m1HjzdJlpfwCEQYDPa9OyGK",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiWGFWKXsuvCF6Nj2b8XySonfKmeBEzwV9p1LQ",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiuPtNmNdkMG3OuW8EJ40bTpAKeQBUrFLvy1j2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiJnGKWhN8dhJZqCmEIknoyjt30u2MHBKYw4Dv",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiiJubyGI1SejoxMtDPpRuy5EWGO7s64vqbcTZ",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhipekuchPEnot5mDsTW4FwcAdkRHr8VGhgZl9I",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhivwrYYVpi2nSb6ydYLsEK10MU39wgB5JHkftC",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhidtDNfywrnfN5UZGx1VSJXT79leQBky3RcAi0",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhixqiEfo9GuqUIhDO7KjmY4oB35fZXFHinTaMp",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiLJhueXGxCDSEeV7rNUkxm3qPoYAfj5J6cR4F",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiaLLrHUFZFXZ1C9tgNRPAhIUWK20ybd5QJBD7",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiRSUnmJ6LBPQZHCvnSt6kmMl0Grei9XWU18Yj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhim5hE3Fi1APSulrLnQzpfj50dbFYqy96sGgTM",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHorVIBavm8xnl7rdgNtoyXPpB3iAI1HYUuGL",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhio0avDzLitDdcXlyRpgEIh4bFCZW9m7eJTBPj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhijfTWjlc78vW4p9Paid67Tbchq5xtgQZ1lSFu",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiLZXI7WxCDSEeV7rNUkxm3qPoYAfj5J6cR4Fn",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhizRKrDDvuMFVBrIg9N2UW0Hl8YJ4OieGDfKjX",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiRtWE7P6LBPQZHCvnSt6kmMl0Grei9XWU18Yj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi1NkVNburedGlH6QXa4joIBD7Fzfk9VMtZbxN",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiaaVfQyZFXZ1C9tgNRPAhIUWK20ybd5QJBD7f",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhidgzhRTwrnfN5UZGx1VSJXT79leQBky3RcAi0",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhihJ8sZYktG5gx2IBMFrL3qSsOh1aKpzmkwcT0",
];

function Volunteering2026() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const containerRef = useRef(null);

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
        (selectedImageIndex - 1 + images.length) % images.length,
      );
    }
  };

  useEffect(() => {
    const galleryContainer = containerRef.current;
    if (!galleryContainer) return;

    const handleImageLoad = (img) => {
      const ratio = img.naturalHeight / img.naturalWidth;
      const span = Math.ceil((250 * ratio) / 10);
      if (img.parentElement) {
        img.parentElement.style.gridRowEnd = `span ${span}`;
      }
    };

    const imgs = galleryContainer.querySelectorAll("img");
    imgs.forEach((img) => {
      if (img.complete) {
        handleImageLoad(img);
      } else {
        img.onload = () => handleImageLoad(img);
      }
    });

    return () => {
      imgs.forEach((img) => {
        img.onload = null;
      });
    };
  }, []);

  return (
    <div className="my-10">
      <Container>
        <h2 className="text-4xl">
          Houston Food Bank Volunteering Service 2026
        </h2>

        <GalleryImageContainer ref={containerRef}>
          {images.map((url, index) => (
            <Box key={index} className="gallery-item">
              <Image
                src={url}
                alt={`picnic 2025 ${index + 1}`}
                width={400}
                height={250}
                className="gallery-img"
                onClick={() => setSelectedImageIndex(index)}
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </Box>
          ))}
        </GalleryImageContainer>
        {selectedImageIndex !== null && (
          <PhotoPreviewContainer onClick={() => setSelectedImageIndex(null)}>
            <Box sx={{ position: "relative" }}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                type="button"
                className="absolute top-1/2 left-5 -translate-y-1/2 bg-sharp-red  p-1 mr-2.5 z-[100] text-white rounded-full"
              >
                <ArrowBackIosNewIcon fontSize="large" />
              </button>

              <Box
                sx={{
                  width: "100%",
                  maxWidth: "900px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={images[selectedImageIndex]}
                  alt="Selected"
                  width={900}
                  height={500}
                  onClick={(e) => e.stopPropagation()}
                  className="preview-img"
                  layout="responsive"
                  objectFit="contain"
                  unoptimized
                />
              </Box>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                type="button"
                className="absolute top-1/2 right-5 -translate-y-1/2 p-1 mr-2.5 z-[100] text-white bg-sharp-red rounded-full"
              >
                <ArrowForwardIosIcon fontSize="large" />
              </button>
            </Box>
          </PhotoPreviewContainer>
        )}
        <Link href="/gallery">
          <BackToGallery>
            <ArrowBackIcon /> Back To Gallery
          </BackToGallery>
        </Link>
      </Container>
    </div>
  );
}

export default Volunteering2026;
