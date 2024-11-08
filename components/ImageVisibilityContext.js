import React, { createContext, useContext, useState } from 'react';

const ImageVisibilityContext = createContext();

export const ImageVisibilityProvider = ({ children }) => {
  const [showImages, setShowImages] = useState(true);

  return (
    <ImageVisibilityContext.Provider value={{ showImages, setShowImages }}>
      {children}
    </ImageVisibilityContext.Provider>
  );
};

export const useImageVisibility = () => useContext(ImageVisibilityContext);
