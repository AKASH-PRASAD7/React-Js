import React from "react";
import "../App.css";
const Navbar = (props) => {
  return (
    <>
      <div className="navbar">
        <h3>Navbar</h3>
        <p>your name is {props.name}</p>
      </div>
    </>
  );
};

Navbar.defaultProps = {
  name: "Your name",
};
export default Navbar;
