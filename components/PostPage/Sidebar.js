import React from "react";
import { urlFor } from "../../client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = ({ post }) => {
  const tweet = encodeURIComponent(
    `Check out this great article on Kodao.io! ${post.title}`
  );
  const url = `https://blog.kodao.io/post/${post.slug.current}`;
  const params = "menubar=no,toolbar=no,status=no,width=570,height=570";

  function shareToTwitter() {
    let shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${tweet}&via=kodao_io&hashtags=Web3`;
    window.open(shareUrl, "NewWindow", params);
  }

  function shareToFacebook() {
    let shareUrl = `http://www.facebook.com/sharer/sharer.phpu=${url}`;
    window.open(shareUrl, "NewWindow", params);
  }

  function shareToLinkedin() {
    let shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(shareUrl, "NewWindow", params);
  }

  return (
    <aside className="bg-violet-100 text-black">
      <div className="top-0 mb-12 p-6 md:p-10 xl:p-15 lg:sticky lg:mb-[300px]">
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
            <a
              className="cursor-pointer flex items-center justify-center h-14 w-14 text-accent rounded-full hover:text-accent 
                      hover:bg-white text-3xl"
              onClick={shareToTwitter}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className="cursor-pointer flex items-center justify-center h-14 w-14 text-accent rounded-full hover:text-accent 
                hover:bg-white text-3xl"
              onClick={shareToFacebook}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              className="cursor-pointer flex items-center justify-center h-14 w-14 text-accent rounded-full hover:text-accent 
                hover:bg-white text-3xl"
              onClick={shareToLinkedin}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className="container  p-6 md:p-10 xl:p-15 md:sticky md:top-[400px] text-center flex flex-col items-center justify-center">
        <h4 className="pb-3">Ready to get started with Web3 ?</h4>
        <p className="">
          Kodao.io supports you in all the steps of your project.
        </p>
        <a
          href="https://www.kodao.io"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <button className="btn btn-sm mt-3 w-full" type="button">
            More Information
          </button>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
