// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import BlockContent from "@sanity/block-content-to-react";
import Cta from "./Cta";
import Form from "./Form";
import getYoutubeId from "get-youtube-id";
import { urlFor, config } from "../client";
import PortableText from "react-portable-text";

const BlockRenderer = props => {
  const { style = "normal" } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "");
    return React.createElement(
      style,
      { className: `article_h${level}` },
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
          className="article_video"
          src={url}
          title="YouTube Preview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        ></iframe>
      );
    }
    // h2: ({ children }) => <h2 className="article_heading">{children}</h2>
  },
  marks: {
    highlight: ({ children }) => <mark>{children}</mark>,
    link: ({ children, mark }) =>
      mark.blank ? (
        <a href={mark.href} target="_blank" rel="noopener noreferer">
          {children}
        </a>
      ) : (
        <a href={mark.href}>{children}</a>
      ),
    internalLink: ({ children, mark }) => {
      const { slug = {} } = mark;
      const href = `/blog/${slug.current}`;
      return (
        <a href={href} target="_blank" rel="noopener noreferer">
          {children}
        </a>
      );
    }
  }
};

const SinglePost = ({ post }) => {
  return (
    <main>
      {/* {!isLoading && post !== null && ( */}
      <article className="article">
        <header className="hero">
          <img
            className="hero_img"
            src={urlFor(post.mainImage).url()}
            alt={post.title}
          />
        </header>
        <section className="section section--white">
          <div className="container container--article">
            <div className="article_headings">
              <h1 className="article_title">{post.title}</h1>
              <div className="author">
                <img
                  className="author_img"
                  src={urlFor(post.authorImage).url()}
                  alt={post.title}
                />
                <p>
                  <span className="author_name">Par {post.authorName}</span>
                  <span className="author_date">
                    le {new Date(post.publishedAt).toLocaleDateString()}
                  </span>
                </p>
              </div>
            </div>
            <div className="article_content">
              {/* <BlockContent
                blocks={post.body}
                projectId={config.projectId}
                dataset="production"
                serializers={serializers}
                // imageOptions={{ w: "auto", h: "300px", fit: "max" }}
              /> */}
              <PortableText
                projectId={config.projectId}
                dataset="production"
                content={post.body}
                serializers={{
                  h1: (props: any) => (
                    <h1 className="article_title" {...props} />
                  ),
                  h2: (props: any) => <h2 className="article_h2" {...props} />,
                  h3: (props: any) => <h3 className="article_h3" {...props} />,
                  h4: (props: any) => <h4 className="article_h4" {...props} />,
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
                    )
                }}
              />
            </div>
            <div className="article_infos">
              <p className="article_date">Publié le {post.publishedAt}</p>
              <div className="author">
                <img
                  className="author_img"
                  src={urlFor(post.authorImage).url()}
                  alt={post.title}
                />
                <p className="author_name">Par {post.authorName}</p>
              </div>
            </div>
            <hr className="article_line" />
            <h3 className="form_heading">Vous avez aimé cet article?</h3>
            <h4 className="form_subheading">Laissez un commentaire !</h4>
            <Form />
          </div>
        </section>
        <Cta />
      </article>
      {/* )} */}
    </main>
  );
};

export default SinglePost;
