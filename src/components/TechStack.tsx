import { type } from "../tailwind-utils";

interface Props {
  description: string;
  HighlightHex: string;
}

export const TechStack = (props: Props) => {
  const { description } = props;
  return (
    <div
      className={`${type.smaller} max-w-max flex justify-center items-center p-1`}
    >
      {description}
    </div>
  );
};
