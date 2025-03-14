import { useState } from "react";
import Image from "./image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO*/}
      <Link to="/" className="flex items-center gap-4 font-bold">
        <img src="trybods-logo-black-removedbg.png" alt="trybods logo" className="w-32 h-32"/>
      </Link>

      {/* Mobile Menu*/}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "="}
        </div>

        {/* Mobile LINK LIST*/}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-gray-800 text-white">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Desktop Menu*/}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>

        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-gray-800 text-white">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};
export default Navbar;
