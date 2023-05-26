import { Button } from "@nextui-org/react";

export default function ButtonBlue({ size, text }) {
  return (
    <>
      <br></br>
      <Button
        size={size}
        rounded
        className="btn whiteText gradient marginBottomSm"
      >
        {text}
      </Button>
    </>
  );
}
