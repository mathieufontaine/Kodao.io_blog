import Image from "next/image";

const Hero = () => {
  return (
    <section className="container bg-gradient-to-r from-[#330656] to-black py-6">
      <div className=" text-white w-3/4 lg:w-2/3 2xl:w-1/2 flex flex-col items-center justify-center mx-auto">
        <h1 className="text-5xl pb-0">Kodao.io Blog</h1>
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
    </section>
  );
};

export default Hero;
