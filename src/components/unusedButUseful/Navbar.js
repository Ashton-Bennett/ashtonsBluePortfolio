import Image from "next/image";
import logo from "../../public/logo-removebg-preview.png";
import Link from "next/link";
import hamburgerIcon from "../../public/hamburgericon.png";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-xl removePadding">
        <a
          className="navbar-brand col-md-5 hoverBlueText justify-content-start"
          href="#"
        >
          <Image
            width={60}
            height={60}
            src={logo}
            alt="logo"
            className="d-inline-block"
          />
        </a>
        <button
          className="navbar-toggler btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Image
            width={30}
            height={30}
            alt="hamburger Icon"
            src={hamburgerIcon}
          />
        </button>
        <div
          className="collapse navbar-collapse col-md-5 me-auto justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 fullWidth">
            <li className="nav-item paddingLeft">
              <Link
                className="nav-link blackText hoverBlueText"
                aria-current="page"
                href="/"
              >
                About
              </Link>
            </li>
            <li className="nav-item paddingLeft">
              <Link className="nav-link blackText hoverBlueText" href="#">
                Blogs
              </Link>
            </li>
            <li className="nav-item paddingLeft">
              <Link
                className="nav-link blackText hoverBlueText"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item paddingLeft">
              <Link
                className="nav-link blackText hoverBlueText"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Resume
              </Link>
            </li>
            <li className="paddingLeft marginTop marginBottom">
              <button className="btn whiteText gradient">Projects</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
