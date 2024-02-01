import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/lib/postUtil";
import React from "react";

// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-with-next-js",
//     title: "Getting started with NEXT.JS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NEXT.JS is REACT framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
//     date: "2024-01-26",
//   },
//   {
//     slug: "getting-started-with-next-js2",
//     title: "Getting started with NEXT.JS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NEXT.JS is REACT framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
//     date: "2024-01-26",
//   },
//   {
//     slug: "getting-started-with-next-js3",
//     title: "Getting started with NEXT.JS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NEXT.JS is REACT framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
//     date: "2024-01-26",
//   },
// ];

const AllPostsPage = (props) => {
  return <AllPosts posts={props.posts} />;
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
