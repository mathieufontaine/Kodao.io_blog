// import { NavLink } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <header
      className="text-white fixed bg-black bg-opacity-80 h-[10vh] top-0 w-full 
      flex z-10 items-center justify-between py-8 px-10 border-b-2 border-white"
    >
      <Link href="/" target="_blank" rel="noopener noreferrer">
        <a>
          <Image
            width="180px"
            height="80px"
            layout="intrinsic"
            src="/images/logo/logo-kodao.png"
            alt="logo kodao"
          />
        </a>
      </Link>
      <nav className="hidden md:block">
        <ul className="flex">
          <li
            className="relative hover:after:w-full mx-6 text-3xl after:content:[''] after:w-0 after:h-1 after:bg-accent 
          after:absolute after:bottom-[-10px] after:left-0 after:transition-all"
          >
            <Link href="/" className="navbar_link navbar_link--active">
              <a className="text-white">Blog</a>
            </Link>
          </li>
          <li
            className="relative hover:after:w-full mx-6 text-3xl after:content:[''] after:w-0 after:h-1 after:bg-accent 
            after:absolute after:bottom-[-10px] after:left-0 after:transition-all"
          >
            <Link
              href="/index.html#offer"
              id="nav-offer"
              className="navbar_link"
            >
              <a className="text-white">Solutions</a>
            </Link>
          </li>
          <li
            className="relative hover:after:w-full mx-6 text-3xl after:content:[''] after:w-0 after:h-1 after:bg-accent 
            after:absolute after:bottom-[-10px] after:left-0 after:transition-all"
          >
            <Link
              href="/index.html#contact"
              id="nav-contact"
              className="navbar_link"
            >
              <a className="text-white">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="md:hidden text-big"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
      <nav
        className={`absolute pb-10 px-5 h-[90vh] right-[-100%] top-[10vh] z-10 bg-black bg-opacity-80 
      transition-all ${menuOpen && "block right-0"}`}
      >
        <ul>
          <li
            className="relative hover:after:w-full mx-6 mt-20  text-3xl after:content:[''] after:w-0 after:h-1 after:bg-accent 
            after:absolute after:bottom-[-10px] after:left-0 after:transition-all"
          >
            <Link href="/" id="nav-faq" className="menu_link">
              <a className="text-white">Blog</a>
            </Link>
          </li>
          <li
            className="relative hover:after:w-full mx-6 mt-20 text-3xl after:content:[''] after:w-0 after:h-1 after:bg-accent 
            after:absolute after:bottom-[-10px] after:left-0 after:transition-all"
          >
            <Link href="/index.html#offer" id="nav-offer" className="menu_link">
              <a className="text-white">Solutions</a>
            </Link>
          </li>
          <li
            className="relative hover:after:w-full mx-6 mt-20 text-3xl after:content:[''] after:w-0 after:h-1 after:bg-accent 
            after:absolute after:bottom-[-10px] after:left-0 after:transition-all"
          >
            <Link
              href="/index.html#contact"
              id="nav-contact"
              className="menu_link"
            >
              <a className="text-white">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
