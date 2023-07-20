import Image from "next/image";
import styles from "./styles/page.module.css";
import Link from "next/link";
import Welcome from "./components/home-page/welcome";

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome/>
      <h1>
        <Link href="/contact">contact</Link>
      </h1>
      <h1>

      <Link href="/posts/list1">posts</Link>
      </h1>
      <h1>

      <Link href="/postDetail">postsDeatil</Link>
      </h1>
    </main>
  );
}
