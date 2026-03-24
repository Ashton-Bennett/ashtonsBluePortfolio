import Arrow from "./Arrow";
import { Collapse, useModal, Modal, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import mongoDbIcon from "public/icons/mongodb-icon.svg";
import nodeIcon from "public/icons/nodejs-icon.svg";
import reduxIcon from "public/icons/redux.svg";
import reactLogo from "public/icons/react_icon.svg";
import theMenuIcon from "public/images/projects/restaurant_menu_FILL0_wght400_GRAD0_opsz48.svg";
import theMenuAppImage from "public/images/projects/the_menu.png";

const TheMenuApp = ({ smallScreen }) => {
  const { setVisible, bindings } = useModal();
  return (
    <Collapse
      arrowIcon={<Arrow />}
      title={
        <p className="whiteText fontPlus fontW500 blueOnHover">The Menu App</p>
      }
      subtitle={<p className="smallText ltGreyText">Full Stack App</p>}
      contentLeft={
        <Image
          alt="chef spoon and fork"
          width={60}
          height={48}
          src={theMenuIcon}
          className="borderRad"
        />
      }
    >
      <p className="whiteText">
        Created a meal planning app that streamlines weekly cooking using
        professional chef techniques for a restaurant-quality experience at
        home.
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
                src={theMenuAppImage}
                alt="Website screenshot for The Menu App"
              />
            </div>
            <section className="column">
              <h1 className="paddingYSm">{"The Menu App"}</h1>
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
                      src={reduxIcon}
                      alt="Redux logo"
                    />
                    <p className="reduxColor">Redux</p>
                  </div>
                  <div className="column">
                    <Image
                      width={24}
                      height={24}
                      src={nodeIcon}
                      alt="Node Logo"
                    />
                    <p className="nodeColor">Node</p>
                  </div>
                  <div className="column">
                    <Image
                      width={24}
                      height={24}
                      src={mongoDbIcon}
                      alt="MongoDB Icon"
                    />
                    <p className="mongoColor">MongoDB</p>
                  </div>
                </div>
              </div>
              <p className="paddingY2">
                I created this app to gain a better understanding of full stack
                development and to practice using Express, Node, React, Redux,
                and MongoDB.{" "}
                <Link
                  title="go to the menu app website"
                  href="https://the-menu-by-ashton-bennett.fly.dev/"
                  className="blueText"
                  target="_blank"
                >
                  Try it out here.
                </Link>
              </p>
              <p>
                The Menu is a menu planning app with user profiles, menu
                sharing, AI-assisted recipe creation, and Alexa-enabled grocery
                list management, including automatic list generation from
                missing ingredients.
                {/* <Link
                  title="go to github"
                  href="https://github.com/Ashton-Bennett/blog_app"
                  className="blueText"
                  target="_blank"
                >
                  here
                </Link>
                . */}
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
          {/* <Link
            disabled
            title="go to github"
            href={"https://github.com/Ashton-Bennett/blog_app"}
            target="_blank"
          >
            <Button auto shadow rounded onPress={() => setVisible(false)}>
              GitHub
            </Button>
          </Link> */}
          <Link
            title="go to web app"
            href="https://the-menu-by-ashton-bennett.fly.dev/"
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

export default TheMenuApp;
