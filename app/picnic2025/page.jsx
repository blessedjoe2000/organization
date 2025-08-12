"use client";

import { Box, Container } from "@mui/system";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BackToGallery } from "./styles";
import {
  GalleryImageContainer,
  NextButton,
  PhotoPreviewContainer,
  PrevButton,
} from "../christmasparty2024/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const images = [
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhivuPqw57pi2nSb6ydYLsEK10MU39wgB5JHkft",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhifYPM5HVNKuU6kVloF3csy5dmLE4xj8TDahXg",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiCTC17uWaHwke5hxVdFvnTNQgGYL86AM9RXBD",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiEHxf0RaXCQVona9mTg4uqZ51lfNJdBkhRFSM",
];

export default function Picnic2025() {
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
        (selectedImageIndex - 1 + images.length) % images.length
      );
    }
  };

  useEffect(() => {
    const galleryContainer = containerRef.current;
    const handleImageLoad = () => {
      if (galleryContainer) {
        const items = galleryContainer.querySelectorAll(".gallery-item");
        items.forEach((item) => {
          const img = item?.querySelector("img");
          if (img) {
            const ratio = img.naturalHeight / img.naturalWidth;
            const span = Math.ceil((250 * ratio) / 10);
            item.style.gridRowEnd = `span ${span}`;
          }
        });
      }
    };

    // Attach event listeners to all images
    const images = galleryContainer?.querySelectorAll("img");
    images?.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.onload = handleImageLoad;
      }
    });

    // Cleanup
    return () => {
      images?.forEach((img) => (img.onload = null));
    };
  }, []);

  return (
    <div className="my-10">
      <Container>
        <h2 className="text-4xl">Christmas Party 2024</h2>

        <GalleryImageContainer ref={containerRef}>
          {images.map((url, index) => (
            <Box key={index} className="gallery-item">
              <Image
                src={url}
                alt={`Gallery image ${index + 1}`}
                width={400}
                height={250}
                className="gallery-img"
                onClick={() => setSelectedImageIndex(index)}
                style={{ objectFit: "cover" }}
              />
            </Box>
          ))}
        </GalleryImageContainer>
        {selectedImageIndex !== null && (
          <PhotoPreviewContainer onClick={() => setSelectedImageIndex(null)}>
            <Box sx={{ position: "relative" }}>
              <PrevButton
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
                  className="size-6 svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </PrevButton>
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
                />
              </Box>
              <NextButton
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <ArrowForwardIosIcon fontSize="large" />
              </NextButton>
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
