// import { NavLink } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <header
      className=" text-white bg-black top-0 z-20 w-full sticky md:relative flex items-center
      "
    >
      <div
        className="w-full max-w-[1400px] xl:mx-auto px-10 xl:px-15 py-2 flex items-center 
      justify-between md:justify-start"
      >
        <a
          href="https://www.kodao.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative h-16 w-32 md:h-20 md:w-40">
            <Image
              layout="fill"
              objectFit="contain"
              src="/images/logo/logo-white.svg"
              alt="logo kodao"
            />
          </div>
        </a>
        <nav className="hidden md:block ml-10">
          <ul className="flex">
            <li
              className="relative hover:after:w-full mx-10 text-xl after:content:[''] after:w-0 after:h-1 after:bg-accent 
          after:absolute after:bottom-[-10px] after:left-0 after:transition-all"
            >
              <Link href="/" className="navbar_link navbar_link--active">
                <a className="text-white">Blog</a>
              </Link>
            </li>
            <li
              className="relative hover:after:w-full mx-6 text-xl after:content:[''] after:w-0 after:h-1 after:bg-accent 
            after:absolute after:bottom-[-10px] after:left-0 after:transition-all"
            >
              <a
                href="https://www.kodao.io/offers"
                id="nav-contact"
                className="navbar_link text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solutions
              </a>
            </li>
            <li
              className="relative hover:after:w-full mx-6 text-xl after:content:[''] after:w-0 after:h-1 after:bg-accent 
            after:absolute after:bottom-[-10px] after:left-0 after:transition-all"
            >
              <a
                href="https://www.kodao.io/contact"
                id="nav-contact"
                className="navbar_link text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden text-4xl md:text-big"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <nav
          className={`md:hidden fixed pb-10 px-5 h-[90vh] top-[10vh] z-10 bg-black bg-opacity-90 
      transition-all ${menuOpen ? "block right-0" : "hidden right-[-100%]"}`}
        >
          <ul>
            <li
              className="relative hover:after:w-full mx-6 mt-20  text-xl uppercase after:content:[''] after:w-0 after:h-1 after:bg-accent 
            after:absolute after:bottom-[-10px] after:left-0 after:transition-all"
            >
              <Link href="/" id="nav-faq" className="menu_link">
                <a className="text-white">Blog</a>
              </Link>
            </li>
            <li
              className="relative hover:after:w-full mx-6 mt-20 text-xl uppercase after:content:[''] after:w-0 after:h-1 after:bg-accent 
            after:absolute after:bottom-[-10px] after:left-0 after:transition-all"
            >
              <Link
                href="https://www.kodao.io/offers"
                id="nav-offer"
                className="menu_link"
              >
                <a className="text-white">Solutions</a>
              </Link>
            </li>
            <li
              className="relative hover:after:w-full mx-6 mt-20 text-xl uppercase after:content:[''] after:w-0 after:h-1 after:bg-accent 
            after:absolute after:bottom-[-10px] after:left-0 after:transition-all"
            >
              <Link
                href="https://www.kodao.io/contact"
                id="nav-contact"
                className="menu_link"
              >
                <a className="text-white">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
