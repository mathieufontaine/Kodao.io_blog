// import { NavLink } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <header className="header">
      {/* <Link
        className="logo_link"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      > */}
      <Image
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        width="180px"
        height="80px"
        layout="intrinsic"
        className="logo"
        src="/images/logo/logo-kodao.png"
        alt="logo kodao"
      />
      {/* </Link> */}
      <nav className="navbar">
        <ul>
          <li className="navbar_item">
            <Link href="/" className="navbar_link navbar_link--active">
              Blog
            </Link>
          </li>
          <li className="navbar_item">
            <Link
              href="/index.html#offer"
              id="nav-offer"
              className="navbar_link"
            >
              Solutions
            </Link>
          </li>
          <li className="navbar_item">
            <Link
              href="/index.html#contact"
              id="nav-contact"
              className="navbar_link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="menu_button" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
      <nav className={`menu ${menuOpen && "menu--open"}`}>
        <ul>
          <li className="menu_item">
            <Link href="/" id="nav-faq" className="menu_link">
              Blog
            </Link>
          </li>
          <li className="menu_item">
            <Link href="/index.html#offer" id="nav-offer" className="menu_link">
              Solutions
            </Link>
          </li>
          <li className="menu_item">
            <Link
              href="/index.html#contact"
              id="nav-contact"
              className="menu_link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
