import { Collapse, Grid } from "@nextui-org/react";
import FindProviders from "./FindProviders";
import BlogApp from "./BlogApp";
import GamesOnMain from "./GamesOnMain";
import AmpGuitar from "./AmpGuitar";
import { useEffect, useState } from "react";

const Projects = ({ windowWidth }) => {
  const [smallScreen, setSmallScreen] = useState();

  useEffect(() => {
    if (windowWidth > 650) {
      setSmallScreen(false);
    } else {
      setSmallScreen(true);
    }
  }, [windowWidth]);

  return (
    <section id="projects" className="column alignCenter">
      <Grid.Container className="paddingx paddingY column alignCenter" gap={2}>
        <Grid>
          <Collapse.Group className="gradient" shadow>
            <Collapse
              arrowIcon={<></>}
              title={<p className="largeText whiteText">Recent Projects</p>}
            >
              <p className=" whiteText">
                Here are a few of my recently made projects to showcase some of
                my technical skills.
              </p>
            </Collapse>
            <FindProviders smallScreen={smallScreen} />
            <GamesOnMain smallScreen={smallScreen} />
            <BlogApp smallScreen={smallScreen} />
            <AmpGuitar smallScreen={smallScreen} />
          </Collapse.Group>
        </Grid>
      </Grid.Container>
    </section>
  );
};

export default Projects;
