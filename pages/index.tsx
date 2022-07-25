import type { NextPage } from "next";
import { sanityClient, urlFor } from "../client";
import { Post } from "../typings";
import { GetStaticProps } from "next";
import Hero from "../components/home/Hero";
import PostList from "../components/Home/PostList";

interface Props {
  posts: [Post];
}

const Home = ({ posts }: Props) => {
  return (
    <>
      <Hero />
      <PostList posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    mainImage{asset->{url},alt},
    body,
    excerpt,
    publishedAt,
    "categories": categories[]->title,
    "authorName":author->name,
    "authorImage": author->image
   }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
export default Home;
