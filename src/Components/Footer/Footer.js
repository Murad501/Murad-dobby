import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userProvider } from "../../Context/UserContext";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Footer = () => {
  const { user } = useContext(userProvider);
  return (
    <footer className={`footer p-10 border-t `}>
      <div className="flex-col justify-center items-center">
        <span className="mx-auto text-2xl font-semibold"><AiOutlineCloudUpload></AiOutlineCloudUpload></span> <p className="text-lg font-semibold">imgHub</p>
      </div>
      <div>
        <span className="footer-title">Menus</span>
        <Link>Home</Link>
        <Link>Upload</Link>
        {user && <Link></Link>}
        <Link>Sign Out</Link>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="md:flex gap-5 md:gap-0 h-12 w-11/12">
          <input
            type="text"
            placeholder="example@email.com"
            className="input input-bordered w-full rounded-l-sm rounded-r-none mb-1 md:mb-0 focus:outline-none bg-transparent"
          />
          <button className="bg-sky-400 h-full text-white font-semibold px-4 rounded-r-sm">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
