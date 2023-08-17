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
    links: [
      {
        text: "Visit Site",
        path: "https://freda-arena-clone.onrender.com/login",
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
    links: [
      {
        text: "Visit Site",
        path: "https://dynamictimesheet.netlify.app/",
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
    links: [
      {
        text: "Visit Site",
        path: "https://3dweather-app.netlify.app/",
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
        imagePath: "/images/Podium/06_GIF_2.gif",
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
    links: [
      {
        text: "Visit Site",
        path: "https://freda-arena-clone.onrender.com/login",
      },
    ],
  },
  {
    id: "5",
    year: "2021",
    title: "Madame Wu",
    type: projectTypes.GraphicDesign,
    description:
      "Exotic and confused, this tea would probably cause severe food poisoning if it were ever sent down the manufacturing line. The brand identity reflects a reconciliation of times past and present. Old teas for new teens, Madame Wu is ultra-materialism hidden behind an anti-capitalistic language.",
    indexImage: "/images/MadameWu/03_Visual.jpg",
    images: [
      {
        imagePath: "/images/MadameWu/01_Packaging.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/MadameWu/02_Mobile.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/MadameWu/04_Crest.gif",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/MadameWu/05_web.gif",
        imageText: "this is image text",
      },
    ],
    links: [
      {
        text: "Visit Site",
        path: "https://freda-arena-clone.onrender.com/login",
      },
    ],
  },
  {
    id: "6",
    year: "2021",
    title: "Brunswick St Festival",
    type: projectTypes.threeD,
    description:
      "A street festival to celebrate the past and the present of Brunswick, Melbourne, and its unique heritage and diversity through art, food and music. I experimented with typographic compositions and using graphic devices to display festival program information. A bright and nostalgic colour palette appeals to families and hipsters alike.",
    indexImage: "/images/BrunswickSt/01_OOH.jpg",
    images: [
      {
        imagePath: "/images/BrunswickSt/01_OOH.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/BrunswickSt/02_Poster.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/BrunswickSt/03_Wall.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/BrunswickSt/04_Mobile.gif",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/BrunswickSt/05_Tote.jpg",
        imageText: "this is image text",
      },
    ],
    links: [
      {
        text: "Visit Site",
        path: "https://freda-arena-clone.onrender.com/login",
      },
    ],
  },
  {
    id: "7",
    year: "2022",
    title: "Soma Pharmaceuticals",
    type: projectTypes.threeD,
    description:
      "Inspired by the dystopian future of Brave New World, this project brings to life a fictional substance named Soma, which is issued by the central government to keep citizens happy. The brand identity is at once alluring and repulsive, falsifying an illusion of choice over the lack thereof. The brand identity carries the influence of 20th century Communist propaganda while making a case for 2020 and beyond.",
    indexImage: "/images/Soma/05_TicketFlatLay.jpg",
    images: [
      {
        imagePath: "/images/Soma/01_Packaging.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/Soma/02_Bottles.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/Soma/03_Render.gif",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/Soma/04_Ticket_2.gif",
        imageText: "this is image text",
      },
    ],
    links: [
      {
        text: "Visit Site",
        path: "https://freda-arena-clone.onrender.com/login",
      },
    ],
  },
  {
    id: "8",
    year: "2022",
    title: "Future Perfect",
    type: projectTypes.GraphicDesign,
    description:
      "I was asked to reimagine the brand identity of a 3D design studio ‘Future Perfect Digital’ using my choice of medium. The idea of 'Future is now' is the inspiration behind the pieces. Taking reference from the studio’s portfolio, it has a strong focus on using 3D technology and AR to stretch the experience of reality.    ",
    indexImage: "/images/FuturePerfect/02_Detail.jpg",
    images: [
      {
        imagePath: "/images/FuturePerfect/01_Visual.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/FuturePerfect/04_Logo.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/FuturePerfect/02_Detail.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/FuturePerfect/03_Landscape.jpg",
        imageText: "this is image text",
      },
    ],
    links: [
      {
        text: "Visit Site",
        path: "https://freda-arena-clone.onrender.com/login",
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

export const videoLinks = {
  futurePerfect: "https://youtube.com/shorts/iMax35wU3oM?feature=share",
};
