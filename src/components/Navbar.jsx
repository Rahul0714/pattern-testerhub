import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          JobSite
        </Link>
        <div className="space-x-4">
          <Link to="/login" className="hover:text-blue-200">
            Login
          </Link>
          <Link to="/signup" className="hover:text-blue-200">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
