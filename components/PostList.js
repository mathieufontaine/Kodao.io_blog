import Post from "./Post";
import Cta from "./Cta";
import Image from "next/image";

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <div className="color-black">
      <section className="bg-black py-6">
        <div className="container">
          <div className="text-white w-3/4 lg:w-2/3 2xl:w-1/2 flex flex-col items-center justify-center mx-auto">
            <h1 className="">Kodao.io Blog</h1>
            <div className="relative w-full h-10 my-5">
              <Image
                layout="fill"
                objectFit="contain"
                // layout="responsive"
                className="blog_line"
                src="/images/other/Ligne-purple.png"
                alt="web3 communities"
              />
            </div>
            <h2 className="uppercase text-2xl text-center leading-relaxed font-bold py-4 ">
              Check out our latest articles on Kodao's Web3.0 blog!
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container">
          <h3 className="py-0">Last Articles</h3>
          <hr className="w-full h-1 my-5 mx-auto bg-accent" />
          <div
            className="mt-3 pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
          mx-auto w-full"
          >
            {posts?.map((post) => (
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
