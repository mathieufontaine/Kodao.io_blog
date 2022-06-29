// import { NavLink } from "react-router-dom";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link
        className="logo_link"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="logo"
          src="/images/logo/logo-kodao.png"
          alt="logo kodao"
        />
      </Link>
      <nav className="navbar">
        <ul>
          <li className="navbar_item">
            <Link href="/index.html#web3" id="nav-web3" className="navbar_link">
              Web3
            </Link>
          </li>
          <li className="navbar_item">
            <Link
              href="/index.html#concept"
              id="nav-concept"
              className="navbar_link"
            >
              Concept
            </Link>
          </li>
          <li className="navbar_item">
            <Link
              href="/index.html#offer"
              id="nav-offer"
              className="navbar_link"
            >
              Offre
            </Link>
          </li>
          <li className="navbar_item">
            <Link
              href="/index.html#about"
              id="nav-about"
              className="navbar_link"
            >
              A propos
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
          <li className="navbar_item">
            <Link href="/index.html#faq" id="nav-faq" className="navbar_link">
              FAQ
            </Link>
          </li>
          <li className="navbar_item">
            <Link href="/" className="navbar_link navbar_link--active">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <div className="menu_button">
        <i className="menu_icon fa-solid fa-bars"></i>
      </div>
      <nav className="menu">
        <ul>
          <li className="menu_item">
            <Link href="/index.html#web3" id="nav-web3" className="menu_link">
              Web3
            </Link>
          </li>
          <li className="menu_item">
            <Link
              href="/index.html#concept"
              id="nav-concept"
              className="menu_link"
            >
              Concept
            </Link>
          </li>
          <li className="menu_item">
            <Link href="/index.html#offer" id="nav-offer" className="menu_link">
              Offre
            </Link>
          </li>
          <li className="menu_item">
            <Link href="/index.html#about" id="nav-about" className="menu_link">
              A propos
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
          <li className="menu_item">
            <Link href="/index.html#faq" id="nav-faq" className="menu_link">
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
