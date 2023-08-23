import { Project } from "./types";

export const projectTypes = {
  GraphicDesign: "Graphic Design",
  WebDev: "Web Development",
  threeD: "3D Design",
};

export const techStack = {
  typeScript: "TypeScript",
  react: "React.js",
  framer: "Framer Motion",
  postgres: "PostgresSQL",
  three: "Three.js",
  tailWind: "Tailwind CSS",
  rest: "Rest APIs",
  node: "Node.js",
  express: "Express",
  afterEffects: "AfterEffects",
  Blender: "Blender",
};

export const landingPageBg = "/LandingPgBg.png";

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
    techStack: [
      techStack.typeScript,
      techStack.react,
      techStack.postgres,
      techStack.node,
      techStack.express,
      techStack.tailWind,
    ],
    indexImage: "/images/Scrapbook/index.jpg",
    images: [
      {
        imagePath: "/images/Scrapbook/dragdrop.mp4",
        imageText: "Drag and drop files for direct upload.",
      },
      {
        imagePath: "/images/Scrapbook/Auth.mp4",
        imageText:
          "I created the ability to handle user profiles to enable a social feed feature. Once registered and logged in, user sessions are managed through jwt tokens.",
      },
      {
        imagePath: "/images/Scrapbook/Feed.mp4",
        imageText:
          "When browsing the feed, the user can connect blocks uploaded by other users to their own channels",
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
    techStack: [techStack.typeScript, techStack.react, techStack.tailWind],
    images: [
      {
        imagePath: "/images/Timer/main.mp4",
        imageText:
          "The user is able to create projects and set target hours. The hours are tracked on the table and a real-time summary is displayed in the pie-charts by project.",
      },
      {
        imagePath: "/images/Timer/timer.mp4",
        imageText:
          "The user has the option of using a built-in 30 min timer to automatically clock time into the table. This allows work to be divided into easy-to-execute chunks and tracked in the background.",
      },
      {
        imagePath: "/images/Timer/theme.mp4",
        imageText:
          "As the choice of colours was deliberately bold (and somewhat anti-user-friendly), I implemented a dynamic light vs dark scheme via Tailwind CSS classes, to provide a little reprieve on the eye when the excitement of the electric green starts to wear off.",
      },
    ],
    links: [
      {
        text: "Visit Site",
        path: "https://freda-time-tracker-app.netlify.app/",
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
    title: "3D Weather App",
    type: projectTypes.WebDev,
    shortDescription:
      "A 3D weather window for dynamic, real-time city-based weather results built using Three.js.",
    description:
      "This is a city-based weather app created by using Open Weather API and React Three Fibre + Drei. I wanted to make the experience more tactile by implementing a digital window that can be customised by the user in real time. The room objects/plants are designed and modelled in Blender and converted into React components using GLTFJSX package. Plugging in React Spring and Use Gesture, the user is able to adapt the room layout, saved in local storage, based on individual preferences. Finally, a set of HDR background image is mapped to the weather conditions outputted by Open Weather API, to dynamically change the scene based on weather result.",
    indexImage: "/images/weatherapp/index.jpg",
    techStack: [techStack.three, techStack.typeScript, techStack.react],
    images: [
      {
        imagePath: "/images/weatherapp/Main_2.mp4",
        imageText:
          "The design is inspired by a recent trip to Korea, where they had these old-school sliding doors looking out onto the street and often decorated with plants.",
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
    techStack: [techStack.afterEffects],
    images: [
      {
        imagePath: "/images/Podium/06_GIF_2.gif",
        imageText:
          "The identity borrows from the infinity symbol and references the performance-enhancing aspect of the product.",
      },
      {
        imagePath: "/images/Podium/01_Box.jpg",
        imageText: "Coffee pod packaging - day-time brew",
      },
      {
        imagePath: "/images/Podium/02_Box.jpg",
        imageText: "Coffee pod packaging - night-time brew",
      },
      {
        imagePath: "/images/Podium/03_GroupShot.jpg",
        imageText: "Packaging set",
      },
      {
        imagePath: "/images/Podium/04_Merch.jpg",
        imageText:
          "I designed a gym bag as merchandise to further showcase the brand as our target demographic are high-performing, athletic individuals.",
      },
      {
        imagePath: "/images/Podium/05_Merch.jpg",
        imageText: "Merch - water bottle.",
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
    techStack: [],
    images: [
      {
        imagePath: "/images/MadameWu/01_Packaging.jpg",
        imageText:
          "Industrial tin design inspired by spray-paint cans fused with oriental crest to create an unlikely blend.",
      },
      {
        imagePath: "/images/MadameWu/04_Crest.gif",
        imageText: "Custom oriental-inspired crest with nostalgic Tephra font",
      },
      {
        imagePath: "/images/MadameWu/02_Mobile.jpg",
        imageText:
          "Social media assets are designed to draw attention and pop instantly, and the layout breaks through the static form to achieve dynamicism.",
      },

      {
        imagePath: "/images/MadameWu/05_web.gif",
        imageText:
          "An e-commerce site enriched with tea stories and engaging content.",
      },
      {
        imagePath: "/images/MadameWu/visual.jpg",
        imageText:
          "The visual heros the product ingredients to speak to audiences who care about curation and quality-first.",
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
    title: "Brunswick Fest",
    type: projectTypes.GraphicDesign,
    shortDescription:
      "A street festival to celebrate the past and the present of Brunswick, Melbourne.",
    description:
      "A street festival to celebrate the past and the present of Brunswick, Melbourne, and its unique heritage and diversity through art, food and music. I experimented with typographic compositions and using graphic devices to display festival program information. A bright and nostalgic colour palette appeals to families and hipsters alike.",
    techStack: [],
    indexImage: "/images/BrunswickSt/01_OOH.jpg",
    images: [
      {
        imagePath: "/images/BrunswickSt/01_OOH.jpg",
        imageText:
          "Large out-of-home media in the neighbourhood to draw attention to the festival.",
      },
      {
        imagePath: "/images/BrunswickSt/02_Poster.jpg",
        imageText:
          "Poster detailing the artists and stallholders to be featured.",
      },
      {
        imagePath: "/images/BrunswickSt/03_Wall.jpg",
        imageText:
          "A painted wall mural - a fit medium for a local known for its street art",
      },
      {
        imagePath: "/images/BrunswickSt/04_Mobile.gif",
        imageText: "Animated typography to draw out the design concept",
      },
      {
        imagePath: "/images/BrunswickSt/05_Tote.jpg",
        imageText:
          "Fun merch for sale at the festival, with organic lines inspired by the diveristy of, and synergy created by, the local food & art scene.",
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
    title: "Soma",
    type: projectTypes.GraphicDesign,
    shortDescription:
      "Inspired by the dystopian future of Brave New World, this project brings to life a fictional pharmaceutical named Soma designed to keep citizens happy in an autocratic society",
    description:
      "Inspired by the dystopian future of Brave New World, this project brings to life a fictional substance named Soma, which is issued by the central government to keep citizens happy. The brand identity is at once alluring and repulsive, falsifying an illusion of choice over the lack thereof. The brand identity carries the influence of 20th century Communist propaganda while making a case for 2020 and beyond.",
    techStack: [],
    indexImage: "/images/Soma/05_TicketFlatLay.jpg",
    images: [
      {
        imagePath: "/images/Soma/01_Packaging.jpg",
        imageText: "SOMA 24 daily tablets",
      },
      {
        imagePath: "/images/Soma/02_Bottles.jpg",
        imageText: "Liquid SOMA booster bottle",
      },
      {
        imagePath: "/images/Soma/03_Render.gif",
        imageText:
          "3D product rendering to recreate the sci-fi vibe of this fictional brand.",
      },
      {
        imagePath: "/images/Soma/04_Ticket_2.gif",
        imageText:
          "Like in Brave New World where residents receive rations of the substance, a mock design of government-issued ration ticket to redeem SOMA.",
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
    techStack: [],
    indexImage: "/images/FuturePerfect/02_Detail.jpg",
    images: [
      {
        imagePath: "/images/FuturePerfect/01_Visual.jpg",
        imageText:
          "Key brand symbols rendered next to a what could be 3D-printed shoe.",
      },
      {
        imagePath: "/images/FuturePerfect/04_Logo.jpg",
        imageText:
          "Logo slowly revealed by melting ice to herald in a new era for the brand.",
      },
      {
        imagePath: "/images/FuturePerfect/02_Detail.jpg",
        imageText: "Close-up of the render.",
      },
      {
        imagePath: "/images/FuturePerfect/03_Landscape.jpg",
        imageText:
          "A different spin on brand symbols and one of the artworks from a recent project to showcase versatility of the brand.",
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
    description: "This is a collection of my own works done in Blender.",
    techStack: [],

    indexImage: "/images/Personal/Cat.jpg",
    images: [
      {
        imagePath: "/images/Personal/Bao.jpg",
        imageText: "",
      },
      {
        imagePath: "/images/Personal/Cat.jpg",
        imageText: "",
      },
      {
        imagePath: "/images/Personal/Coffee.jpg",
        imageText: "",
      },
      {
        imagePath: "/images/Personal/Oyster.jpg",
        imageText: "",
      },
      {
        imagePath: "/images/Personal/Seoul.jpg",
        imageText: "",
      },
      {
        imagePath: "/images/Personal/Sink.jpg",
        imageText: "",
      },
      {
        imagePath: "/images/Personal/Stairs.jpg",
        imageText: "",
      },
      {
        imagePath: "/images/Personal/Swan.jpg",
        imageText: "",
      },
    ],
    links: [],
  },
];

export const links = {
  email: "mailto: fredachangstudio@gmail.com",
  gitHub: "https://github.com/fredachang",
  instagram: "https://www.instagram.com/notcoolfreda",
  linkedIn: "https://www.linkedin.com/in/fredachang",
  resume: "https://indd.adobe.com/view/d0703b50-a476-434b-9600-488f4d306380",
};
