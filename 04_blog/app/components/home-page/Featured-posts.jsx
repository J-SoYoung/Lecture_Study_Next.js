import React from "react";
import styles from "./Featured-posts.module.css";
import PostGrid from "@/app/posts/Post-grid";

export default function FeaturedPosts(props) {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}
