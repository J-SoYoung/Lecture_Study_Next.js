import React from "react";
import styles from "./postsPage.module.css";
import { PostItem } from "./Post-item";

export default function Posts(props) {
  const { posts } = props;
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
}
