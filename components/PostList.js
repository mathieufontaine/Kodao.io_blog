import Post from "./Post";
import Cta from "./Cta";
import Image from "next/image";

const PostList = ({ posts }) => {
  return (
    <main className="blog">
      <section className="section">
        <div className="container">
          <div className="blog_text">
            <h1 className="blog_title">Kodao.io Blog</h1>
            <h2 className="blog_subtitle">
              Découvrez nos derniers articles sur le blog de Kodao consacré au
              Web3.0 !
            </h2>
            <Image
              width="1000px"
              height="80px"
              layout="intrinsic"
              className="blog_line"
              src="/images/other/Ligne-purple.png"
              alt="web3 communities"
            />
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container">
          <h3 className="blog_heading">Derniers Articles</h3>
          <hr className="blog_line" />
          <div className="card_wrapper">
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
    </main>
  );
};

export default PostList;
