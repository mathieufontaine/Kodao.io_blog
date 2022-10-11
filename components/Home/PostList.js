import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import Card from "./Card";

const CardList = ({ posts }) => {
  const [category, setCategory] = useState("All Articles");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    filterCategories(category);
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
    setCategory(element);
    if (element === "All Articles") {
      setFilteredPosts(posts.slice(3));
      setLatestPosts(posts.slice(0, 3));
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
        category={category}
        openMenu={openMenu}
      />
      <div className="container p-6 md:p-10 xl:p-15">
        {category === "All Articles" && (
          <>
            <h3>Latest Articles</h3>
            <div
              className="mb-8 py-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8 
           mx-auto w-full"
            >
              {latestPosts?.map((post) => (
                <Card key={post._id} post={post} />
              ))}
            </div>
            <hr className="mx-auto mb-8 md:h-[2px] " />
          </>
        )}
        <h3>{category === "All Articles" ? "More Web3 Articles" : category}</h3>
        <div
          className="pt-5 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 
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
