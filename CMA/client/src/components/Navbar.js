import React, { useEffect, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in localStorage
    if (localStorage.getItem("token_id")) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token_id");
    localStorage.removeItem("user");
    setIsLoggedIn(false); // Update the state to reflect logged out status
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="bg-gray-900 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShUbPmZfePTwMq47D4hWFCWSECXzZpdJQVDQ&s"
            alt=" logo"
            className="w-20 h-20"
          />
        </a>
        <ul className="flex space-x-10">
          {isLoggedIn ? (
            <li>
              <button
                className="text-white hover:text-gray-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login" className="text-white hover:text-gray-300">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-white hover:text-gray-300">
                  Signup
                </Link>
              </li>
            </>
          )}

          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
