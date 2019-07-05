import React from "react";
import { connect } from "react-redux";

const Header = ({ today }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand">React-calendar</span>
      <span className="text-light">Today is: {today}</span>
    </nav>
  );
};

const mapStateToProps = ({today}) => {
  return {
    today
  }
} 

export default connect(mapStateToProps)(Header);
