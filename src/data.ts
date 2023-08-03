import { Project } from "./types";

export const projectTypes = {
  GraphicDesign: "Graphic Design",
  WebDev: "Web Development",
  threeD: "3D Design",
};

export const projects: Project[] = [
  {
    id: "1",
    year: "2002",
    title: "Project One long description",
    type: projectTypes.GraphicDesign,
    description: "this is the project description",
    images: [
      { imageId: "1", imagePath: "/images/toothpaste.jpeg" },
      { imageId: "2", imagePath: "/images/sink.jpeg" },
    ],
  },
  {
    id: "2",
    year: "2003",
    title: "Project Two",
    type: projectTypes.WebDev,
    description: "this is the project description",
    images: [{ imageId: "2", imagePath: "/images/sink.jpeg" }],
  },
  {
    id: "3",
    year: "2004",
    title: "Project Three",
    type: projectTypes.threeD,
    description: "this is the project description",
    images: [{ imageId: "3", imagePath: "/images/cat.png" }],
  },
  {
    id: "4",
    year: "2003",
    title: "Project Four",
    type: projectTypes.WebDev,
    description: "this is the project description",
    images: [{ imageId: "2", imagePath: "/images/sink.jpeg" }],
  },
  {
    id: "5",
    year: "2003",
    title: "Project Five",
    type: projectTypes.GraphicDesign,
    description: "this is the project description",
    images: [{ imageId: "2", imagePath: "/images/sink.jpeg" }],
  },
  {
    id: "6",
    year: "2003",
    title: "Project Six",
    type: projectTypes.threeD,
    description: "this is the project description",
    images: [{ imageId: "2", imagePath: "/images/sink.jpeg" }],
  },
  {
    id: "7",
    year: "2003",
    title: "Project Seven",
    type: projectTypes.threeD,
    description: "this is the project description",
    images: [{ imageId: "2", imagePath: "/images/sink.jpeg" }],
  },
  {
    id: "8",
    year: "2003",
    title: "Project Eight",
    type: projectTypes.GraphicDesign,
    description: "this is the project description",
    images: [{ imageId: "2", imagePath: "/images/sink.jpeg" }],
  },
  {
    id: "9",
    year: "2003",
    title: "Project Nine",
    type: projectTypes.WebDev,
    description: "this is the project description",
    images: [{ imageId: "2", imagePath: "/images/toothpaste.jpeg" }],
  },
  {
    id: "10",
    year: "2003",
    title: "Project Ten",
    type: projectTypes.WebDev,
    description: "this is the project description",
    images: [{ imageId: "2", imagePath: "/images/sink.jpeg" }],
  },
];

export const links = {
  email: "mailto: f.chang122@gmail.com",
  gitHub: "https://github.com/fredachang",
  instagram: "https://www.instagram.com/notcoolfreda",
  linkedIn: "https://www.linkedin.com/in/fredachang",
};
