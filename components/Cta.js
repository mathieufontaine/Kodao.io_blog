import Link from "next/link";

const Cta = () => {
  return (
    <section className="bg-black text-white">
      <div className="container">
        <div className="lg:grid lg:grid-cols-[2fr,1fr]">
          <div>
            <h3>
              Kodao.io vous aide à vous lancer dans le web3 dès maintenant !
            </h3>
            <p>
              Le Web3 permet de donner beaucoup plus de liberté et de pouvoir
              aux utilisateurs, créant ainsi une infinité de possibilité pour
              les organisations et leur communautés.
            </p>
            <p>
              Il est temps de construire, vendre, innover et partager !
              Lancez-vous dans le web3 dès maintenant !
            </p>
          </div>
          <div className="lg:flex lg:items-center lg:justify-center ">
            <Link href="/contact">
              <a>
                <button className="btn mt-8" type="button">
                  En savoir plus
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
