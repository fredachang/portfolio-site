import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    year: "2002",
    title: "Project One",
    type: "commercial",
    description: "this is the project description",
    images: [{ imageId: "1", imagePath: "./assets/toothpaste.jpeg" }],
  },
  {
    id: "2",
    year: "2003",
    title: "Project Two",
    type: "personal",
    description: "this is the project description",
    images: [{ imageId: "1", imagePath: "./assets/sink.jpeg" }],
  },
];
