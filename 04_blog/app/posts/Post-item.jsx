import Link from "next/link";
import Image from "next/image";
import styles from "./post-item.module.css";

export default function PostItem() {
  return (
    <li className={styles.post}>
      <Link>
        <a>
          <div className={styles.image}>
            <Image/>
          </div>
          <div className={styles.content}>
            <h3>제목</h3>
            <time>2023.07.21</time>
            <p>내용입니다</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
