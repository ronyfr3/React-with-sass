import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <header>
        <Link to="/">Home</Link>
        <Link to="/component/agent">agent</Link>
        <Link to="/component/customer">customer</Link>
      </header>
    </div>
  );
};

export default Header;
