import Arrow from "./Arrow";
import { Collapse, useModal, Modal, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import mongoDbIcon from "public/icons/mongodb-icon.svg";
import nodeIcon from "public/icons/nodejs-icon.svg";
import reduxIcon from "public/icons/redux.svg";
import reactLogo from "public/icons/react_icon.svg";
import blogAppIcon from "public/images/projects/blogAppIcon.png";
import blogAppImage from "public/images/projects/blog_app.png";

const BlogApp = ({ smallScreen }) => {
  const { setVisible, bindings } = useModal();
  return (
    <Collapse
      arrowIcon={<Arrow />}
      title={
        <p className="whiteText fontPlus fontW500 blueOnHover">Blog App</p>
      }
      subtitle={<p className="smallText ltGreyText">Full Stack App</p>}
      contentLeft={
        <Image
          alt="pencil"
          width={60}
          height={48}
          src={blogAppIcon}
          className="borderRad"
        />
      }
    >
      <p className="whiteText">
        Built as a personal project. I was able to deploy an app that allows
        users to create an account, share, comment, and delete posts.
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
                src={blogAppImage}
                alt="Website screenshot for Blog App"
              />
            </div>
            <section className="column">
              <h1 className="paddingYSm">{"Blog App"}</h1>
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
                  title="go to blog app website"
                  href="https://blog-app-by-ashton.fly.dev/"
                  className="blueText"
                  target="_blank"
                >
                  Try it out here.
                </Link>
              </p>
              <p>
                Blog app will require the user to login. Once validated the user
                will be able to complete all CRUD operations. They can complete
                a form that will upload their favorite blog for other users to
                see, comment, and like. There is also functionality that will
                allow the user to delete a blog post, but only if they are the
                user that created that particular blog. If you would like to see
                the code click&nbsp;
                <Link
                  title="go to github"
                  href="https://github.com/Ashton-Bennett/blog_app"
                  className="blueText"
                  target="_blank"
                >
                  here
                </Link>
                .
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
            href={"https://github.com/Ashton-Bennett/blog_app"}
            target="_blank"
          >
            <Button auto shadow rounded onPress={() => setVisible(false)}>
              GitHub
            </Button>
          </Link>
          <Link
            title="go to web app"
            href="https://blog-app-by-ashton.fly.dev/"
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

export default BlogApp;
