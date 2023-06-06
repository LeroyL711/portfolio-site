"use client";
import Link from "next/link";
import { useState } from "react";
import "../css/navbar.css";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import WorkIcon from "@mui/icons-material/WorkOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav>
      <div className="navContainer">
        <div className="navLogo">
          <Link href="/">Leroy Lau</Link>
        </div>
        <button
          className="hamburger"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </button>
        
        {/* Separated desktop and mobile navs due to content flash from opacity changes and transition */}
        <div className={`desktopNav`}>
          <ul>
            <li>
              <Link href="/">
                <HomeIcon className="navIcons" /> Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                <InfoIcon className="navIcons" /> About
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <WorkIcon className="navIcons" /> Projects
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <EmailIcon className="navIcons" /> Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className={isExpanded ? `navMenu expanded` : `navMenu`}>
          <ul>
            <li>
              <Link href="/" onClick={() => setIsExpanded(!isExpanded)}>
                <HomeIcon className="navIcons" /> Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsExpanded(!isExpanded)}>
                <InfoIcon className="navIcons" /> About
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={() => setIsExpanded(!isExpanded)}>
                <WorkIcon className="navIcons" /> Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsExpanded(!isExpanded)}>
                <EmailIcon className="navIcons" /> Contact
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
}
