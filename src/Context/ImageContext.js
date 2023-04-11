import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { userProvider } from "./UserContext";

export const imageProvider = createContext();
const ImageContext = ({ children }) => {
  const { user } = useContext(userProvider);
  const {
    data: images = [],

    refetch,
  } = useQuery({
    queryKey: ["images", user],
    queryFn: () =>
      fetch(`http://localhost:5000/images/${user?.email}`).then((res) =>
        res.json()
      ),
  });

  const value = {
    images,
    refetch,
  };
  return (
    <imageProvider.Provider value={value}>{children}</imageProvider.Provider>
  );
};

export default ImageContext;
