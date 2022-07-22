import React, { useEffect, useState } from "react";
import BlockContent from "@sanity/block-content-to-react";
import Cta from "./Cta";
import Form from "./Form";
import getYoutubeId from "get-youtube-id";
import { urlFor, config } from "../client";
import PortableText from "react-portable-text";
import Head from "next/head";
import Comments from "./Comments";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const BlockRenderer = (props) => {
  const { style = "normal" } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "");
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* {!isLoading && post !== null && ( */}
        <div className="border-b-4 border-accent bg-black">
          <div className="relative pb-1/3 md:pb-1/4 lg:pb-1/6 w-full">
            <Image
              layout="fill"
              objectFit="cover"
              src={urlFor(post.mainImage).url()}
              alt={post.title}
            />
          </div>
        </div>
        <article className="grid md:grid-cols-[3fr_1fr]">
          <section className="bg-white text-black">
            <div className="container lg:max-w-[1200px]">
              <h1 className="text-left font-bold">{post.title}</h1>
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
          <aside className="bg-violet-100 text-black">
            <div className="container md:sticky top-0 md:mb-[300px]">
              <div className="flex items-center pb-5 gap-3 border-b-2 border-violet-200">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={urlFor(post.authorImage).url()}
                    alt={post.title}
                  />
                </div>
                <span className="font-bold">{post.authorName}</span>
              </div>
              <div className="grid grid-cols-[1fr_3fr] py-5 grid-rows-2 gap-5 items-center">
                <div className="font-bold">PUBLISHED</div>
                <div className="">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="font-bold">TAGS</div>
                <div className="flex gap-2">
                  {post.categories?.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-black rounded-md p-2 text-sm text-center text-white"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t-2 pt-5 border-violet-200 grid grid-cols-[1fr_3fr] gap-5 items-center">
                <div className="font-bold">SHARE</div>
                <div className="flex gap-2">
                  <Link href="https://discord.gg/BXtp6szz7C">
                    <a
                      className="flex items-center justify-center h-14 w-14 text-accent rounded-full hover:text-accent 
                hover:bg-white text-3xl"
                    >
                      <FontAwesomeIcon icon={faDiscord} />
                    </a>
                  </Link>
                  <Link href="https://twitter.com/kodao_io">
                    <a
                      className="flex items-center justify-center h-14 w-14 text-accent rounded-full hover:text-accent 
                      hover:bg-white text-3xl"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="container md:sticky md:top-[400px] text-center flex flex-col items-center justify-center">
              <h4 className="pb-3">Ready to get started with Web3 ?</h4>
              <p className="">
                Kodao.io supports you in all the steps of your project.
              </p>
              <Link href="https://www.kodao.io/contact">
                <a className="w-full">
                  <button className="btn btn-sm mt-3 w-full" type="button">
                    More Information
                  </button>
                </a>
              </Link>
            </div>
          </aside>
        </article>
        <section
          className={`bg-gray-100 ${
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
        <Cta />
      </main>
    </>
  );
};

export default SinglePost;
