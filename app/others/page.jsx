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
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiTGQ9BOfwajdVnh5Q9lRvTxDI10EZocMLq7O2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi8mlC4mMG1xN2g9JtBV7uw3ZzmSRWlsUYj6TI",
];

export default function Others() {
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
        <h2 className="text-4xl">Other Pictures</h2>

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
