interface Props {
  description: string;
  HighlightHex: string;
}

export const TechStack = (props: Props) => {
  const { description } = props;
  return (
    <div
      className={`font-mono bg-stone-100 text-xs rounded-md max-w-max flex justify-center items-center p-1`}
    >
      {description}
    </div>
  );
};
