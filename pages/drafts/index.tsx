import type { NextPage } from "next";
import { sanityClient, urlFor } from "../../client";
import { Post } from "../../typings";
import { GetStaticProps } from "next";
import Hero from "../../components/home/Hero";
import PostList from "../../components/home/PostList";
import Head from "next/head";

interface Props {
  posts: [Post];
}

const Home = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>Kodao.io Frafts</title>
        <meta
          name="description"
          content="Check out our latest articles on Kodao's Web3.0 blog!"
        />
        <link rel="icon" href="/images/logo/logo.ico" />
        <meta name="robots" content="noindex"></meta>
      </Head>
      <Hero />
      <PostList posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type == "post" && (_id in path("drafts.**"))]{
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
    revalidate: 360,
  };
};
export default Home;
