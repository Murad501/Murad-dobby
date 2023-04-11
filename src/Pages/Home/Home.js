import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { imageProvider } from "../../Context/ImageContext";
import { PhotoView } from "react-photo-view";

const Home = () => {
  const { images } = useContext(imageProvider);
  const [searchText, setSearchText] = useState("");
  const [searchImages, setSearchImages] = useState([]);

  const handleSearchImage = (text) => {
    setSearchText(text);
    const searchText = text.toLowerCase();
    const filteredImages = images.filter((image) =>
      image?.name.toLowerCase().includes(searchText)
    );
    setSearchImages(filteredImages);
  };
  return (
    <div>
      {images.length ? (
        <div>
          <div className="flex justify-center w-full">
            <input
              onChange={(e) => handleSearchImage(e.target.value)}
              type="text"
              placeholder="Search"
              className={`border bg-transparent p-2 w-full rounded-sm focus:outline-none mt-10 max-w-2xl`}
              required
            />
          </div>
          {searchText ? (
            searchImages ? (
              <h3 className="text-xl text-center mt-10">Image not found.</h3>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[1px] my-10">
                {searchImages.map((image) => (
                  <PhotoView src={image?.url} key={image?._id}>
                    <img
                      className="h-full object-cover max-h-72 w-full mx-auto border cursor-pointer"
                      src={image?.url}
                      alt=""
                    ></img>
                  </PhotoView>
                ))}
              </div>
            )
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[1px] my-10">
              {images.map((image) => (
                <PhotoView src={image?.url} key={image?._id}>
                  <img
                    className="h-full object-cover max-h-72 w-full mx-auto border cursor-pointer"
                    src={image?.url}
                    alt=""
                  ></img>
                </PhotoView>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center my-10">
          <h3 className="text-xl">
            You haven't uploaded any images yet.{" "}
            <Link to="/upload" className="font-semibold text-sky-500">
              Upload now
            </Link>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Home;
