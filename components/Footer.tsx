import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container container--footer">
        <div className="footer_row">
          <div className="footer_col">
            <h4 className="col_heading">Kodao.io</h4>
            <ul>
              <li>
                <a href="/">A propos</a>
              </li>
              <li>
                <a href="/">Nos services</a>
              </li>
              <li>
                <a href="/">Mentions légales</a>
              </li>
              <li>
                <a href="/">Gestion des cookies</a>
              </li>
              <li>
                <a href="/">Données personnelles</a>
              </li>
            </ul>
          </div>
          <div className="footer_col">
            <h4 className="col_heading">News</h4>
            <ul>
              <li>
                <a href="/">Collabs (à venir)</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Nouveaux services</a>
              </li>
            </ul>
          </div>
          <div className="footer_col">
            <h4 className="col_heading">Nous suivre</h4>
            <div className="social-links">
              <a href="/">
                <i className="fab fa-discord"></i>
              </a>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="powered">© Kodao 2022. All rights reserved</p>
    </footer>
  );
};

export default Footer;
