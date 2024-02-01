import React from "react";
import Hero from "@/components/homePage/Hero";
import FeaturedPosts from "@/components/homePage/FeaturedPosts";
import { getFeaturedPosts } from "@/lib/postUtil";

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

const HomePage = (props) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
