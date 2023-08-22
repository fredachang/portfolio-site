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
    shortDescription:
      "Scrapbook is a text and image visual moodboarding web app inspired by Are.na.",
    description:
      "Scrapbook is a text and image visual moodboarding web app inspired by Are.na (https://www.are.na/). The primary aim of the project is to familiarise myself with the full-stack workflow using React Typescript for front-end and a relational database such as PostgresSQL for back-end. The user is able to create channels and upload blocks via drag and drop or copying the image path. The blocks can be easily connected to other channels to create a web of visual inspirations. The UI is kept relatively simple to not detract from the focus on the moodboard and its visual storytelling.",
    indexImage: "/images/Scrapbook/index.jpg",
    images: [
      {
        imagePath: "/images/Scrapbook/dragdrop.mp4",
        imageText: "this is image text TWO",
      },
      {
        imagePath: "/images/Scrapbook/Auth.mp4",
        imageText:
          "To allow for a social aspect like Are.na, user profiles are created and maintained through a manual authentication process using JWT tokens.",
      },
      {
        imagePath: "/images/Scrapbook/Feed.mp4",
        imageText:
          "The user can connect blocks seen on the feed to their own channels. Only public channels will be visible to everyone via the Feed.",
      },
    ],
    links: [
      {
        text: "Visit Site",
        path: "https://freda-arena-clone.onrender.com/login",
      },
      {
        text: "Source Code",
        path: "https://github.com/fredachang/scrapbook-app",
      },
    ],
  },
  {
    id: "2",
    year: "2023",
    title: "Timer App",
    type: projectTypes.WebDev,
    shortDescription:
      "A weekly time tracker app with built-in 30 minute timer with UI influenced by nuclear reactor controls",
    description:
      "The Time Tracker app is the first app I built using the React Typescript framework. The original idea was conceived at the start of my 3-4 month sabbatical of learning how to code, as a way to manage my time across different projects/goals. I wanted the experience of tracking time to be fun instead of invoking a feeling of obligation/ticking off boxes so I focused heavily on the UI - which became inspired by the cyberpunk/dystopian/video game aesthetic.",
    indexImage: "/images/Timer/index.jpg",
    images: [
      {
        imagePath: "/images/Timer/main.mp4",
        imageText:
          " I didn't want the focus to be on the numbers at the end of the day (or working for the sake of hitting the target rather than being productive), so I abstracted them away into delibrately hard-to-read symbols on the table. ",
      },
      {
        imagePath: "/images/Timer/timer.mp4",
        imageText:
          "I implemented an optional 30 minutes timer with a ring tone inspired by the Pomodoro method that automatically clocks an half-hour slot when time is up. After experimenting with this method, I found that I was able to take consistent breaks while dividing work down into reasonable, easy-to-execute chunks, with full visibility of time spent across various life goals.",
      },
      {
        imagePath: "/images/Timer/theme.mp4",
        imageText:
          "As the choice of colours was deliberately bold, I implemented a dynamic light vs dark scheme via Tailwind CSS classes, to provide a little reprieve on the eye when the excitement of the electric green starts to wear off.",
      },
    ],
    links: [
      {
        text: "Visit Site",
        path: "https://dynamictimesheet.netlify.app/",
      },
      {
        text: "Source Code",
        path: "https://github.com/fredachang/time-tracker-app",
      },
    ],
  },
  {
    id: "3",
    year: "2023",
    title: "Weather Window App",
    type: projectTypes.WebDev,
    shortDescription:
      "A 3D weather window for dynamic, real-time city-based weather results built using Three.js.",
    description:
      "This is a city-based weather app created by using Open Weather API and React Three Fibre + Drei. I wanted to make the experience more tactile by implementing a digital window that can be customised by the user in real time. The room objects/plants are designed and modelled in Blender and converted into React components using GLTFJSX package. Plugging in React Spring and Use Gesture, the user is able to adapt the room layout, saved in local storage, based on individual preferences. Finally, a set of HDR background image is mapped to the weather conditions outputted by Open Weather API, to dynamically change the scene based on weather result.",
    indexImage: "/images/weatherapp/index.jpg",
    images: [
      {
        imagePath: "/images/weatherapp/Main_2.mp4",
        imageText: "this is image text",
      },
    ],
    links: [
      {
        text: "Visit Site",
        path: "https://3dweather-app.netlify.app/",
      },
      {
        text: "Source Code",
        path: "https://github.com/fredachang/3d-weather-app",
      },
    ],
  },
  {
    id: "4",
    year: "2003",
    title: "Podium Coffee",
    type: projectTypes.GraphicDesign,
    shortDescription:
      "Nutrient-enriched, biodegradable coffee pods for the outdoor adventure-seekers.",
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
    shortDescription:
      "A modern, oriental tea brand for young and curious drinkers, a reconciliation of tradition and globalisation",
    description:
      "Exotic and confused, this tea would probably cause severe food poisoning if it were ever sent down the manufacturing line. The brand identity reflects a reconciliation of times past and present. Old teas for new teens, Madame Wu is ultra-materialism hidden behind an anti-capitalistic language.",
    indexImage: "/images/MadameWu/03_Visual.jpg",
    images: [
      {
        imagePath: "/images/MadameWu/01_Packaging.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/MadameWu/visual.jpg",
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
    type: projectTypes.GraphicDesign,
    shortDescription:
      "A street festival to celebrate the past and the present of Brunswick, Melbourne.",
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
    type: projectTypes.GraphicDesign,
    shortDescription:
      "Inspired by the dystopian future of Brave New World, this project brings to life a fictional pharmaceutical named Soma designed to keep citizens happy in an autocratic society",
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
    type: projectTypes.threeD,
    shortDescription: "Visualising the brand of a 3D design studio.",
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
        text: "Watch Reel",
        path: "https://youtube.com/shorts/iMax35wU3oM?feature=share",
      },
    ],
  },
  {
    id: "9",
    year: "2022",
    title: "Personal Works",
    type: projectTypes.threeD,
    shortDescription: "A collection of my own 3D works done in Blender",
    description: "",
    indexImage: "/images/Personal/Cat.jpg",
    images: [
      {
        imagePath: "/images/Personal/Bao.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/Personal/Cat.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/Personal/Coffee.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/Personal/Oyster.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/Personal/Seoul.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/Personal/Sink.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/Personal/Stairs.jpg",
        imageText: "this is image text",
      },
      {
        imagePath: "/images/Personal/Swan.jpg",
        imageText: "this is image text",
      },
    ],
    links: [],
  },
];

export const links = {
  email: "mailto: f.chang122@gmail.com",
  gitHub: "https://github.com/fredachang",
  instagram: "https://www.instagram.com/notcoolfreda",
  linkedIn: "https://www.linkedin.com/in/fredachang",
};
