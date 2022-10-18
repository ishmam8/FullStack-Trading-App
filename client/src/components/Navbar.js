import { useState } from "react";
import "../css/navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
        <a href="/" className="brand-name" style={{paddingLeft:'1rem'}}>
            <h3>easyGold</h3>
        </a>
        <a href="/stock" className="direct-stock">
            Stock
        </a>
        <div className="dropdown">
            <button className="dropbtn">
                Gold
                <i className="fa "></i>
            </button>
            <div className="dropdown-content">
                <a href="/goldscheme">Mortage</a>
                <a href="/">Spot Trading</a>
            </div>
        </div>


      {/* hamburger hasnt been used yet, the work is to show a dropdown button when the size reduces */}
        <button
            className="hamburger"
            onClick={() => {
            setIsNavExpanded(!isNavExpanded);
            }}>
            {/* icon from Heroicons.com */}
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white">
            <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
            />
            </svg>
        </button>
        <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        } style={{paddingRight: "1rem"}}>
            <ul>
                <li>
                <a href="#" style={{ paddingTop: "26px"}}>About</a>
                </li>
                <li>
                <a href="#" style={{ paddingTop: "26px"}}>Contacts</a>
                </li>
                <li>
                <a href="#" style={{ paddingTop: "26px"}}>Profile</a>
                </li>
            </ul>
        </div>
    </nav>
  );
}
