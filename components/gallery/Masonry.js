import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  useBreakpointValue,
  useStyleConfig,
} from '@chakra-ui/react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Import once in your app
const ImageGallery = ({ data, config = {} }) => {
  const { variant } = config;
  const styles = useStyleConfig('Masonry', { variant });
  // Flatten the data
  const imagesFlattened =
    data && data.length
      ? data.map(album => album.photos.map(photo => photo)).flat()
      : [];
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const openLightbox = index => {
    setCurrentImage(index);
    setIsOpen(true);
  };
  // Adjust number of columns based on screen size
  const numColumns = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4 });
  // Split images into multiple columns
  const columns = Array.from({ length: numColumns }, (_, columnIndex) =>
    imagesFlattened.filter((_, idx) => idx % numColumns === columnIndex)
  );
  return (
    <Box id={config?.id || 'gallery'} {...styles?.container}>
      <Flex {...styles?.flexOuter}>
        {columns.map((columnImages, columnIndex) => (
          <Flex key={columnIndex} {...styles?.flexInner}>
            {columnImages.map((img, idx) => (
              <Box
                key={idx}
                onClick={() => openLightbox(idx)}
                {...styles?.imageContainer}
              >
                <Image
                  src={img.imageUrl}
                  alt={img.caption || 'Gallery image'}
                  {...styles?.image}
                />
              </Box>
            ))}
          </Flex>
        ))}
      </Flex>
      {isOpen && (
        <Lightbox
          mainSrc={imagesFlattened[currentImage].imageUrl}
          nextSrc={
            imagesFlattened[(currentImage + 1) % imagesFlattened.length]
              .imageUrl
          }
          prevSrc={
            imagesFlattened[
              (currentImage + imagesFlattened.length - 1) %
                imagesFlattened.length
            ].imageUrl
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setCurrentImage(
              (currentImage + imagesFlattened.length - 1) %
                imagesFlattened.length
            )
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % imagesFlattened.length)
          }
        />
      )}
    </Box>
  );
};
export default ImageGallery;
