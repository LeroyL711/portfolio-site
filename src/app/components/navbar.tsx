"use client";
import Link from "next/link";
import { useState } from "react";
import "../css/navbar.css"


export default function Navbar() {

  const [active, setActive] = useState(false);

  return (
    <nav>
      <div className="navContainer">
        <div className="navLogo">
          <h1>Leroy Lau</h1>
        </div>
        <div className="navElements">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
