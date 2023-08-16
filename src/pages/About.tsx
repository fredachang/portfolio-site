import { Link } from "react-router-dom";
import { space, type } from "../tailwind-utils";

export const About = () => {
  return (
    <>
      <Link to="/">
        <div
          className={`p-${space.spacingMd} w-screen cursor-default h-full flex justify-between items-start`}
        >
          <div className={type.md}>Freda is a designer based in Sydney</div>
        </div>
      </Link>
    </>
  );
};
