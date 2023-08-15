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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis eros, sit amet bibendum risus. Nulla dictum non neque ac posuere. Donec non tempus lectus, at pellentesque ipsum. Nullam gravida nunc nec faucibus consectetur. Etiam sit amet vehicula orci. Phasellus non sapien bibendum, egestas erat ac, tincidunt massa. ",
    indexImage: { imageId: "1", imagePath: "/images/toothpaste.jpeg" },
    images: [
      {
        imageId: "1",
        imagePath: "/images/toothpaste.jpeg",
        imageText: "this is image text ONE",
      },
      {
        imageId: "2",
        imagePath: "/images/sink.jpeg",
        imageText: "this is image text TWO",
      },
    ],
  },
  {
    id: "2",
    year: "2003",
    title: "Project Two",
    type: projectTypes.WebDev,
    description: "this is the project description",
    indexImage: { imageId: "1", imagePath: "/images/toothpaste.jpeg" },
    images: [
      {
        imageId: "2",
        imagePath: "/images/sink.jpeg",
        imageText: "this is image text for PROJECT TWO",
      },
    ],
  },
  {
    id: "3",
    year: "2004",
    title: "Project Three",
    type: projectTypes.threeD,
    description: "this is the project description",
    indexImage: { imageId: "1", imagePath: "/images/toothpaste.jpeg" },
    images: [
      {
        imageId: "3",
        imagePath: "/images/cat.png",
        imageText: "this is image text",
      },
    ],
  },
  {
    id: "4",
    year: "2003",
    title: "Project Four",
    type: projectTypes.WebDev,
    description: "this is the project description",
    indexImage: { imageId: "1", imagePath: "/images/toothpaste.jpeg" },
    images: [
      {
        imageId: "2",
        imagePath: "/images/sink.jpeg",
        imageText: "this is image text",
      },
    ],
  },
  {
    id: "5",
    year: "2003",
    title: "Project Five",
    type: projectTypes.GraphicDesign,
    description: "this is the project description",
    indexImage: { imageId: "1", imagePath: "/images/toothpaste.jpeg" },
    images: [
      {
        imageId: "2",
        imagePath: "/images/sink.jpeg",
        imageText: "this is image text",
      },
    ],
  },
  {
    id: "6",
    year: "2003",
    title: "Project Six",
    type: projectTypes.threeD,
    description: "this is the project description",
    indexImage: { imageId: "1", imagePath: "/images/toothpaste.jpeg" },
    images: [
      {
        imageId: "2",
        imagePath: "/images/sink.jpeg",
        imageText: "this is image text",
      },
    ],
  },
  {
    id: "7",
    year: "2003",
    title: "Project Seven",
    type: projectTypes.threeD,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis eros, sit amet bibendum risus. Nulla dictum non neque ac posuere. Donec non tempus lectus, at pellentesque ipsum. Nullam gravida nunc nec faucibus consectetur. Etiam sit amet vehicula orci. Phasellus non sapien bibendum, egestas erat ac, tincidunt massa. ",
    indexImage: { imageId: "1", imagePath: "/images/toothpaste.jpeg" },
    images: [
      {
        imageId: "2",
        imagePath: "/images/sink.jpeg",
        imageText: "this is image text",
      },
    ],
  },
  {
    id: "8",
    year: "2003",
    title: "Project Eight",
    type: projectTypes.GraphicDesign,
    description: "this is the project description",
    indexImage: { imageId: "1", imagePath: "/images/toothpaste.jpeg" },
    images: [
      {
        imageId: "2",
        imagePath: "/images/sink.jpeg",
        imageText: "this is image text",
      },
    ],
  },
];

export const links = {
  email: "mailto: f.chang122@gmail.com",
  gitHub: "https://github.com/fredachang",
  instagram: "https://www.instagram.com/notcoolfreda",
  linkedIn: "https://www.linkedin.com/in/fredachang",
};
