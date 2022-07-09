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
        <div className="mx-auto text-center max-w-xl flex flex-col md:px-40 md:max-w-full md:text-left md:w-full md:flex-row justify-between">
          <div className="my-5">
            <h4
              className="mb-8 relative after:w-1/2 text-2xl after:content:[''] after:h-1 after:bg-accent 
              after:absolute after:bottom-[-5px] after:left-1/2 after:translate-x-[-50%] md:after:left-0  md:after:translate-x-0"
            >
              Kodao.io
            </h4>
            <ul>
              <li>
                <Link href="/">
                  <a className="text-black font-thin text-lg">A propos</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-black font-thin text-lg">Nos services</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-black font-thin text-lg">
                    Mentions légales
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-black font-thin text-lg">
                    Gestion des cookies
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-black font-thin text-lg">
                    Données personnelles
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="my-5">
            <h4
              className="mb-8 relative after:w-1/2 text-2xl after:content:[''] after:h-1 after:bg-accent 
              after:absolute after:bottom-[-5px] md:after:left-0 after:left-1/2 md:after:translate-x-0"
            >
              News
            </h4>
            <ul>
              <li>
                <Link href="/">
                  <a className="text-black font-thin text-lg">
                    Collabs (à venir)
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-black font-thin text-lg">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-black font-thin text-lg">
                    Nouveaux services
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="my-5">
            <h4
              className="mb-8 relative after:w-1/2 text-2xl after:content:[''] after:h-1 after:bg-accent 
              after:absolute after:bottom-[-5px] md:after:left-0 after:left-1/2 md:after:translate-x-0"
            >
              Nous suivre
            </h4>
            <div className="grid grid-cols-4 md:grid-cols-2 gap-5">
              <Link href="/">
                <a
                  className="flex items-center justify-center h-20 w-20 text-white bg-accent hover:text-accent 
                hover:bg-white border-accent border-2 rounded-full text-3xl"
                >
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
              </Link>
              <Link href="/">
                <a
                  className="flex items-center justify-center h-20 w-20 text-white bg-accent hover:text-accent 
                hover:bg-white border-accent border-2 rounded-full text-3xl"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </Link>
              <Link href="/">
                <a
                  className="flex items-center justify-center h-20 w-20 text-white bg-accent hover:text-accent 
                hover:bg-white border-accent border-2 rounded-full text-3xl"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </Link>
              <Link href="/">
                <a
                  className="flex items-center justify-center h-20 w-20 text-white bg-accent hover:text-accent 
                hover:bg-white border-accent border-2 rounded-full text-3xl"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="powered">© Kodao 2022. All rights reserved</p>
    </footer>
  );
};

export default Footer;
