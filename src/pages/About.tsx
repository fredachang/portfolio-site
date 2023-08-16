import { Link } from "react-router-dom";
import { commonStyles } from "../tailwind-utils";

export const About = () => {
  return (
    <>
      <Link to="/">
        <div
          className={`p-${commonStyles.spacingMd} w-screen cursor-default h-full flex justify-between items-start`}
        >
          <div className={commonStyles.h2}>
            Freda is a designer based in Sydney
          </div>
        </div>
      </Link>
    </>
  );
};
