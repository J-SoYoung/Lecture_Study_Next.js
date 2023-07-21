import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import styles from "./navigationBar.module.css";

export default function NavigationBar() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="./contact">contact</Link>
          </li>
          <li>
            <Link href="./posts/thdud">posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
