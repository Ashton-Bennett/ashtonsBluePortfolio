import Arrow from "./Arrow";
import { Collapse, useModal, Modal, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import gamesOnMainImg from "public/images/projects/gamesOnMainPic.png";
import cssLogo from "public/icons/css_icon.png";
import reactLogo from "public/icons/react_icon.svg";
import nextLogo from "public/icons/next-js.svg";
import gamesOnMainSiteImg from "public/images/projects/gamesOnMainWebsiteImg.png";
import vercelIcon from "public/icons/vercel-icon-svgrepo-com.svg";

const GamesOnMain = ({ smallScreen }) => {
  const { setVisible, bindings } = useModal();
  return (
    <Collapse
      arrowIcon={<Arrow />}
      title={
        <p className="whiteText fontPlus fontW500 blueOnHover">
          Games On Main{" "}
        </p>
      }
      subtitle={<p className="smallText">Marketing Website</p>}
      contentLeft={
        <Image
          alt="wizard"
          width={60}
          height={48}
          src={gamesOnMainImg}
          className="borderRad"
        />
      }
    >
      <p className="whiteText">
        {
          "I designed and developed a website to help a local business build a better online presence."
        }
      </p>
      <br></br>
      <div className="column">
        <Button
          className="opacityChangeOnHover "
          onPress={() => setVisible(true)}
          size={"xs"}
          color="warning"
        >
          <span className="fontW500">Details</span>
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
                src={gamesOnMainSiteImg}
                alt="Website screenshot for Games on main"
              />
            </div>

            <section className="column">
              <h1 className="paddingYSm ">Games On Main</h1>
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
                      src={nextLogo}
                      alt="nextLogo"
                    />
                    <p>Next.js</p>
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
                      src={vercelIcon}
                      alt="Vercel Icon"
                    />
                    <p>Vercel</p>
                  </div>
                </div>
              </div>

              <p className="paddingY2">
                I was hired by a local business to help improve their web
                presence by designing and building a website. I chose to use
                Next.js because of the SEO benefits that come with it out of the
                box. For the styling of the site I used the Chakra UI library
                and fair amount of Vanilla CSS.
              </p>
              <p className="paddingBottomSm">
                Collaborating with the great staff of Games on Main was a real
                pleasure. I really enjoyed using MidJourney&apos;s text to image
                AI generator to create the wizard image displayed on the hero
                section. Another cool feature of the site is the gallery
                component displaying their 25 most recent instagram posts.
                Tapping into the Instagram API using React helps automate
                updates for the site.
              </p>
              <p>
                Games on Main was very happy with the site and remains in
                contact with me for any updates they may need on the site. I
                really enjoyed collaborating with them and getting the
                opportunity to work together.
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
            href={"https://github.com/Ashton-Bennett/games_on_main_site"}
            target="_blank"
          >
            <Button auto shadow rounded onPress={() => setVisible(false)}>
              GitHub
            </Button>
          </Link>
          <Link
            title="Go to Games On Main site"
            href={"https://www.gamesonmainut.com/"}
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

export default GamesOnMain;
