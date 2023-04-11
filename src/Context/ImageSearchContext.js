import React, { createContext, useState } from "react";

export const imageSearchProvider = createContext();
const ImageSearchContext = ({ children }) => {
  const [images, setImages] = useState([]);

  const value = {
    images,
    setImages,
  };
  return (
    <imageSearchProvider.Provider value={value}>
      {children}
    </imageSearchProvider.Provider>
  );
};

export default ImageSearchContext;
