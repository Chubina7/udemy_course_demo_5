import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/lib/postUtil";
import Head from "next/head";
import React from "react";

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of my posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
