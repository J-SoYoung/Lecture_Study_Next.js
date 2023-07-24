import Image from "next/image";
import styles from "./styles/page.module.css";
import Link from "next/link";
import Welcome from "./components/home-page/Welcome";
import FeaturedPosts from "./components/home-page/Featured-posts";

const DUMMY_POSTS = [
  {
    title: "getting-started-with-nextjs",
    image: "cat1.jpg",
    excerpt:
      "NextJs is a React famework for production - it makes building fullstack @@ ",
    date: "2023-07-24",
    slug: "getting-started",
  },
  {
    title: "getting-started-with-nextjs",
    image: "cat2.jpg",
    excerpt:
      "NextJs is a React famework for production - it makes building fullstack @@ ",
    date: "2023-07-24",
    slug: "getting-started2",
  },
  {
    title: "getting-started-with-nextjs",
    image: "cat3.jpg",
    excerpt:
      "NextJs is a React famework for production - it makes building fullstack @@ ",
    date: "2023-07-24",
    slug: "getting-started3",
  },
  {
    title: "getting-started-with-nextjs",
    image: "cat4.jpg",
    excerpt:
      "NextJs is a React famework for production - it makes building fullstack @@ ",
    date: "2023-07-24",
    slug: "getting-started4",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </main>
  );
}
