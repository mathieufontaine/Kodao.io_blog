import Link from "next/link";

const Cta = () => {
  return (
    <section className="bg-black text-white">
      <div className="container">
        <div className="lg:grid lg:grid-cols-[2fr,1fr]">
          <div>
            <h3>What does Web3 change for the User?</h3>
            <p>
              Web3 is the decentralized Web, which means that users' data no
              longer pass through the servers of a intermediary but via a
              totally decentralized network (blockchain).{" "}
            </p>
            <p className="mt-2">
              Thus, it gives much more freedom and power to end users, creating
              an infinite number of possibilities for organizations to exchange
              values with their communities. It's time to build, sell, innovate
              and share!{" "}
            </p>
            <h4 className="mt-2">Lets's get started with web3 now!</h4>
          </div>
          <div className="lg:flex lg:items-center lg:justify-center ">
            <Link href="https://www.kodao.io/contact">
              <a>
                <button className="btn mt-8 lg:mt-0" type="button">
                  More Information
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
