import Link from "next/link";
import Image from "next/image";

const Cta = () => {
  return (
    <section className="bg-black text-white">
      <div className="container p-6 md:p-10 xl:p-15">
        <div className="grid grid-col-1 lg:grid-cols-[2fr,1fr] text-center lg:text-left">
          <div>
            <a
              href="https://www.kodao.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center lg:block"
            >
              <div className="relative h-20 w-40">
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="/images/logo/logo-white.svg"
                  alt="logo kodao"
                />
              </div>
            </a>
            <h3>Let us help you get started with Web3!</h3>
            <p>
              Web3 changes the way we interact with the internet. Instead of
              using traditional websites, web3 allows users to access the
              internet through a decentralized application (dApp) that runs on a
              blockchain, which means that users can interact with the internet
              without having to trust a central authority.
            </p>
            <p className="mt-2">
              Thus, it gives much more freedom and power to end users, creating
              an infinite number of possibilities for organizations to exchange
              values with their communities. It&apos;s time to build, sell,
              innovate and share!{" "}
            </p>
            <h4 className="mt-4">Lets&apos;s get started with web3 now!</h4>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://www.kodao.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn mt-4 lg:mt-0" type="button">
                More Information
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

{
  /* <section className="section section--white">
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
      </section> */
}
