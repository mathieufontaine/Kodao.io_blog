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
        <div className="mx-auto text-center max-w-xl flex flex-col sm:px-8 lg:px-40 sm:max-w-screen-lg sm:text-left sm:w-full sm:flex-row justify-between">
          <div className="my-5">
            <h4
              className="mb-8 relative after:w-1/2 text-2xl after:content:[''] after:h-1 after:bg-accent 
              after:absolute after:bottom-[-5px] after:left-1/2 after:translate-x-[-50%] sm:after:left-0  sm:after:translate-x-0"
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
                <Link href="https://www.kodao.io/offers">
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
              after:absolute after:bottom-[-5px] after:left-1/2 after:translate-x-[-50%] sm:after:left-0  sm:after:translate-x-0"
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
              after:absolute after:bottom-[-5px] after:left-1/2 after:translate-x-[-50%] sm:after:left-0  sm:after:translate-x-0"
            >
              Follow Us
            </h4>
            <div className="flex md:grid md:grid-cols-3 gap-2 justify-center items-center">
              <a
                href="https://discord.gg/BXtp6szz7C"
                className="flex items-center justify-center h-14 w-14 text-white bg-accent hover:text-accent 
                hover:bg-white border-accent border-2 rounded-full text-xl"
              >
                <FontAwesomeIcon icon={faDiscord} />
              </a>

              <a
                href="https://twitter.com/kodao_io"
                className="flex items-center justify-center h-14 w-14 text-white bg-accent hover:text-accent 
                hover:bg-white border-accent border-2 rounded-full text-xl"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>

              {/* <a
                  className="flex items-center justify-center h-14 w-14 text-white bg-accent hover:text-accent 
                hover:bg-white border-accent border-2 rounded-full text-xl"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a> */}

              <a
                href="https://www.linkedin.com/company/kodao-io"
                className="flex items-center justify-center h-14 w-14 text-white bg-accent hover:text-accent 
                hover:bg-white border-accent border-2 rounded-full text-xl"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mb-2">© Kodao 2022. All rights reserved</p>
    </footer>
  );
};

export default Footer;
