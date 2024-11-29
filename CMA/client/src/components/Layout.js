import React from "react";
import Navbar from "./Navbar.js";

const Layout = ({ navbar = true, children }) => {
  return (
    <div>
      {navbar && <Navbar />}
      <div className="container mt-3">{children}</div>
    </div>
  );
};

export default Layout;
