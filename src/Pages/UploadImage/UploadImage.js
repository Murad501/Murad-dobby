import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaRadiation, FaRegTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { userProvider } from "../../Context/UserContext";
import { imageProvider } from "../../Context/ImageContext";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const imgbbApi = process.env.REACT_APP_imgbbApi;
  const { user } = useContext(userProvider);
  const navigate = useNavigate();
  const { refetch } = useContext(imageProvider);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsUploading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imgbbApi}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.data.url) {
          const imgUrl = result.data.url;

          const image = {
            author: user?.email,
            name: data.name,
            url: imgUrl,
          };

          fetch("https://dobby-ads-server.vercel.app/upload", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(image),
          })
            .then((res) => res.json())
            .then(() => {
              setIsUploading(false);
              toast.success("Image uploaded successfully");
              refetch();
              navigate("/");
            });
        }
      });
  };

  function handleImageChange(event) {
    const image = event.target.files[0];
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
    }
  }

  function handleRemoveImage(e) {
    setSelectedImage(null);
  }

  return (
    <div className="py-10">
      <h1 className={`text-4xl font-bold text-center mb-10`}>
        Upload an Image
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
        <div className="mb-4 md:col-span-4">
          <label htmlFor="name" className="block  font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className={`border bg-transparent p-2 w-full rounded-sm focus:outline-none`}
            required
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Image</label>
          <div className="relative">
            <input
              {...register("image")}
              type="file"
              className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
              onChange={handleImageChange}
            />
            <div
              className={`border h-60 flex items-center justify-center p-2 w-full rounded-sm focus:outline-none`}
            >
              {selectedImage ? (
                <div className="relative w-full h-full">
                  <img
                    src={selectedImage}
                    alt="Selected Profile"
                    className="h-full mx-auto"
                  />
                  <FaRegTimesCircle
                    className="absolute top-0 right-0  w-6 h-6 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
                    onClick={handleRemoveImage}
                  ></FaRegTimesCircle>
                </div>
              ) : (
                <div className="text-gray-400 text-sm">
                  Drag and drop image here or click to select
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mb-6 flex justify-end items-center">
          {isUploading ? (
            <button
              type="button"
              className="bg-sky-500 flex items-center justify-center mt-5 text-white px-4 py-2 rounded-sm cursor-wait"
              disabled
            >
              <FaRadiation className="animate-spin mr-3"></FaRadiation>
              Uploading...
            </button>
          ) : (
            <button
              type="submit"
              className={`px-4 py-2 rounded-none mt-5 border hover:border-sky-500 hover:text-sky-500 transition-all duration-700`}
            >
              Upload
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UploadImage;
