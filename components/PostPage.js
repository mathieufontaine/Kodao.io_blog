import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import Cta from "./Cta";
import Form from "./Form";
import getYoutubeId from "get-youtube-id";
import { urlFor, config } from "../client";
import PortableText from "react-portable-text";
import Head from "next/head";
import Comments from "./Comments";
import Image from "next/image";

const BlockRenderer = (props) => {
  const { style = "normal" } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "");
    console.log(level);
    let classNames;
    if (level === "2") {
      classNames = "mt-5 py-5 font-semibold text-accent";
    } else if (level === "3") {
      classNames = "mt-3 py-5 font-semibold";
    } else if (level === "4") {
      classNames = "p-5 font-base";
    }
    return React.createElement(
      style,
      { className: `${classNames}` },
      props.children
    );
  }

  if (style === "blockquote") {
    return <blockquote>- {props.children}</blockquote>;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

const serializers = {
  types: {
    block: BlockRenderer,
    youtube: ({ node }) => {
      const id = getYoutubeId(node.url);
      const url = `https://www.youtube.com/embed/${id}`;
      if (!id) {
        return <div>Missing Youtube URL</div>;
      }
      return (
        <iframe
          className="block w-[500px] h-[400px] mx-auto"
          src={url}
          title="YouTube Preview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    },
    // h2: ({ children }) => <h2 className="article_heading">{children}</h2>
  },
  marks: {
    highlight: ({ children }) => <mark>{children}</mark>,
    link: ({ children, mark }) =>
      mark.blank ? (
        <a href={mark.href} rel="noreferrer" target="_blank">
          {children}
        </a>
      ) : (
        <a href={mark.href}>{children}</a>
      ),
    internalLink: ({ children, mark }) => {
      const { slug = {} } = mark;
      const href = `/blog/${slug.current}`;
      return (
        <a href={href} rel="noreferrer" target="_blank">
          {children}
        </a>
      );
    },
  },
};

const SinglePost = ({ post }) => {
  return (
    <>
      <Head>
        <title>Kodao.io Blog - {post.title}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* {!isLoading && post !== null && ( */}
        <article>
          <header className="pt-[10vh] border-b-4 border-accent ">
            <div className="relative pb-1/3 lg:pb-1/4 w-full">
              <Image
                layout="fill"
                objectFit="cover"
                src={urlFor(post.mainImage).url()}
                alt={post.title}
              />
            </div>
          </header>
          <section className="bg-white text-black">
            <div className="container lg:max-w-[1200px]">
              <div>
                <h1 className="text-left font-bold">{post.title}</h1>
                <div className="flex items-center py-10 gap-3">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={urlFor(post.authorImage).url()}
                      alt={post.title}
                    />
                  </div>

                  <p>
                    <span className="font-bold">Par {post.authorName}</span>
                    <span className="ml-2">
                      le {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                  </p>
                </div>
              </div>
              <div className="pb-10 text-justify">
                <BlockContent
                  blocks={post.body}
                  projectId={config.projectId}
                  dataset="production"
                  serializers={serializers}
                />
                {/* <PortableText
                  projectId={config.projectId}
                  dataset="production"
                  content={post.body}
                  serializers={{
                    h1: (props) => <h1 className="article_title" {...props} />,
                    h2: (props) => <h2 className="article_h2" {...props} />,
                    h3: (props) => <h3 className="article_h3" {...props} />,
                    h4: (props) => <h4 className="article_h4" {...props} />,
                    highlight: ({ children }) => <mark>{children}</mark>,
                    link: ({ children, mark }) =>
                      mark.blank ? (
                        <a
                          href={mark.href}
                          target="_blank"
                          rel="noopener noreferer"
                        >
                          {children}
                        </a>
                      ) : (
                        <a href={mark.href}>{children}</a>
                      ),
                  }}
                /> */}
              </div>
            </div>
          </section>
          <section
            className={`bg-gray-100 mx-auto xl:max-w-screen-xl ${
              post.comments && "grid grid-cols-1 lg:grid-cols-2"
            }`}
          >
            <Form id={post._id} />
            {post.comments && (
              <div className="container">
                {/* <hr className="article_line" /> */}
                <Comments comments={post.comments} />
              </div>
            )}
          </section>
          <Cta />
        </article>
        {/* )} */}
      </main>
    </>
  );
};

export default SinglePost;
