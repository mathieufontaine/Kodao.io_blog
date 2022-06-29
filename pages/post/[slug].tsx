import { sanityClient, urlFor } from "../../client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SinglePost from "../../components/SinglePost";
import { GetStaticProps } from "next";
import { Post } from "../../typings";

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  console.log(post);
  return (
    <div>
      <Header />
      <SinglePost post={post} />
      <Footer />
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = `*[type == "post"]{
        _id,
        slug{
            current
        }
    }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current
    }
  }));

  return {
    paths,
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
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
      }`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug
  });

  if (!post) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post
    },
    revalidate: 60 // update cached version every 60 secs
  };
};

// const fetchData = async () => {
//   setIsLoading(true);
//   try {
//     const data = await sanityClient.fetch(
//       `*[slug.current == "${slug}"]{
//       title,
//       slug,
//       publishedAt,
//       categories,
//       excerpt,
//       mainImage{
//         asset->{
//           url}},
//       body[]{
//         ...,
//         markDefs[]{
//           ...,
//           _type == "internalLink" => {
//             "slug": @.reference->slug
//           }
//         }
//       },
//       "authorName":author->name,
//       "authorImage": author->image,
//     }`
//     );
//     console.log(data);
//     setPost(data[0]);
//     setIsLoading(false);
//   } catch (error) {
//     console.log(error);
//     setIsLoading(false);
//   }
// };
