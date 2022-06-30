import React from "react";
import { urlFor } from "../client";
import Link from "next/link";

const Post = ({ post }) => {
  console.log(post);
  return (
    <Link key={post._id} href={`/post/${post.slug.current}`}>
      <div className="card">
        <div className="card_header">
          {post.mainImage && (
            <img
              className="card_img"
              src={urlFor(post.mainImage).url()}
              alt={post.mainImage.alt}
            />
          )}
          {/* <h4 className="card_title">{post.title}</h4> */}
        </div>
        {/* <div className="card_content"> */}
        <div className="card_content">
          <h4 className="card_title">{post.title}</h4>
          <p className="card_text">
            {post.excerpt}
            <span className="card_more">Lire la suite..</span>
          </p>
          <div className="card_infos">
            <div className="flex--column">
              <span className="card_date">
                {new Date(post.publishedAt).toLocaleDateString()}
              </span>
              <span className="card_author">{post.authorName}</span>
            </div>
            <div className="card_tags">
              {post.categories?.map((tag, index) => (
                <div key={index} className="card_tag">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
