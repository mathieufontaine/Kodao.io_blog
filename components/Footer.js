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
    <footer className="footer">
      <div className="container container--footer">
        <div className="footer_row">
          <div className="footer_col">
            <h4 className="col_heading">Kodao.io</h4>
            <ul>
              <li>
                <Link href="/">
                  <a>A propos</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Nos services</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Mentions légales</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Gestion des cookies</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Données personnelles</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer_col">
            <h4 className="col_heading">News</h4>
            <ul>
              <li>
                <Link href="/">
                  <a>Collabs (à venir)</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Nouveaux services</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer_col">
            <h4 className="col_heading">Nous suivre</h4>
            <div className="social-links">
              <Link href="/">
                <a>
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </Link>
              <Link href="/">
                <a>
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
