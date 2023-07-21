import Link from "next/link";
import Image from "next/image";
import styles from "./post-item.module.css";

export default function PostItem() {
  // export default function PostItem(props) {
  //   const { title, image, excerpt, date, slug } = props.post;
  return (
    <li className={styles.post}>
      <Link href="/">
        <div className={styles.image}>
          <Image />
        </div>
        <div className={styles.content}>
          <h3>제목</h3>
          <time>2023.07.21</time>
          <p>내용입니다</p>
        </div>
      </Link>
    </li>
  );
}
