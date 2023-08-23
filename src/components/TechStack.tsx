interface Props {
  description: string;
}

export const TechStack = (props: Props) => {
  const { description } = props;
  return (
    <div className="font-mono bg-mintTransparent border border-mint text-xs rounded-md max-w-max flex justify-center items-center p-1">
      {description}
    </div>
  );
};
