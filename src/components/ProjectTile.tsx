import { Project } from "../types";

interface Props {
  project: Project;
}

export const ProjectTile = (props: Props) => {
  const { project } = props;
  return (
    <>
      <div className="bg-purple-100 border-x border-black flex-1">
        <h1>{project.title}</h1>
        <h2>{project.year}</h2>
        <h2>{project.type}</h2>
        <p>{project.description}</p>
        <img className="w-20 h-20" src={project.images[0].imagePath} />
      </div>
    </>
  );
};
