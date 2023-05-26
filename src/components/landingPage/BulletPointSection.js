import { Card } from "@nextui-org/react";
import lightingImg from "public/images/landingPage/lightning.jpg";
import Image from "next/image";
import openImage from "public/images/landingPage/Screen Shot 2023-05-18 at 3.46.21 PM.png";
import waterImage from "public/images/landingPage/oceanPic.png";

const BulletPointSection = () => {
  return (
    <section className="bulletSectionOnLgScreen">
      <div className="paddingx column alignCenter switchToRowOnLg spaceAround flexEnd removePadding maxWidth1300">
        <Card className="cardBtm maxWidth3 gradient">
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <div className="column">
              <p className="ltGreyText">Building applications with</p>
              <h3 className="whiteText">
                Lightning Fast<br></br> Performance
              </h3>
            </div>
          </Card.Header>
          <Image
            src={lightingImg}
            style={{
              transform: "rotate(90deg)",
              objectFit: "cover",
            }}
            width="100%"
            height={340}
            alt="lightning"
          />
          <Card.Footer
            css={{
              position: "absolute",
              bottom: 0,
            }}
          >
            <p className="whiteText fontW500 paddingLeftXXL">
              Harnessing the power of modern technologies to achieve the highest
              performance.
            </p>
          </Card.Footer>
        </Card>

        <Card className="marginTopMd cardBtm maxWidth3 marginMiddleCard">
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <div className="column">
              <p className="ltGreyText">Ensuring Projects are</p>
              <h3 className="whiteText">
                Accessible To <br></br>Everyone
              </h3>
            </div>
          </Card.Header>
          <Image
            src={openImage}
            style={{ objectFit: "cover" }}
            width={400}
            height={340}
            alt="lightning"
          />
          <Card.Footer
            css={{
              position: "absolute",
              bottom: 0,
            }}
          >
            <p className="whiteText fontW500 ">
              Incorporating best practices to create applications that are
              inclusive, user-friendly, and accessible to everyone.
            </p>
          </Card.Footer>
        </Card>

        <Card className="marginTopMd cardBtm maxWidth3">
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <div className="column">
              <p className="ltGreyText">No matter the screen size</p>
              <h3 className="whiteText textCap">Visually Stunning</h3>
            </div>
          </Card.Header>
          <Image
            src={waterImage}
            style={{ objectFit: "cover" }}
            width={400}
            height={340}
            alt="lightning"
          />
          <Card.Footer
            css={{
              position: "absolute",
              bottom: 0,
            }}
          >
            <p className="whiteText fontW500 ">
              Developing applications that effortlessly adjust to varying screen
              sizes, delivering a pleasurable experience on any device.
            </p>
          </Card.Footer>
        </Card>
      </div>
    </section>
  );
};

export default BulletPointSection;
