import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-3 mt-3">
      {/* Navbar */}
      <div
        className="
          flex items-center justify-between
          px-5 py-3
          bg-white/80 backdrop-blur-xl
          shadow-[0_4px_20px_rgba(0,0,0,0.06)]
          rounded-full
        "
      >
        {/* Logo */}
        <h2
          className="
            text-2xl
            font-black
            tracking-[-0.04em]
            text-black
            cursor-pointer
            select-none
            hover:scale-105
            transition-transform duration-300
          "
        >
          CRACKER<span className="text-gray-400">.</span>
        </h2>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <Link
            to="/"
            className="hover:text-black transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-black transition-colors duration-200"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-black transition-colors duration-200"
          >
            Contact
          </Link>

          <button
            className="
              ml-2
              px-5 py-2.5
              rounded-full
              bg-black
              text-white
              text-sm font-medium
              hover:bg-gray-800
              active:scale-95
              transition-all duration-200
              cursor-pointer
            "
          >
            Sign Up
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-2xl
            text-black
            cursor-pointer
          "
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav
          className="
            md:hidden
            mt-2
            p-5
            bg-white/90
            backdrop-blur-xl
            rounded-3xl
            shadow-lg
            flex flex-col
            items-center
            gap-5
            text-gray-600
            font-medium
          "
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="hover:text-black"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="hover:text-black"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="hover:text-black"
          >
            Contact
          </Link>

          <button
            className="
              px-6 py-2.5
              rounded-full
              bg-black
              text-white
              hover:bg-gray-800
              active:scale-95
              transition-all
            "
          >
            Sign Up
          </button>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
