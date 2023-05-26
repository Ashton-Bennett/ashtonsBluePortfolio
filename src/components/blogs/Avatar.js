import Image from "next/image";
import avatarImg from "public/images/blogs/ashtonAvatar.png";

const AvatarAshton = ({ date }) => {
  return (
    <div className="row paddingYSm">
      <div className="row">
        <div
          className="column flexEnd gradient borderRad borderBlue paddingXs"
          style={{ height: "45px" }}
        >
          <Image
            width={35}
            height={40}
            className=""
            src={avatarImg}
            alt="picture of Ashton Bennett"
          />
        </div>
        <div className="paddingLeft row alignCenter">
          <p className="fontW500 greyText">Ashton Bennett</p>
          <p className="fontW500 greyText marginLeft">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default AvatarAshton;
