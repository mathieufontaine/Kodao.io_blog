import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container container--footer">
        <div className="footer_row">
          <div className="footer_col">
            <h4 className="col_heading">Kodao.io</h4>
            <ul>
              <li>
                <Link href="/">A propos</Link>
              </li>
              <li>
                <Link href="/">Nos services</Link>
              </li>
              <li>
                <Link href="/">Mentions légales</Link>
              </li>
              <li>
                <Link href="/">Gestion des cookies</Link>
              </li>
              <li>
                <Link href="/">Données personnelles</Link>
              </li>
            </ul>
          </div>
          <div className="footer_col">
            <h4 className="col_heading">News</h4>
            <ul>
              <li>
                <Link href="/">Collabs (à venir)</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Nouveaux services</Link>
              </li>
            </ul>
          </div>
          <div className="footer_col">
            <h4 className="col_heading">Nous suivre</h4>
            <div className="social-links">
              <Link href="/">
                <i className="fab fa-discord"></i>
              </Link>
              <Link href="/">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="/">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="/">
                <i className="fab fa-linkedin-in"></i>
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
