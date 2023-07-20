import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function NavigatioinBar() {
  return (
    <header>
      <Link href="/">
          <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="./contact">contact</Link>
          </li>
          <li>
            <Link href="./posts">posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
