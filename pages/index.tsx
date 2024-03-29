import { sanityClient } from "../client";
import { Post } from "../typings";
import { GetStaticProps } from "next";
import Hero from "../components/Home/Hero";
import PostList from "../components/Home/PostList";
import Cta from "../components/Layout/Cta";
import { sortPosts } from "../utils/helpers";

interface Props {
  posts: [Post];
}

const Home = ({ posts }: Props) => {
  return (
    <>
      <Hero />
      <PostList posts={posts} />
      <Cta />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type == "post" && !(_id in path("drafts.**"))]{
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

  const data = await sanityClient.fetch(query);
  const posts = sortPosts(data);

  // const posts = data.sort((p1: Post, p2: Post) => {
  //   const p1Date = new Date(p1.publishedAt);
  //   const p2Date = new Date(p2.publishedAt);
  //   return p2Date.getTime() - p1Date.getTime();
  // });

  return {
    props: {
      posts,
    },
    revalidate: 360,
  };
};
export default Home;
