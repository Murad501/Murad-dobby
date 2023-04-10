import { Link } from "react-router-dom";
import image from '../Assets/image404.png'

const Page404 = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center min-h-screen min-w-screen">
        <div className="mx-auto">
          <img src={image} alt="404_Image" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl italic">Awww...Don't Cry</h1>
          <p className="mt-5 mb-10">it's just a 404 Error!</p>
          <p className="mb-10">
            What you are looking for may have been <br /> misplaced in Long Term
            Memory
          </p>
          <Link
            className="font-semibold bg-sky-400 text-white px-5 py-3 rounded-sm"
            to="/"
          >
            Go to Home Page
          </Link>
        </div>
      </div>
    );
  };
  
  export default Page404;