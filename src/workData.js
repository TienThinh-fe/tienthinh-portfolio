import ECommerceScreen from "./assets/e-commerce-screen.webp";
import PeeendCom from "./assets/peeend-com.webp";
import Readit from "./assets/readit.webp";
import FeMentor from "./assets/fe-mentor.webp";

const workData = [
  {
    id: 1,
    title: "CRWN Clothing",
    github: "https://github.com/TienThinh-fe/crwn-clothing-react",
    live: "https://crwn-golive.herokuapp.com/",
    techStack: "React, Redux, Firebase, Stripe, Heroku",
    image: ECommerceScreen,
    description:
      "A full-stack e-commerce site. With completed functions such as authentication, and payment.",
  },
  {
    id: 2,
    title: "peeend.com",
    github: "https://github.com/TienThinh-fe/peeend.com",
    live: "https://peeend.vercel.app/",
    techStack: "React, Zustand, React-Webcam, Gsap, TensorflowJS",
    image: PeeendCom,
    description:
      "A simple web app that has Pomodoro countdown timer, and a AI model for detecting yoga pose in break time.",
  },
  {
    id: 3,
    title: "readit",
    github: [
      "https://github.com/TienThinh-fe/readit-client",
      "https://github.com/TienThinh-fe/readit-server",
    ],
    live: "",
    techStack: "Vue 3, Vuex, Firebase, .NET 6",
    image: Readit,
    description:
      "A full-stack web app that allows users to convert a image to text, and save it to their account.",
  },
  {
    id: 4,
    title: "Frontendmentor.io challenges",
    github: [
      "https://github.com/TienThinh-fe/rock-paper-scissors",
      "https://github.com/TienThinh-fe/e-commerce-product-page.git",
      "https://github.com/TienThinh-fe/rest-countries-app",
    ],
    live: "https://www.frontendmentor.io/profile/TienThinh-fe/solutions",
    techStack: "React, React Query, Typescript, Zustand, GSAP",
    image: FeMentor,
    description:
      "A collection of challenges from frontendmentor.io to help improve fetch API, JS logic, and responsive design.",
  },
];

export default workData;
