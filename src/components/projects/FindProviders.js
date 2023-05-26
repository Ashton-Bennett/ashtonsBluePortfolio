import Arrow from "./Arrow";
import { Collapse, useModal, Modal, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import intelliLogo from "public/images/projects/intelliLogo.png";
import reactLogo from "public/icons/react_icon.svg";
import intelliProcessingImg from "public/images/projects/intelliprocessingimg.png";
import typescriptLogo from "public/icons/typescript (1).svg";
import vercelIcon from "public/icons/vercel-icon-svgrepo-com.svg";
import tailWindLogo from "public/icons/tailwind-css.svg";

const FindProviders = ({ smallScreen }) => {
  const { setVisible, bindings } = useModal();
  return (
    <Collapse
      arrowIcon={<Arrow />}
      title={
        <p onHover className="whiteText fontPlus fontW500 blueOnHover">
          Find Providers
        </p>
      }
      subtitle={<p className="smallText">Built for IntelliProcessing</p>}
      contentLeft={
        <Image
          alt="IntelliProcessing Logo"
          width={55}
          height={45}
          src={intelliLogo}
          className="borderRad"
        />
      }
    >
      <p className="whiteText">
        This platform feature will prompt the user to share their location. Then
        will display the details for providers in their area.
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
                width={270}
                height={350}
                src={intelliProcessingImg}
                alt="Website screenshot for find providers"
              />
            </div>

            <section className="column">
              <h1 className="paddingYSm">Find Providers</h1>
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
                      src={typescriptLogo}
                      alt="TypeScript logo"
                    />
                    <p className="typeScriptColor">TypeScript</p>
                  </div>
                  <div className="column">
                    <Image
                      width={24}
                      height={24}
                      src={tailWindLogo}
                      alt="tailWind"
                    />
                    <p>Tailwind</p>
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
                Find Providers was built for a local company that provides
                software to help maintain new hire screening data. They help
                connect the dots for drug testing, background checks, and a
                variety of other information needed durning the hiring process.
              </p>
              <p>
                This feature relies heavily on the google places api. I also
                used React, Typescript, Tailwind CSS, and deployed a demo using
                Vercel. Try the demo&nbsp;
                <Link
                  title="try Find Providers"
                  href={"https://find-provider.vercel.app/"}
                  target="_blank"
                >
                  here
                </Link>
                .
              </p>
              <br></br>
              <p className="paddingY2">
                The app will initially request the user to share their location.
                If the user does not share their location they will still be
                able to use the text input field to provide a city they want to
                get information for. Once their location is shared using the
                geolocation api and google places api the feature will get all
                the providers within 9 miles of the given location. For each
                provider the UI will show a picture, name, phone number,
                website, and address.
              </p>
              <p className="paddingBottomSm">
                While building this feature It was nice working with the google
                places api. It provides so much data that I had more than enough
                to provide the user with the info they would need. Also Tailwind
                CSS is awesome! I can&apos;t wait to use it again. I really
                enjoyed having the utility classes available. If you are
                interested in the technical side click
                <span>
                  <Link
                    title="go to github"
                    href={"https://github.com/Ashton-Bennett/find_provider"}
                    target="_blank"
                  >
                    &nbsp;here&nbsp;
                  </Link>
                </span>
                to see the code.
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
            href={"https://github.com/Ashton-Bennett/find_provider"}
            target="_blank"
          >
            <Button auto shadow rounded onPress={() => setVisible(false)}>
              GitHub
            </Button>
          </Link>
          <Link
            title="go to web app"
            href={"https://find-provider.vercel.app/"}
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

export default FindProviders;
