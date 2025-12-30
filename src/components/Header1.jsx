import React from "react";
import "./Header.css";

export default function Header1({
  logo = "/media/logo-gi.png",
 

}) {


  return (
    <header className="est-header py-2">
      <div className="est-header-inner">
        {/* Left: Logo */}
        <div className="est-left">
          <img src={logo} alt="Logo" className="est-logo" />
        </div>

 
      

      </div>
    </header>
  );
}
