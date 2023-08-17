import { Project } from "./types";

export const projectTypes = {
  GraphicDesign: "Graphic Design",
  WebDev: "Web Development",
  threeD: "3D Design",
};

export const projects: Project[] = [
  {
    id: "1",
    year: "2023",
    title: "Scrapbook App",
    type: projectTypes.WebDev,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis eros, sit amet bibendum risus. Nulla dictum non neque ac posuere. Donec non tempus lectus, at pellentesque ipsum. Nullam gravida nunc nec faucibus consectetur. Etiam sit amet vehicula orci. Phasellus non sapien bibendum, egestas erat ac, tincidunt massa. ",
    indexImage: "/images/toothpaste.jpeg",
    images: [
      {
        imagePath: "/images/toothpaste.jpeg",
        imageText: "this is image text ONE",
      },
      {
        imagePath: "/images/sink.jpeg",
        imageText: "this is image text TWO",
      },
    ],
  },
  {
    id: "2",
    year: "2023",
    title: "Timer App",
    type: projectTypes.WebDev,
    description: "this is the project description",
    indexImage: "/images/toothpaste.jpeg",
    images: [
      {
        imagePath: "/images/sink.jpeg",
        imageText: "this is image text for PROJECT TWO",
      },
    ],
  },
  {
    id: "3",
    year: "2023",
    title: "Weather Window App",
    type: projectTypes.WebDev,
    description: "this is the project description",
    indexImage: "/images/toothpaste.jpeg",
    images: [
      {
        imagePath: "/images/cat.png",
        imageText: "this is image text",
      },
    ],
  },
  {
    id: "4",
    year: "2003",
    title: "Podium Coffee",
    type: projectTypes.GraphicDesign,
    description:
      "Nutrient-enriched, biodegradable coffee pods for the outdoor adventure-seekers. Designed for the CEOs and the George Clooneys who buys expensive lycra, this is a coffee that emphasises routine and performance while paying homage to the finer things in life. Available in extra-strength AM brew and decaf PM brew for the wind-down",
    indexImage: "/images/Podium/01_Box.jpg",
    images: [
      {
        imagePath: "/images/Podium/06_GIF.gif?nf_resize=fit",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/Podium/01_Box.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/Podium/02_Box.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/Podium/03_GroupShot.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/Podium/04_Merch.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/Podium/05_Merch.jpg",
        imageText: "this is image text",
      },
    ],
  },
  {
    id: "5",
    year: "2021",
    title: "Madame Wu",
    type: projectTypes.GraphicDesign,
    description: "this is the project description",
    indexImage: "/images/toothpaste.jpeg",
    images: [
      {
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
    indexImage: "/images/toothpaste.jpeg",
    images: [
      {
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
    indexImage: "/images/toothpaste.jpeg",
    images: [
      {
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
    indexImage: "/images/toothpaste.jpeg",
    images: [
      {
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
