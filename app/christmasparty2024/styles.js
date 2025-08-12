import { Button } from "@mui/material";
import { Box, styled } from "@mui/system";

export const GalleryImageContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 5px;
  margin-top: 1rem;

  @media (max-width: 545px) {
    margin-top: 0.5rem;
  }
`;

export const PhotoPreviewContainer = styled(Box)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 5rem 2rem 0rem 1rem;
`;

export const PrevButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: transparent;
  padding: 5px;
  margin-left: 20px;
  z-index: 100;
`;

export const NextButton = styled(Button)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: transparent;
  padding: 5px;
  margin-right: 10px;
  z-index: 100;
`;

export const BackToGallery = styled(Button)`
  color: #fff;
  background-color: #e4003a;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  margin-top: 2rem;
  width: 100%;
  :hover {
    background-color: #cb0404;
    color: #3fa2f6;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
