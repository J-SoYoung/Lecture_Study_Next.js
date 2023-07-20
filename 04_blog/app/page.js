import Image from "next/image";
import styles from "./styles/page.module.css";
import Link from "next/link";
import Welcome from "./components/home-page/Welcome";

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome/>
    </main>
  );
}
