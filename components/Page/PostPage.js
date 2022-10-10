import React, { useEffect, useState } from "react";
import BlockContent from "@sanity/block-content-to-react";
import Form from "./Form";
import getYoutubeId from "get-youtube-id";
import { urlFor, config } from "../../client";
import PortableText from "react-portable-text";
import Head from "next/head";
import Comments from "./Comments";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";

const BlockRenderer = (props) => {
  const { style = "normal" } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "");
    console.log(level);
    let classNames;
    if (level === "2") {
      classNames =
        "mt-5 py-7 font-semibold text-accent leading-8 sm:text-2xl md:text-3xl xl:text-4xl";
    } else if (level === "3") {
      classNames = "mt-3 py-5 font-semibold sm:text-lg md:text-xl xl:text-2xl";
    } else if (level === "4") {
      classNames = "py-5 font-base";
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

  if (style === "caption") {
    return (
      <i className="text-center text-gray-500 mb-[30px] block text-sm">
        {props.children}
      </i>
    );
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

const PostPage = ({ post }) => {
  // useEffect(() => {
  //   const aside = document.querySelector("aside");
  //   const navbar = document.querySelector("header").offsetHeight;
  //   const onScroll = () => {
  //     const sticky = aside.offsetTop - navbar;
  //     console.log(aside.offsetTop);
  //     if (window.pageYOffset > sticky) {
  //       aside.classList.add("fixed");
  //       aside.classList.add("top-[10vh]");
  //     } else {
  //       aside.classList.remove("fixed");
  //       aside.classList.remove("top-[10vh]");
  //     }
  //   };
  //   // clean up code
  //   window.removeEventListener("scroll", onScroll);
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <>
      <Head>
        <title>Kodao.io Blog - {post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <main>
        {/* {preview && (
          <Link
            href="/api/exit-preview"
            className="fixed bottom-4 right-4 p-4 bg-green-600 text-white"
          >
            Preview Mode Activated!
          </Link>
        )} */}
        {/* {!isLoading && post !== null && ( */}
        <div className="relative pb-1/2 sm:pb-1/3 md:pb-1/4 lg:pb-1/5 xl:pb-1/6 w-full mt-[10vh] md:mt-0">
          <Image
            layout="fill"
            objectFit="cover"
            src={urlFor(post.mainImage).url()}
            alt={post.title}
          />
        </div>
        <article className="lg:grid grid-cols-[4fr_1fr]">
          <section className="bg-white text-black">
            <div className="mx-auto px-10 xl:px-15 py-10 lg:max-w-[1200px]">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-8 md:mt-8 md:mb-12 text-left">
                {post.title}
              </h1>
              <div className="pb-10">
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
          <Sidebar post={post} />
        </article>
        <section
          className={`bg-gray-100 py-10 ${
            post.comments?.length > 0 && "grid grid-cols-1 lg:grid-cols-2"
          }`}
        >
          <div className="mx-auto xl:max-w-screen-xl">
            <Form id={post._id} />
            {post.comments?.length > 0 && (
              <div className="container">
                {/* <hr className="article_line" /> */}
                <Comments comments={post.comments} />
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default PostPage;
