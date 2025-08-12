"use client";

import { Box, Container } from "@mui/system";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  GalleryImageContainer,
  NextButton,
  PhotoPreviewContainer,
  PrevButton,
} from "./styles";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PhotoTitle } from "../gallery/styles";
import { DuesButton } from "./styles";

const images = [
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhivuPqw57pi2nSb6ydYLsEK10MU39wgB5JHkft",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhifYPM5HVNKuU6kVloF3csy5dmLE4xj8TDahXg",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiCTC17uWaHwke5hxVdFvnTNQgGYL86AM9RXBD",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiEHxf0RaXCQVona9mTg4uqZ51lfNJdBkhRFSM",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhii4jvvsI1SejoxMtDPpRuy5EWGO7s64vqbcTZ",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiPN1k0fulmBJ4MDcgf8eYWxwjTrK0hVIyFUOE",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhila9TEB0U2J43YQ5rXvsqIOEcMd0hk6BVFKpy",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiNhKhJw6OQ6lt0IyHEJ8j7mpqMf5UwzC2VhGD",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiMcvYsgH8wsP0WLeCc1TrinQImzBavHZJ4F7O",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhifysuusVNKuU6kVloF3csy5dmLE4xj8TDahXg",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiM2INkjH8wsP0WLeCc1TrinQImzBavHZJ4F7O",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhikx7iHIgtbrPNWOjaAfzweTLD3XqYs40iImBC",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhioy6JePLitDdcXlyRpgEIh4bFCZW9m7eJTBPj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiCi1cnCWaHwke5hxVdFvnTNQgGYL86AM9RXBD",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhidp4ppIwrnfN5UZGx1VSJXT79leQBky3RcAi0",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiOkUOfSeKnQA0MNvwebGhZ2UdzmLfHlW83X6V",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhidcDTJywrnfN5UZGx1VSJXT79leQBky3RcAi0",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi74jjw0TrczkbBdYtT9FeyfPjXugoCNw2V7hm",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiecxY7zlbgjXEPScWZI1TJh92Ktr0Af8CHkm4",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHxibfKavm8xnl7rdgNtoyXPpB3iAI1HYUuGL",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi2sluwNcjCWo8iucJbtdRIsOgyKABZ17T6Nmn",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhixP50409GuqUIhDO7KjmY4oB35fZXFHinTaMp",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiKgvQykhmOJql04RBu3PnL9CrFsIx8NzpTMXV",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi0jhgviU3rpUa16BG7f4R2jxJCAliyQguTYbW",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiuKbMtQdkMG3OuW8EJ40bTpAKeQBUrFLvy1j2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi1NAzABSredGlH6QXa4joIBD7Fzfk9VMtZbxN",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHTmuRgavm8xnl7rdgNtoyXPpB3iAI1HYUuGL",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi03I2kn7U3rpUa16BG7f4R2jxJCAliyQguTYb",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhizFaC8evuMFVBrIg9N2UW0Hl8YJ4OieGDfKjX",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiwTYD8UecSAsezopEyCfJx9PbBw25gX7v4Tau",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhik0Uqur5gtbrPNWOjaAfzweTLD3XqYs40iImB",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiPLac0aulmBJ4MDcgf8eYWxwjTrK0hVIyFUOE",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi9k98TJ5yYNHJQRVoUgs21Czart6hjimbE8vc",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhibQpGt72MxpNloQJen8uw9yCU6bsLKRkg2iz0",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiZCeQDgoxdhKlTEWtMzO4eUb08VR3CnagoLFy",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhirfF6Et5y6njxU3LPFZrJSQ79tAapKHe5u4XY",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiZPGESOoxdhKlTEWtMzO4eUb08VR3CnagoLFy",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiZxKzHwzoxdhKlTEWtMzO4eUb08VR3CnagoLF",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHbRMhNavm8xnl7rdgNtoyXPpB3iAI1HYUuGL",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHXNzbjavm8xnl7rdgNtoyXPpB3iAI1HYUuGL",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiaCs0SjZFXZ1C9tgNRPAhIUWK20ybd5QJBD7f",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiSQuLLTSRI2ZBxXeutOVnGHT6SARcUJ81WQP9",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi8qKy0LG1xN2g9JtBV7uw3ZzmSRWlsUYj6TIH",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhipRv32hPEnot5mDsTW4FwcAdkRHr8VGhgZl9I",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiQzpTR9EqW3eF7GOrLaUD5iXkJoYfEhn2Sd8u",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhikz4iPigtbrPNWOjaAfzweTLD3XqYs40iImBC",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiJnmvxop8dhJZqCmEIknoyjt30u2MHBKYw4Dv",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiNPTqEMOQ6lt0IyHEJ8j7mpqMf5UwzC2VhGDT",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi2fEeK1cjCWo8iucJbtdRIsOgyKABZ17T6Nmn",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiZx1atdUoxdhKlTEWtMzO4eUb08VR3CnagoLF",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhis9MoTkjJdcmtCNMvoaHWx8nwZE52u9UD760X",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi8Pt1RhG1xN2g9JtBV7uw3ZzmSRWlsUYj6TIH",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiaG2Ya6ZFXZ1C9tgNRPAhIUWK20ybd5QJBD7f",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiqWF66t9EFZPXhoLKgTytDNCr5SVb1vQiHAz2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiuQxQRvdkMG3OuW8EJ40bTpAKeQBUrFLvy1j2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhirjkafX5y6njxU3LPFZrJSQ79tAapKHe5u4XY",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhisTRAIHrjJdcmtCNMvoaHWx8nwZE52u9UD760",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhihSNG8aktG5gx2IBMFrL3qSsOh1aKpzmkwcT0",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiIsQq0xKCpc0L41Gsjtg3PJ2doI6uUne8lMVw",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi9w26PwJ5yYNHJQRVoUgs21Czart6hjimbE8v",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiZ6m79IoxdhKlTEWtMzO4eUb08VR3CnagoLFy",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiNhDc0x9OQ6lt0IyHEJ8j7mpqMf5UwzC2VhGD",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhipDTkxSPEnot5mDsTW4FwcAdkRHr8VGhgZl9I",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhinr01MAOmXx3G5p71Fq6LDbi9Bs4mJgolQEt2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhir6NJKU5y6njxU3LPFZrJSQ79tAapKHe5u4XY",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhigMWoN8lzdBIL4Qb6WnpTeyVwfOl03iGv9P2x",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhivVWgNopi2nSb6ydYLsEK10MU39wgB5JHkftC",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiOZdkerKnQA0MNvwebGhZ2UdzmLfHlW83X6Vk",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiC551AvWaHwke5hxVdFvnTNQgGYL86AM9RXBD",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi0TTofbU3rpUa16BG7f4R2jxJCAliyQguTYbW",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi03Dh0awU3rpUa16BG7f4R2jxJCAliyQguTYb",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiadFTyPZFXZ1C9tgNRPAhIUWK20ybd5QJBD7f",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiJCyfxJ8dhJZqCmEIknoyjt30u2MHBKYw4Dvx",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiJhNU678dhJZqCmEIknoyjt30u2MHBKYw4Dvx",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiueYgLE6dkMG3OuW8EJ40bTpAKeQBUrFLvy1j",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhitpd15P0zx84qV1CwIL2J5kSimAuaOZnU0BEN",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiStp5xzRI2ZBxXeutOVnGHT6SARcUJ81WQP9Y",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhisTqLntwjJdcmtCNMvoaHWx8nwZE52u9UD760",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhigUiIHOzlzdBIL4Qb6WnpTeyVwfOl03iGv9P2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi9YASphJ5yYNHJQRVoUgs21Czart6hjimbE8v",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhigKPcb2lzdBIL4Qb6WnpTeyVwfOl03iGv9P2x",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiJnFneGk8dhJZqCmEIknoyjt30u2MHBKYw4Dv",
];

export default function ChristmasParty2024() {
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
    <Container
      sx={{
        mt: { xs: "7rem", sm: "9rem" },
        mb: { xs: "2rem", sm: "4rem" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PhotoTitle>Christmas Party 2024</PhotoTitle>

      <GalleryImageContainer ref={containerRef}>
        {images.map((url, index) => (
          <Box key={index} className="gallery-item">
            <Image
              src={url}
              alt={`Gallery image ${index + 1}`}
              width={250}
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </NextButton>
          </Box>
        </PhotoPreviewContainer>
      )}
      <Link href="/gallery">
        <DuesButton>
          <ArrowBackIcon /> Photo Gallery
        </DuesButton>
      </Link>
    </Container>
  );
}
