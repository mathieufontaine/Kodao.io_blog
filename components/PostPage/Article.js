import React from "react";
import PortableText from "react-portable-text";
import BlockContent from "@sanity/block-content-to-react";
import getYoutubeId from "get-youtube-id";
import { config } from "../../client";

const BlockRenderer = (props) => {
  const { style = "normal" } = props.node;
  console.log(props);
  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "");
    let classNames;
    if (level === "2") {
      classNames =
        "mt-5 py-7 font-semibold text-accent leading-8 sm:text-2xl xl:text-3xl";
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
          className="block w-full lg:w-[600px] h-[400px] mx-auto mb-10"
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

const Article = ({ title, body }) => {
  return (
    <article className="bg-white text-black">
      <h1
        className="bg-gradient-to-r from-[#330656] to-black font-bold text-3xl md:text-4xl 
        leading-8 p-10 text-white"
      >
        {title}
      </h1>
      <div className="mx-auto px-10 xl:px-15 py-10 lg:max-w-[1000px]">
        <div className="pb-10">
          <BlockContent
            blocks={body}
            projectId={config.projectId}
            dataset="production"
            serializers={serializers}
          />
        </div>
      </div>
    </article>
  );
};

export default Article;

{
  /* <PortableText
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
                /> */
}
