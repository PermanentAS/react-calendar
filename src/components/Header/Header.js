import React from "react";

const Header = ({ today }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand">React-calendar</span>
      <span className="text-light">Today is: {today}</span>
    </nav>
  );
};

export default Header;
