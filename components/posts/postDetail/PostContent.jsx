import ReactMarkdown from "react-markdown";
import React from "react";
import PostHeader from "./PostHeader";
import styles from "./PostContent.module.css";

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
