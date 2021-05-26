import React from "react";
import Link from "next/link";
import css from "../styles/Home.module.css";
import Img from "next/image";
export default function Navbar() {
  return (
    <nav>
      <div className={`logo ${css.title}`}>
        <Link href="/">
          <a>
            <Img src="/logo.png" width={128} height={77} />
            <h1>Ninja List 🐱‍👤</h1>
          </a>
        </Link>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
}
