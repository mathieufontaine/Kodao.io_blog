/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
import React from "react";
import { FaPaperclip } from "react-icons/fa";
import ExternalLinkRenderer from "./components/ExternalLinkRenderer";
import getYoutubeId from "get-youtube-id";

const highlightIcon = () => <span style={{ fontWeight: "bold" }}>H</span>;

const highlightRender = (props) => (
  <span style={{ backgroundColor: "#a87bcb" }}>{props.children}</span>
);

const captionStyle = (props) => (
  <span style={{ textAlign: "center", color: "gray", marginBottom: "1rem" }}>
    {props.children}
  </span>
);

const YoutubePreview = ({ value }) => {
  const id = getYoutubeId(value.url);
  const url = `https://www.youtube.com/embed/${id}`;
  if (!id) {
    return <div>Missing Youtube URL</div>;
  }
  return (
    <iframe
      width="560"
      height="315"
      src={url}
      title="YouTube Preview"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
        {
          title: "Caption",
          value: "caption",
          blockEditor: {
            render: captionStyle,
          },
        },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
        { title: "Hidden", value: "blockComment" },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          {
            title: "Highlight",
            value: "highlight",
            blockEditor: {
              icon: highlightIcon,
              render: highlightRender,
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: "link",
            type: "object",
            title: "URL",
            blockEditor: {
              render: ExternalLinkRenderer,
            },
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
              {
                title: "Open in a new window",
                name: "blank",
                type: "boolean",
              },
            ],
          },
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            blockEditor: {
              icon: FaPaperclip,
            },
            fields: [
              {
                name: "reference",
                type: "reference",
                to: [
                  { type: "post" },
                  // other types you may want to link to
                ],
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "youtube",
      type: "object",
      title: "youtube Embed",
      fields: [
        {
          name: "url",
          type: "url",
          title: "URL",
        },
      ],
      preview: {
        select: {
          url: "url",
        },
        component: YoutubePreview,
      },
    },
  ],
};
