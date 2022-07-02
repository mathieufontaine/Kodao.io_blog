import Link from "next/link";

const Cta = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <div className="cta_text">
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
          <div className="cta_btn">
            <Link href="/contact">
              <a>
                <button className="button" type="button">
                  <div className="button_effect"></div>
                  <span className="button_text">En savoir plus</span>
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
