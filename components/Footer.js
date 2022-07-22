import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container">
        <div className="mx-auto text-center max-w-xl flex flex-col md:px-40 md:max-w-screen-lg md:text-left md:w-full md:flex-row justify-between">
          <div className="my-5">
            <h4
              className="mb-8 relative after:w-1/2 text-2xl after:content:[''] after:h-1 after:bg-accent 
              after:absolute after:bottom-[-5px] after:left-1/2 after:translate-x-[-50%] md:after:left-0  md:after:translate-x-0"
            >
              Kodao.io
            </h4>
            <ul>
              <li>
                <Link href="https://www.kodao.io/concept">
                  <a className="text-black font-thin my-2 hover:text-accent">
                    Concept
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.kodao.io/solutions">
                  <a className="text-black font-thin my-2 hover:text-accent">
                    Solutions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.kodao.io/contact">
                  <a className="text-black font-thin my-2 hover:text-accent">
                    Contact
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link href="/">
                  <a className="text-black font-thin my-2 hover:text-accent">
                    Mentions légales
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-black font-thin my-2 hover:text-accent">
                    Gestion des cookies
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-black font-thin my-2 hover:text-accent">
                    Données personnelles
                  </a>
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="my-5">
            <h4
              className="mb-8 relative after:w-1/2 text-2xl after:content:[''] after:h-1 after:bg-accent 
              after:absolute after:bottom-[-5px] after:left-1/2 after:translate-x-[-50%] md:after:left-0  md:after:translate-x-0"
            >
              News
            </h4>
            <ul>
              <li>
                <Link href="/">
                  <a className="text-black font-thin my-2 hover:text-accent">
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-black font-thin my-2 hover:text-accent">
                    Collabs (soon)
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-black font-thin my-2 hover:text-accent">
                    New services (soon)
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="my-5">
            <h4
              className="mb-8 relative after:w-1/2 text-2xl after:content:[''] after:h-1 after:bg-accent 
              after:absolute after:bottom-[-5px] after:left-1/2 after:translate-x-[-50%] md:after:left-0  md:after:translate-x-0"
            >
              Follow Us
            </h4>
            <div className="flex md:grid md:grid-cols-2 gap-2 justify-center items-center">
              <Link href="https://discord.gg/BXtp6szz7C">
                <a
                  className="flex items-center justify-center h-14 w-14 text-white bg-accent hover:text-accent 
                hover:bg-white border-accent border-2 rounded-full text-xl"
                >
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
              </Link>
              <Link href="https://twitter.com/kodao_io">
                <a
                  className="flex items-center justify-center h-14 w-14 text-white bg-accent hover:text-accent 
                hover:bg-white border-accent border-2 rounded-full text-xl"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </Link>
              {/* <Link href="/">
                <a
                  className="flex items-center justify-center h-14 w-14 text-white bg-accent hover:text-accent 
                hover:bg-white border-accent border-2 rounded-full text-xl"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </Link>
              <Link href="/">
                <a
                  className="flex items-center justify-center h-14 w-14 text-white bg-accent hover:text-accent 
                hover:bg-white border-accent border-2 rounded-full text-xl"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mb-2">© Kodao 2022. All rights reserved</p>
    </footer>
  );
};

export default Footer;
