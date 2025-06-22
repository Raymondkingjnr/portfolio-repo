import {
  JavascriptIcon,
  NextjsIcon,
  PythonIcon,
  ReactIcon,
  ReduxIcon,
  SanityIcon,
  SassIcon,
  TailwindIcon,
  TypescriptIcon,
  GitIcon,
} from "@/assets/icons/skills-icon";
import {
  aiImg,
  annasimg,
  bank,
  healthpal,
  hotel,
  movie,
  // sportify,
  weather_app,
} from "@/assets/images";

export const skillsData = [
  {
    title: "Javascript",
    img: <JavascriptIcon />,
  },
  {
    title: "Typescript",
    img: <TypescriptIcon />,
  },
  {
    title: "Python",
    img: <PythonIcon />,
  },
  {
    title: "Reactjs",
    img: <ReactIcon />,
  },
  {
    title: "Nextjs",
    img: <NextjsIcon />,
  },
  {
    title: "Git",
    img: <GitIcon />,
  },
  {
    title: "Redux",
    img: <ReduxIcon />,
  },
  {
    title: "Tailwind",
    img: <TailwindIcon />,
  },
  {
    title: "Sass",
    img: <SassIcon />,
  },
  {
    title: "Sanity",
    img: <SanityIcon />,
  },
];

export const projectsData = [
  {
    gitLink: "https://github.com/Raymondkingjnr/Netflix-clone",
    url: "https://netflix-clone-drab-omega.vercel.app/",
    title: "view Hubs",
    img: movie,
    stacks: ["React", "Redux", "Firebase"],
    des: [
      "View Hubs is a netflix website clone where users can can browser through movies and series.",
    ],
  },
  {
    gitLink: "https://github.com/Raymondkingjnr/Netflix-clone",
    url: "https://annas-secrets.vercel.app/",
    title: "Annas secrets",
    img: annasimg,
    stacks: ["Nextjs", "Sanity", "Paystack"],
    des: [
      "Explore a curated selection of premium supplements and wellness products designed to elevate your mind, body, and spirit.",
    ],
  },
  {
    gitLink: "https://github.com/Raymondkingjnr/dashboard",
    url: "https://qbdashboard.vercel.app/",
    title: "bankdash dashbord",
    img: bank,
    stacks: ["Nextjs", "Tailwindcss", "Typescript", "Shade cn"],
    des: " A visually rich and responsive dashboard interface for tracking financial data. ",
  },
  {
    gitLink: "https://github.com/Raymondkingjnr/weather-app",
    url: "https://weather-mini-app-18.vercel.app/",
    title: "weather wepapp",
    img: weather_app,
    stacks: [
      "React 19",
      "styled-component",
      "Typescript",
      "Leaflet & Open Meteo API",
    ],
    des: " A mini weather app that displays the for a list of cities that are on the map. ",
  },

  // {
  //   gitLink: "https://github.com/Raymondkingjnr/artist-profile-",
  //   url: "https://tuneinbio.vercel.app/",
  //   title: "Tune In Bio",
  //   img: sportify,
  //   stacks: ["React", "Javascript", "Tailwindcss", "Spoitfy API"],
  //   des: "A website that allows user to search any of their favorite artists that are avaliable on sportify they can also see the artist albums and top tracks",
  // },
  {
    gitLink: "https://github.com/Raymondkingjnr/hotel-managment",
    url: "https://hotel-managment-three.vercel.app/",
    title: "Fabs Palace",
    img: hotel,
    stacks: ["Nextjs", "Tailwindcss", "Typescript", "Sanity", "Stripe"],
    des: " a hotel management platform, designed to streamline operations for hotels. It include features such as room booking, guest management, billing, and other administrative tools....",
  },
  {
    gitLink: "https://github.com/Raymondkingjnr/ai-nexus",
    url: "https://ainexus-xi.vercel.app/",
    title: "AI Nexus",
    img: aiImg,
    stacks: ["Nextjs", "Tailwindcss", "Typescript", "Sanity"],
    des: "A blog website where AI related technologies can be read particularly AI technologies that developers can use to speed up productivity",
  },
];

export const mobileApps = [
  {
    gitLink: "https://github.com/Raymondkingjnr/healthpal",
    url: "/",
    title: "HealthPal",
    img: healthpal,
    stacks: ["Expo", "Typescript", "Supabase"],
    des: "Healthpal is an online medical app ",
  },
];
