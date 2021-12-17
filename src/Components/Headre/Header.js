import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1>Online Educational course</h1>
      </div>
      <nav className="head-nav">
        <a href="home">Home</a>
        <a href="about">About</a>
        <a href="course">Course</a>
      </nav>
    </div>
  );
};

export default Header;
