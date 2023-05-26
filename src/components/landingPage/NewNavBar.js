import logo from "public/images/landingPage/logo-removebg-preview.png";
import { Navbar, Link } from "@nextui-org/react";
import Image from "next/image";
import hamburgerIcon from "public/icons/hamburgericon.png";
import ButtonBlue from "./ButtonBlue";
import { useState } from "react";
import XIcon from "public/icons/xIcon.png";
import { motion } from "framer-motion";
import { animationStaggerFadeIn } from "../utils/Animations";
export default function NewNavBar() {
  const [toggleIcons, setToggleIcons] = useState({
    showHamburger: true,
    showX: false,
  });

  const toggleNav = () => {
    if (toggleIcons.showHamburger === true) {
      return setToggleIcons({
        showHamburger: false,
        showX: true,
      });
    }
    if (toggleIcons.showHamburger === false) {
      return setToggleIcons({
        showHamburger: true,
        showX: false,
      });
    }
  };
  return (
    <motion.nav
      variants={animationStaggerFadeIn}
      initial="start"
      animate="end"
      transition={{ staggerChildren: 0.75 }}
      className="row  justifyCenter"
    >
      <Navbar className="paddingx maxWidth1300">
        <motion.div variants={animationStaggerFadeIn}>
          <Navbar.Brand>
            <Link href="/">
              <Image width={70} height={70} src={logo} alt="Ashton Bennett" />
            </Link>
          </Navbar.Brand>
        </motion.div>

        <Navbar.Toggle
          id="toggle nav"
          aria-label="toggle nav"
          showIn="xs"
          onPress={toggleNav}
        >
          {toggleIcons.showHamburger === true ? (
            <Image
              width={30}
              height={30}
              alt="Open navigation menu"
              src={hamburgerIcon}
            />
          ) : (
            <Image
              width={30}
              height={30}
              alt="Close navigation menu"
              src={XIcon}
            />
          )}
        </Navbar.Toggle>
        <Navbar.Content
          enableCursorHighlight
          activeColor={"none"}
          hideIn="xs"
          variant="highlight"
          style={{ justifyItems: "flex-end" }}
        >
          <motion.div variants={animationStaggerFadeIn}>
            <Navbar.Link
              id="about me link"
              href="/#about"
              className="hoverBlueText"
            >
              About Me
            </Navbar.Link>
          </motion.div>
          <motion.div variants={animationStaggerFadeIn}>
            <Navbar.Link
              id="projects link"
              href="/#projects"
              className="hoverBlueText"
            >
              Projects
            </Navbar.Link>
          </motion.div>
          <motion.div variants={animationStaggerFadeIn}>
            <Navbar.Link
              id="resume link"
              href="/ashton.bennett.resume.pdf"
              target="_blank"
              className="hoverBlueText"
            >
              Résumé
            </Navbar.Link>
          </motion.div>
          <motion.div variants={animationStaggerFadeIn}>
            <Navbar.Link
              id="blogs link"
              href="/#blogs"
              className="hoverBlueText"
            >
              Blogs
            </Navbar.Link>
          </motion.div>
          <motion.div className="marginTop" variants={animationStaggerFadeIn}>
            <Navbar.Link id="collaborate link" href="/#contact">
              <ButtonBlue size={"xs"} text={"Collaborate"} />
            </Navbar.Link>
          </motion.div>
        </Navbar.Content>

        <Navbar.Collapse>
          <Navbar.CollapseItem className="hoverBlueText">
            <Link
              id="about me on mobile"
              color="inherit"
              href="/#about"
              style={{ textAlign: "center" }}
            >
              About Me
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem className="hoverBlueText">
            <Link id="projects on mobile" color="inherit" href="/#projects">
              Projects
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem className="hoverBlueText">
            <Link id="blogs on mobile" color="inherit" href="/#blogs">
              Blogs
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem className="hoverBlueText">
            <Link
              id="resume on mobile"
              color="inherit"
              href="/ashton.bennett.resume.pdf"
              target="_blank"
            >
              Résumé
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link id="collaborate on mobile" color="inherit" href="/#contact">
              <ButtonBlue size={"sm"} text={"Collaborate"} />
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </motion.nav>
  );
}
