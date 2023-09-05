import { type } from "../../tailwind-utils";

export const VerticalMarquee = () => {
  return (
    <div className={`${type.smaller} h-full w-1/3 flex flex-col justify-start`}>
      <div className="mb-0.5">React</div>
      <div className="mb-0.5">TypeScript</div>
      <div className="mb-0.5">Node</div>
      <div className="mb-0.5">Express</div>
      <div className="">Three.js</div>
    </div>
  );
};
