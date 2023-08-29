import Marquee from "react-fast-marquee";

interface Props {
  description: string;
}

export const MarqueeComponent = (props: Props) => {
  const { description } = props;

  return (
    <Marquee pauseOnHover speed={30}>
      <div className="font-mono text-sm cursor-pointer">{description}</div>
    </Marquee>
  );
};
