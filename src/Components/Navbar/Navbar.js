import React, { useContext, useRef, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "usehooks-ts";
import { userProvider } from "../../Context/UserContext";
import { loadingProvider } from "../../Context/LoadingContext";
import { AiOutlineCloudUpload } from "react-icons/ai";
// import { userProvider } from "../Context/UserContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { logOut, user } = useContext(userProvider);
  const { setIsLoading } = useContext(loadingProvider);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {
        setIsLoading(false);
      });
  };

  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));
  useOnClickOutside();

  const handleClick = () => {
    setOpen(!open);
  };


  const menus = (
    <>
      <li>
        <Link
          className={`font-semibold bg-transparent px-3 py-2 hover:text-sky-400`}
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`font-semibold bg-transparent px-3 py-2 hover:text-sky-400`}
          to="/upload"
        >
          Upload
        </Link>
      </li>

      {!user ? (
        <li>
          <Link
            style={{ borderRadius: "0px" }}
            className={`border font-semibold px-3 py-2`}
            to="/signin"
          >
            Sign In
          </Link>
        </li>
      ) : (
        <button
          onClick={handleLogOut}
          className={`border font-semibold text-white px-3 py-2 hover:text-sky-400 bg-sky-400 hover:border-sky-400 hover:bg-white`}
        >
          Sign Out
        </button>
      )}
    </>
  );
  return (
    <div className={`navbar flex justify-between px-0 relative md:border-b`}>
      <div>
        <Link to="/" className="flex gap-2 justify-center items-center">
          <span className="mx-auto text-2xl font-semibold">
            <AiOutlineCloudUpload></AiOutlineCloudUpload>
          </span>{" "}
          <p className="text-lg font-semibold">imgHub</p>
        </Link>
      </div>
      <div className="flex-1 justify-end">
        <ul className="menu menu-horizontal px-1 hidden md:flex items-center gap-4">
          {menus}
        </ul>

        <div
          ref={ref}
          onClick={() => handleClick()}
          className="dropdown dropdown-end"
        >
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar md:hidden"
          >
            {user ? (
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            ) : (
              <span className="text-xl">
                <FaAlignJustify></FaAlignJustify>
              </span>
            )}
          </label>
          {open && (
            <ul
              tabIndex={0}
              className={`absolute top-16 right-0 menu menu-compact border  dropdown-content  bg-black border-gray-800  w-52 flex-col justify-center gap-2 px-2 py-3 md:hidden`}
            >
              {menus}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
