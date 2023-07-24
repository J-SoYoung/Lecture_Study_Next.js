import Link from "next/link";
import Image from "next/image";
import styles from "./post-item.module.css";

export default function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  // const formattedDate = new Date(date)
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`

  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <div className={styles.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{date}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
