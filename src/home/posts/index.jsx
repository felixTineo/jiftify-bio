import styles from "./styles.module.scss";
import POSTS from "@/data/posts.json";
import { v1 as uuid } from "uuid";

const Posts = () => {
  return (
    <div className={styles.posts}>
      {POSTS.map((post) => (
        <div key={uuid()} className={styles.post}>
          <a href={post.link}>
            <img src={post.image} alt={post.title} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Posts;
