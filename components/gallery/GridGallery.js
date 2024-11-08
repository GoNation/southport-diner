import cloudinaryString from 'helpers/cloudinary/cloudinaryString';
import React, { useState, useEffect } from 'react';

export default function GridGallery({ photos }) {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // ensures this code runs only on the client-side
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      // cleanup function to remove the event listener
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="grid-gallery">
      {photos.map((photo, i) => {
        return (
          <div
            key={i}
            className="grid-gallery__item"
            style={{
              gridColumn:
                windowWidth > 600 && (i === 0 || i === 9 || i === 14)
                  ? 'span 2'
                  : 'span 1',
              gridRow:
                windowWidth > 600 && (i === 0 || i === 9 || i === 14)
                  ? 'span 2'
                  : 'span 1',
              overflow: 'hidden', // Ensure the zoomed image does not overflow the div
            }}
          >
            <img
              src={cloudinaryString(photo.imageBaseUrl, photo.imagePrefix, 800)}
              alt={photo.caption}
              className="zoom-image object-cover h-full w-full subtle-shadow"
            />
          </div>
        );
      })}
    </div>
  );
}
