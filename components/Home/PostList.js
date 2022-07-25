import Post from "./Post";
import Cta from "../Cta";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const categories = [
  "All Articles",
  "Opinion & Insights",
  "Case Studies",
  "Guides & Tutorials",
];

const PostList = ({ posts }) => {
  const [title, setTitle] = useState("All Articles");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const filterMobile = (e) => {
    console.log("first");
    if (!openMenu) {
      setOpenMenu(true);
    } else {
      filterCategories(e);
      setOpenMenu(false);
    }
  };

  const filterCategories = (element) => {
    setTitle(element);
    if (element === "All Articles") {
      setFilteredPosts(posts);
      return;
    }
    const postsArray = posts.filter(
      (post) => post.categories.findIndex((cat) => cat === element) !== -1
    );
    console.log(postsArray);
    setFilteredPosts(postsArray);
  };

  return (
    <div>
      <section className="bg-white lg:sticky lg:top-0 relative z-10">
        <div className="max-w-[1400px] py-4 px-[6%] mx-auto">
          <div className="md:hidden w-full">
            {categories.map((cat, index) => (
              <div
                key={index}
                className={`cursor-pointer ${
                  openMenu || cat === title ? "block" : "hidden"
                }`}
                onClick={() => filterMobile(cat)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-left text-xl px-8 py-4">{cat}</h4>
                  {index === 0 && openMenu && (
                    <FontAwesomeIcon
                      icon={faAngleUp}
                      className="mr-3 text-lg"
                    />
                  )}
                  {cat === title && !openMenu && (
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="mr-3 text-lg"
                    />
                  )}
                </div>
                <hr
                  className={`mx-auto transition-all ${
                    cat === title
                      ? "h-1 bg-accent mx-2"
                      : "md:h-1 md:bg-gray-200"
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 w-full items-center text-center">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => filterCategories(cat)}
              >
                <h4 className="text-xl px-8 py-4 hover:text-accent">{cat}</h4>
                <hr
                  className={`mx-auto transition-all ${
                    cat === title ? "h-1 bg-accent mx-2" : "h-1 bg-gray-200"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container">
          {title && <h3>{title}</h3>}
          <div
            className="mt-3 pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
          mx-auto w-full"
          >
            {filteredPosts?.map((post) => (
              <Post key={post._id} post={post} />
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </div>
  );
};

export default PostList;
