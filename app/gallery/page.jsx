"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Container } from "@mui/system";

import {
  GalleryPhotoAndTitle,
  GalleryPhotosContainer,
  PhotoTitle,
  PhotoWrapper,
} from "./styles";

export default function Gallery() {
  const imageDetails = [
    {
      url: "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiRqyCnWk6LBPQZHCvnSt6kmMl0Grei9XWU18Y",
      title: "Christmas Party 2024",
      link: "/christmasparty2024",
    },
    {
      url: "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiff0hNSVNKuU6kVloF3csy5dmLE4xj8TDahXg",
      title: "Picnic 2025",
      link: "/picnic2025",
    },
  ];
  return (
    <Container sx={{ py: "3rem" }}>
      <Box>
        <h2 className="text-5xl">Our Photos Speak Louder</h2>

        <GalleryPhotosContainer>
          {imageDetails.map((imageDetail, index) => (
            <GalleryPhotoAndTitle key={index}>
              <Link href={imageDetail.link}>
                <PhotoWrapper>
                  <Image
                    src={imageDetail.url}
                    alt="photo gallery"
                    className="card-cover"
                    width={300}
                    height={200}
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                </PhotoWrapper>
                <PhotoTitle>{imageDetail.title}</PhotoTitle>
              </Link>
            </GalleryPhotoAndTitle>
          ))}
        </GalleryPhotosContainer>
      </Box>
    </Container>
  );
}
