import { Box, styled } from "@mui/system";

export const GalleryPhotosContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
`;

export const GalleryPhotoAndTitle = styled(Box)`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhotoWrapper = styled(Box)`
  width: 100%;
  max-width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
`;

export const PhotoTitle = styled(Box)`
  font-size: 1.5rem;
  font-weight: 400;
  color: #e4003a;
  text-align: center;
  padding-top: 10px;
  font-family: "Amita";
`;
