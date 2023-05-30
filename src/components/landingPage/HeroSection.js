import Image from "next/image";
import ashtonPic from "public/images/landingPage/ashtonImg.png";
import ButtonBlue from "./ButtonBlue";
import Link from "next/link";
import { motion } from "framer-motion";
import { animationStaggerFadeIn } from "../utils/Animations";

export default function HeroSection({ windowWidth }) {
  return (
    <main className="row spaceAround minHeight">
      <motion.div
        variants={animationStaggerFadeIn}
        initial="start"
        animate="end"
        className="column columnForASec paddingNoTop switchToRow addHeight"
      >
        <motion.div
          variants={animationStaggerFadeIn}
          className="alignCenter column imageWrapper gradient"
        >
          <Image
            priority
            className="portfolioImg"
            width={windowWidth <= 1300 ? 300 : 330}
            height={windowWidth <= 1300 ? 330 : 360}
            src={ashtonPic}
            alt="Ashton Bennett"
          />
        </motion.div>
        <motion.section
          variants={animationStaggerFadeIn}
          initial="start"
          animate="end"
          transition={{ staggerChildren: 0.75 }}
          className="halfWidthOnLgScreen column"
        >
          <motion.i
            variants={animationStaggerFadeIn}
            transition={{ staggerChildren: 0.75 }}
            className="blueText smallText paddingYSm"
          >
            Hi, My name is
          </motion.i>
          <motion.h1
            transition={{ staggerChildren: 0.75 }}
            variants={animationStaggerFadeIn}
          >
            {" "}
            Ashton Bennett.<br></br>{" "}
            <motion.span
              variants={animationStaggerFadeIn}
              className="paddingRightOnLgScreen"
            >
              I build Web Applications.
            </motion.span>
          </motion.h1>
          <motion.p
            variants={animationStaggerFadeIn}
            className="greyText paddingTopSm paddingRightOnLgScreen maxWidth3"
          >
            I am a passionate front end developer who helps teams achieve their
            goals and <i className="blueText">shine</i> with performant,
            accessible, and responsive applications.
          </motion.p>
          <motion.div variants={animationStaggerFadeIn}>
            <Link href="/#contact">
              <ButtonBlue size={"lg"} text={"Let's Collaborate"} />
            </Link>
          </motion.div>
        </motion.section>
      </motion.div>
    </main>
  );
}
