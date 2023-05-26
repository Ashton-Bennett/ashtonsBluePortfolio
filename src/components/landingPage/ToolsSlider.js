import htmlLogo from "public/icons/html_logo.png";
import cssLogo from "public/icons/css_icon.png";
import jsLogo from "public/icons/javascriptlogo.png";
import mongoLogo from "public/icons/mongodb-icon.svg";
import nodeLogo from "public/icons/nodejs-icon.svg";
import reactLogo from "public/icons/react_icon.svg";
import reduxLogo from "public/icons/redux.svg";
import Image from "next/image";
import typescriptLogo from "public/icons/typescript (1).svg";
import gitLogo from "public/icons/git.svg";
import nextLogo from "public/icons/next-js.svg";
import { motion } from "framer-motion";
import { animationStaggerFadeIn } from "../utils/Animations";
import { v4 as uuidv4 } from "uuid";
const ToolsSlider = ({ windowWidth }) => {
  const images = [
    { pic: htmlLogo, name: "HTML", color: "#E44D27" },
    { pic: cssLogo, name: "CSS", color: "#214CE5" },
    { pic: jsLogo, name: "JavaScript", color: "#F0DC4E" },
    { pic: gitLogo, name: "Git", color: "#F24F27" },
    { pic: mongoLogo, name: "MongoDB", color: "#42A03A" },
    { pic: nodeLogo, name: "Node.js", color: "#84CE24" },
    { pic: nextLogo, name: "Next.js", color: "#000000" },
    { pic: reduxLogo, name: "Redux", color: "#7649BD" },
    { pic: typescriptLogo, name: "TypeScript", color: "#2E79C7" },
    { pic: reactLogo, name: "React.js", color: "#149ECA" },
  ];
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000); // Generates a random number from 0 to 100
  };

  return (
    <aside className="row justifyCenter">
      <motion.div
        variants={animationStaggerFadeIn}
        initial="start"
        animate="end"
        className="fullWidth paddingY removeBtmPaddingOnLgScreen maxWidth1300"
      >
        <motion.h4
          variants={animationStaggerFadeIn}
          className="paddingx centerOnLgScreen paddingBottomOnLgScreen"
        >
          Highly proficient with:
        </motion.h4>
        {windowWidth >= 500 ? (
          <motion.div
            variants={animationStaggerFadeIn}
            initial="start"
            animate="end"
            transition={{ staggerChildren: 0.75 }}
            className="row spaceAround flexWrap"
          >
            {images.map((i) => {
              return (
                <motion.div
                  variants={animationStaggerFadeIn}
                  key={`${i.pic}lgScreen${uuidv4()}`}
                  className="column"
                >
                  <Image width={30} height={30} src={i.pic} alt="tech logo" />
                  <p style={{ color: `${i.color}` }}>{i.name}</p>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <div className="one">
            <div className="slideshow">
              <div className="images">
                {images.map((i) => {
                  return (
                    <div
                      key={`${i.pic}${uuidv4()}`}
                      className="row sliderImgWrapper marginLeft"
                    >
                      <Image
                        width={30}
                        height={30}
                        src={i.pic}
                        alt="tech logo"
                      />
                      <p style={{ color: `${i.color}` }}>{i.name}</p>
                    </div>
                  );
                })}
                {images.map((i) => {
                  return (
                    <div
                      key={i.name}
                      className="row sliderImgWrapper marginLeft"
                    >
                      <Image
                        width={30}
                        height={30}
                        src={i.pic}
                        alt="tech logo"
                      />
                      <p style={{ color: `${i.color}` }}>{i.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </aside>
  );
};
export default ToolsSlider;
