import Image from "next/image";

const Hero = () => {
  return (
    <section className=" bg-gradient-to-r from-[#330656] to-black">
      <div className="container py-16">
        <div className="text-white flex flex-col items-center justify-center mx-auto px-10 xl:px-15 py-2">
          <h1 className="text-4xl md:text-5xl pb-0">Kodao.io Blog</h1>
          <div className="relative w-full h-10 my-5">
            <Image
              layout="fill"
              objectFit="contain"
              className="blog_line"
              src="/images/other/Ligne-purple.png"
              alt="web3 communities"
            />
          </div>
          <h2 className="text-2xl lg:text-3xl lg:leading-relaxed text-center leading-relaxed font-bold pb-0">
            Exploring Blockchain & NFT technologies and the future of Web3
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
