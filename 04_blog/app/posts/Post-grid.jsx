import styles from "./post-grid.module.css";
import PostItem from "./Post-item";

export default function PostGrid(props) {
  const { posts } = props;

  return (
    <div>
      <p>post Grid</p>
      <ul className={styles.grid}>
        {/* <PostItem /> */}
        {posts?.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
    </div>
  );
}
