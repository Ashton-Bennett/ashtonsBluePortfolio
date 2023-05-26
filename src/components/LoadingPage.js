import Image from "next/image";
import alogo from "public/images/landingPage/logo-removebg-preview.png";
import "animate.css";

export default function LoadingPage() {
  return (
    <div className="column alignCenter justifyCenter fullScreen">
      <Image
        priority
        src={alogo}
        width={200}
        height={200}
        className="aLogo animate__animated animate__flip animate__infinite infinite animate__slow	2s "
        alt="Ashton Bennett Logo"
      />
    </div>
  );
}
