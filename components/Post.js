import React from "react";
import { urlFor } from "../client";
import Link from "next/link";
import Image from "next/image";

const Post = ({ post }) => {
  return (
    <Link key={post._id} href={`/post/${post.slug?.current}`}>
      <div
        className="bg-white shadow rounded-md overflow-hidden cursor-pointer 
      transition ease-in-out mx-auto hover:shadow-4xl group"
      >
        <div className="relative pb-1/2 group-hover:scale-105 transition">
          {post.mainImage && (
            // <div className="relative hover:scale-110">
            <Image
              layout="fill"
              objectFit="cover"
              src={urlFor(post.mainImage).url()}
              alt={post.mainImage.alt}
            />
            // </div>
          )}
        </div>
        <div className="relative p-8 z-10 overflow-hidden">
          <h4 className="text-xlg leading-relaxed py-0">{post.title}</h4>
          <p className="my-3 text-lg leading-loose">
            {post.excerpt}
            <span className="text-gray-400 p-3">Lire la suite..</span>
          </p>
          <div className="flex items-center justify-between">
            <div className="py-3">
              <span className="block">
                {new Date(post.publishedAt).toLocaleDateString()}
              </span>
              <span className="black font-bold">{post.authorName}</span>
            </div>
            <div className="flex justify-end text-white">
              {post.categories?.map((tag, index) => (
                <div
                  key={index}
                  className="bg-accent rounded-md p-3 text-center ml-3"
                >
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
