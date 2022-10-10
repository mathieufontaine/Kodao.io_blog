import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import Card from "./Card";

const CardList = ({ posts }) => {
  const [title, setTitle] = useState("All Articles");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const filterMobile = (e) => {
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
    setFilteredPosts(postsArray);
  };

  return (
    <section className="bg-white">
      <Categories
        filterCategories={filterCategories}
        filterMobile={filterMobile}
        title={title}
        openMenu={openMenu}
      />
      <div className="container py-10">
        {title && <h3>{title}</h3>}
        <div
          className="mt-3 pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
          mx-auto w-full"
        >
          {filteredPosts?.map((post) => (
            <Card key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardList;
