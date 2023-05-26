import Arrow from "./Arrow";
import { Collapse, useModal, Modal, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import ampGuitarIcon from "public/images/projects/ampGuitarLogo.ico";
import ampGuitarImg from "public/images/projects/amp_guitar_img.png";
import htmlLogo from "public/icons/html_logo.png";
import cssLogo from "public/icons/css_icon.png";
import jsLogo from "public/icons/javascriptlogo.png";
import reactLogo from "public/icons/react_icon.svg";

const AmpGuitar = ({ smallScreen }) => {
  const { setVisible, bindings } = useModal();
  return (
    <Collapse
      arrowIcon={<Arrow />}
      title={
        <p className="whiteText fontPlus fontW500 blueOnHover">Amp Guitar</p>
      }
      subtitle={<p className="smallText ltGreyText">Front End React App</p>}
      contentLeft={
        <Image
          alt="music note"
          width={50}
          height={38}
          src={ampGuitarIcon}
          className="borderRad"
        />
      }
    >
      <p className="whiteText">
        Amp Guitar is a personal project I built to combine my music theory and
        programming knowledge.
      </p>
      <br></br>
      <div className="column">
        <Button
          className="opacityChangeOnHover"
          onPress={() => setVisible(true)}
          size={"xs"}
          color="warning"
        >
          Details
        </Button>
      </div>
      <Modal
        scroll
        fullScreen={smallScreen}
        blur={!smallScreen}
        width="600px"
        aria-labelledby="recent work"
        aria-describedby="recent projects Ashton has worked on."
        {...bindings}
      >
        <Modal.Body>
          <>
            <div className="row justifyCenter">
              <Image
                style={{
                  objectFit: "fill",
                }}
                className="borderRad projectImage"
                width={400}
                height={300}
                src={ampGuitarImg}
                alt="Website screenshot for Amp Guitar"
              />
            </div>

            <section className="column">
              <h1 className="paddingYSm">Amp Guitar</h1>
              <div className="row flexStart">
                <div className="row spaceBetween width70">
                  <div className="column">
                    <Image
                      width={24}
                      height={24}
                      src={reactLogo}
                      alt="React.js logo"
                    />
                    <p className="reactColor">React</p>
                  </div>
                  <div className="column">
                    <Image
                      width={24}
                      height={24}
                      src={jsLogo}
                      alt="Javascript logo"
                    />
                    <p className="jsColor">Javascript</p>
                  </div>
                  <div className="column">
                    <Image
                      width={24}
                      height={24}
                      src={cssLogo}
                      alt="CSS logo"
                    />
                    <p className="cssColor">CSS</p>
                  </div>
                  <div className="column">
                    <Image
                      width={24}
                      height={24}
                      src={htmlLogo}
                      alt="HTML logo"
                    />
                    <p className="htmlColor">HTML</p>
                  </div>
                </div>
              </div>
              <p className="paddingY2">
                Was created to combine my love for technology and playing
                guitar. It has been very well received by other guitarists and
                musicians that understand the complexities of music theory.
              </p>
              <p>
                A single page web application that provides tools to amplify
                guitarists&apos; skills. The first tool provided is a scale
                finder. The finder feature will help the user write melodies and
                solos for any particular section of a song. Created using music
                theory and functional programming, it will bring hundreds of
                musical scale diagrams to the user. Give it a try&nbsp;
                <Link
                  title="go to github"
                  href="https://ashton-bennett.github.io/"
                  className=""
                  target="_blank"
                >
                  here
                </Link>
                .
              </p>
              <br></br>
              <p>
                I always welcome constructive criticism and user feedback. To
                help streamline these ideas the app includes a contact form that
                once submitted will go to my personal email. Building upon user
                feedback is critical for any application&apos;s success.
              </p>
              <p>
                In time I will implement more features that will help guitarists
                understand and incorporate music theory into their creative
                process. To get more details click the
                <span>
                  <Link
                    title="go to github"
                    href="https://github.com/Ashton-Bennett/ashton-bennett.github.io/tree/master"
                    target="_blank"
                  >
                    &nbsp;GitHub&nbsp;
                  </Link>
                </span>
                link below.
              </p>
            </section>
          </>
        </Modal.Body>

        <Modal.Footer className="row spaceBetween">
          <Button
            auto
            flat
            rounded
            shadow
            color="error"
            onPress={() => setVisible(false)}
          >
            Close
          </Button>
          <Link
            title="go to github"
            href="https://github.com/Ashton-Bennett/ashton-bennett.github.io/tree/master"
            target="_blank"
          >
            <Button auto shadow rounded onPress={() => setVisible(false)}>
              GitHub
            </Button>
          </Link>
          <Link
            title="go to github"
            href="https://ashton-bennett.github.io/"
            target="_blank"
          >
            <Button
              color={"success"}
              shadow
              rounded
              auto
              onPress={() => setVisible(false)}
            >
              Try it
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </Collapse>
  );
};

export default AmpGuitar;
