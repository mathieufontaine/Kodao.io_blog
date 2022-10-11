import { sanityClient, urlFor } from "../../client";
import { GetStaticProps } from "next";
import { Post } from "../../typings";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../../components/PostPage/Sidebar";
import Article from "../../components/PostPage/Article";
import Comments from "../../components/PostPage/Comments";
import Form from "../../components/PostPage/Form";
import RelatedPosts from "../../components/PostPage/RelatedPosts";
import LatestPosts from "../../components/PostPage/LatestPosts";
import Cta from "../../components/Layout/Cta";
import { sortPosts, getMultipleRandom } from "../../utils/helpers";
import { useEffect, useState } from "react";

interface Props {
  post: Post;
  posts: Post[];
}

const Post = ({ post, posts }: Props) => {
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    const postsArray = posts.filter((element) => {
      console.log(element);
      return (
        element.categories.findIndex((cat) => cat === post.categories[0]) !== -1
      );
    });
    setRelatedPosts(getMultipleRandom(postsArray, 3));
    setLatestPosts(posts.slice(0, 3));
    setCategory(post.categories[0]);
  }, [posts, post]);

  return (
    <>
      {/* metadata */}
      <Head>
        <title>Kodao.io Blog - {post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      {/* banner */}
      <div className="relative pb-[70%] sm:pb-1/3 md:pb-1/4 lg:pb-1/6 2xl:pb-1/7 w-full md:mt-0">
        <Image
          layout="fill"
          objectFit="cover"
          src={urlFor(post.mainImage).url()}
          alt={post.title}
        />
      </div>
      {/* content */}
      <section className="lg:grid lg:grid-cols-[4fr_1fr]">
        <Article title={post.title} body={post.body} />
        <Sidebar post={post} />
      </section>
      {/* Comments space */}
      <section
        className={`bg-gray-100 py-10 ${
          post.comments &&
          post.comments?.length > 0 &&
          "grid grid-cols-1 lg:grid-cols-2"
        }`}
      >
        <div className="mx-auto xl:max-w-screen-xl">
          <Form id={post._id} />
          {post.comments && post.comments?.length > 0 && (
            <Comments comments={post.comments} />
          )}
        </div>
      </section>
      <RelatedPosts posts={relatedPosts} category={category} />
      <hr className="mx-auto md:h-[2px] md:bg-gray-200" />
      <LatestPosts posts={latestPosts} />
      <Cta />
    </>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
        _id,
        slug{
            current
        }
    }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title, 
        slug,
        publishedAt,
        categories,
        excerpt,
        mainImage{
          asset->{
            url}},
        body,
        "authorName":author->name,
        "authorImage": author->image,
        "categories": categories[]->title,
        "comments": *[
          _type == "comment" && 
          post._ref == ^._id &&
          approved == true
        ]
      }`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  const queryAll = `*[_type == "post" && !(_id in path("drafts.**"))]{
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

  const data = await sanityClient.fetch(queryAll);
  const posts = sortPosts(data);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      posts,
    },
    revalidate: 360, // update cached version every 60 secs
  };
};
