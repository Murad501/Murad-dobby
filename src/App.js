import { useContext } from "react";
import "./App.css";
import { loadingProvider } from "./Context/LoadingContext";
import { Toaster } from "react-hot-toast";
import { FaRadiation } from "react-icons/fa";
import { router } from "./Routes/router";
import { RouterProvider } from "react-router-dom";
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  const { isLoading } = useContext(loadingProvider);
  return (
    <div className={` min-h-screen bg-white text-gray-800`}>
      <div className="container mx-auto">
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </div>
      {isLoading && (
        <div
          className={`h-full w-full flex fixed top-0 opacity-80 justify-center items-center z-20`}
        >
          <button
            type="button"
            className="bg-orange-500 flex items-center justify-center mx-auto my-5 text-white px-4 py-2 rounded-sm cursor-wait"
            disabled
          >
            <FaRadiation className="animate-spin h-5 w-5 mr-3"></FaRadiation>
            Loading...
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
