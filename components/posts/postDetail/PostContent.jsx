import React from "react";
import PostHeader from "./PostHeader";
import styles from "./PostContent.module.css";

const DUMMY_POST = {
  slug: "getting-started-with-next-js",
  title: "Getting started with NEXT.JS",
  image: "getting-started-nextjs.png",
  date: "2024-01-26",
  content: "# This is the first post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;
