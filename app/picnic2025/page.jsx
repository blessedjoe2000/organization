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
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhioSldljLitDdcXlyRpgEIh4bFCZW9m7eJTBPj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi7OH1f9TrczkbBdYtT9FeyfPjXugoCNw2V7hm",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHo5NB88avm8xnl7rdgNtoyXPpB3iAI1HYUuG",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhio9KE5WlLitDdcXlyRpgEIh4bFCZW9m7eJTBP",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiNY4K1gOQ6lt0IyHEJ8j7mpqMf5UwzC2VhGDT",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiRF4aDw6LBPQZHCvnSt6kmMl0Grei9XWU18Yj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhifjcdluVNKuU6kVloF3csy5dmLE4xj8TDahXg",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiJaovGR8dhJZqCmEIknoyjt30u2MHBKYw4Dvx",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhikV5475gtbrPNWOjaAfzweTLD3XqYs40iImBC",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhikHrEmBgtbrPNWOjaAfzweTLD3XqYs40iImBC",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi2mODWjcjCWo8iucJbtdRIsOgyKABZ17T6Nmn",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiW7uIG79suvCF6Nj2b8XySonfKmeBEzwV9p1L",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiTStnPtgfwajdVnh5Q9lRvTxDI10EZocMLq7O",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhitpbh2qQzx84qV1CwIL2J5kSimAuaOZnU0BEN",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi55RqZIN3gGKxRru9b6Jw2dIBOfPLvaQyHWqE",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi5HR44UN3gGKxRru9b6Jw2dIBOfPLvaQyHWqE",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiQ1m4VeqW3eF7GOrLaUD5iXkJoYfEhn2Sd8uv",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiigaRQ8I1SejoxMtDPpRuy5EWGO7s64vqbcTZ",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiff0hNSVNKuU6kVloF3csy5dmLE4xj8TDahXg",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiZiiG4toxdhKlTEWtMzO4eUb08VR3CnagoLFy",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhinrrdo3ymXx3G5p71Fq6LDbi9Bs4mJgolQEt2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi84pc1jG1xN2g9JtBV7uw3ZzmSRWlsUYj6TIH",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiVD0jizS0jYKevh2WcDX43EomOZyJAHFzpUld",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiKL0bPbhmOJql04RBu3PnL9CrFsIx8NzpTMXV",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiCGvwy1WaHwke5hxVdFvnTNQgGYL86AM9RXBD",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi2yJNJjMcjCWo8iucJbtdRIsOgyKABZ17T6Nm",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiKjyomGhmOJql04RBu3PnL9CrFsIx8NzpTMXV",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiEHmSQlgXCQVona9mTg4uqZ51lfNJdBkhRFSM",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiaUskQFZFXZ1C9tgNRPAhIUWK20ybd5QJBD7f",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiZYTJCNoxdhKlTEWtMzO4eUb08VR3CnagoLFy",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiWTb1HosuvCF6Nj2b8XySonfKmeBEzwV9p1LQ",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiJF2Ilj8dhJZqCmEIknoyjt30u2MHBKYw4Dvx",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhigF285MlzdBIL4Qb6WnpTeyVwfOl03iGv9P2x",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhinB1PLsmXx3G5p71Fq6LDbi9Bs4mJgolQEt2f",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiw2aOCYZecSAsezopEyCfJx9PbBw25gX7v4Ta",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiMVjOg2H8wsP0WLeCc1TrinQImzBavHZJ4F7O",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiKT59Z5hmOJql04RBu3PnL9CrFsIx8NzpTMXV",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiV6ekVHPS0jYKevh2WcDX43EomOZyJAHFzpUl",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHUDh5cavm8xnl7rdgNtoyXPpB3iAI1HYUuGL",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi8mUJh8RG1xN2g9JtBV7uw3ZzmSRWlsUYj6TI",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhihpUM2yktG5gx2IBMFrL3qSsOh1aKpzmkwcT0",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi9GN8grDJ5yYNHJQRVoUgs21Czart6hjimbE8",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiidmyXwI1SejoxMtDPpRuy5EWGO7s64vqbcTZ",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHftUNbavm8xnl7rdgNtoyXPpB3iAI1HYUuGL",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHe5hQRavm8xnl7rdgNtoyXPpB3iAI1HYUuGL",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhituFfKQzx84qV1CwIL2J5kSimAuaOZnU0BENQ",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhilE3sRa0U2J43YQ5rXvsqIOEcMd0hk6BVFKpy",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiRyZuVh6LBPQZHCvnSt6kmMl0Grei9XWU18Yj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiCKnhGNWaHwke5hxVdFvnTNQgGYL86AM9RXBD",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiI2Fq1sCpc0L41Gsjtg3PJ2doI6uUne8lMVwh",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhixvssP29GuqUIhDO7KjmY4oB35fZXFHinTaMp",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhifMCXLsVNKuU6kVloF3csy5dmLE4xj8TDahXg",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiu40E9DdkMG3OuW8EJ40bTpAKeQBUrFLvy1j2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhim5Og3cU1APSulrLnQzpfj50dbFYqy96sGgTM",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi8ifyN0G1xN2g9JtBV7uw3ZzmSRWlsUYj6TIH",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiNhKlAdUOQ6lt0IyHEJ8j7mpqMf5UwzC2VhGD",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiLsKsZoxCDSEeV7rNUkxm3qPoYAfj5J6cR4Fn",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiWqFy7ksuvCF6Nj2b8XySonfKmeBEzwV9p1LQ",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiPwbybIkulmBJ4MDcgf8eYWxwjTrK0hVIyFUO",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhixZLY389GuqUIhDO7KjmY4oB35fZXFHinTaMp",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiEE03ASXCQVona9mTg4uqZ51lfNJdBkhRFSMH",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhigbc1M5lzdBIL4Qb6WnpTeyVwfOl03iGv9P2x",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiNw0oa4OQ6lt0IyHEJ8j7mpqMf5UwzC2VhGDT",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhinrrWi7UmXx3G5p71Fq6LDbi9Bs4mJgolQEt2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhid1z7OowrnfN5UZGx1VSJXT79leQBky3RcAi0",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhizCnVi9vuMFVBrIg9N2UW0Hl8YJ4OieGDfKjX",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi2hTzO5cjCWo8iucJbtdRIsOgyKABZ17T6Nmn",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhitQvmVBzx84qV1CwIL2J5kSimAuaOZnU0BENQ",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhioqpDn8LitDdcXlyRpgEIh4bFCZW9m7eJTBPj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiRx3AM56LBPQZHCvnSt6kmMl0Grei9XWU18Yj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiaAc5XoZFXZ1C9tgNRPAhIUWK20ybd5QJBD7f",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhis4Gsa9jJdcmtCNMvoaHWx8nwZE52u9UD760X",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhipyscE3PEnot5mDsTW4FwcAdkRHr8VGhgZl9I",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhimJjG761APSulrLnQzpfj50dbFYqy96sGgTMo",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhilcRxif0U2J43YQ5rXvsqIOEcMd0hk6BVFKpy",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiNgjxJmOQ6lt0IyHEJ8j7mpqMf5UwzC2VhGDT",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiec2m2qDbgjXEPScWZI1TJh92Ktr0Af8CHkm4",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiZxkFR5coxdhKlTEWtMzO4eUb08VR3CnagoLF",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiM0ed7JH8wsP0WLeCc1TrinQImzBavHZJ4F7O",
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
        <h2 className="text-4xl">Christmas Party 2024</h2>

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
