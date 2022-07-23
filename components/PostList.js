import Post from "./Post";
import Cta from "./Cta";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const categories = [
  "All Articles",
  "Opinion & Insights",
  "Case Studies",
  "Guides & Tutorials",
];

const PostList = ({ posts }) => {
  const [title, setTitle] = useState("All Articles");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

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
    <div className="color-black border-t-2 border-white pt-[10vh] md:pt-0">
      <section className="relative bg-gradient-to-r from-[#330656] to-black py-6">
        {/* <div className="absolute w-full h-full top-0 left-0 ">
          <Image
            layout="fill"
            objectFit="cover"
            src="/images/background/kodao_main.jpeg"
            alt="kodao background"
          />
        </div> */}
        <div className="container relative z-10">
          <div className="text-white w-3/4 lg:w-2/3 2xl:w-1/2 flex flex-col items-center justify-center mx-auto">
            <h1 className="text-6xl pb-0">Kodao.io Blog</h1>
            <div className="relative w-full h-10 my-5">
              <Image
                layout="fill"
                objectFit="contain"
                className="blog_line"
                src="/images/other/Ligne-purple.png"
                alt="web3 communities"
              />
            </div>
            <h2 className="text-2xl lg:text-3xl lg:leading-relaxed text-center leading-relaxed font-bold">
              Exploring Blockchain & NFT technologies and the future of Web3
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-white lg:sticky lg:top-0 relative z-10">
        <div className="max-w-[1400px] py-4 px-[6%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full items-center text-center">
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
      {/* <section className="section section--white">
        <div className="container">
          <h3>Pourquoi le Web3 ?</h3>
          <p>
            Le Web3 correspond au Web décentralisé, qui signifie que les données
            d'un utilisateur ne transitent plus à travers les serveurs d'un
            intéremédiaire mais via un réseau totalement décentralisé
            (blockchain). Les données sont anonymes et possédées par
            l'utilisateur.
          </p>
          <p>
            Le Web3 permet de donner beaucoup plus de liberté et de pouvoir aux
            utilisateurs, créant ainsi une infinité de possibilité pour les
            organisations et leur communautés.{" "}
          </p>
        </div>
      </section> */}
      <Cta />
    </div>
  );
};

export default PostList;
