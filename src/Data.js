import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaFigma,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPython,
  FaDatabase,
  FaVuejs,
} from "react-icons/fa";
import { DiJavascript1, DiNodejs, DiPostgresql } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import { TbBrandDocker } from "react-icons/tb";
import portfolio from "./assets/portfolio.jpg";
import shoretrade from "./assets/shoretrade.png";
import chat from "./assets/chat.png";
import martec from "./assets/martec.png";
import facebook from "./assets/facebook.png";
import gmail from "./assets/gmail.png";
import dashboard from "./assets/dashboard.png";
import splitshare from "./assets/splitshare.png";
import langara from "./assets/langara.png";
import sprout from "./assets/sprout.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  { faIcon: <FaInstagram />, url: "https://www.instagram.com/cosiocosh/" },
  {
    faIcon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/don-apollo-cosio-0a41b296/",
  },
  { faIcon: <FaGithub />, url: "https://github.com/dacosio" },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Don Cosio",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+16723380294",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "dacosio@gmail.com",
  },
];

export const icons = [
  <DiJavascript1 />,
  <SiTypescript />,
  <FaReact />,
  <DiNodejs />,
  <FaPython />,
  <FaVuejs />,
  <TbBrandDocker />,
  <DiPostgresql />,
];

export const experiences = [
  {
    id: 1,
    year: "2021-2023",
    position: "Consulting Engineer (Fullstack Developer)",
    company: "Cisco Systems",
  },
  {
    di: 2,
    year: "2020-2021",
    position: "Software Developer",
    company: "Station Five",
  },
  {
    di: 2,
    year: "2016-2019",
    position: "Department Manager / Telecommunication Network Designer",
    company: "MVP Asia Pacific Incorporated",
  },
];
export const finishes = [
  {
    id: 1,
    number: "3+",
    itemName: "Years Of Experience",
  },
];
export const workImages = [
  {
    id: 1,
    img: splitshare,
    repo: "https://github.com/dacosio/integrated-project",
    url: "https://splitshare-integrated.vercel.app/",
  },
  {
    id: 2,
    img: dashboard,
    repo: "https://github.com/dacosio/portfolio-admin-dashboard",
    url: "https://portfolio-admin-dashboard-4m9z-38f64g2en-dacosio.vercel.app/dashboard",
  },
  {
    id: 3,
    img: shoretrade,
    name: "project 1",
    repo: null,
    url: "https://www.shoretrade.com/seller",
  },
  {
    id: 4,
    img: martec,
    repo: null,
    url: "https://www.themartec.com/",
  },
  {
    id: 5,
    img: langara,
    repo: null,
    url: "https://langara-app-nextjs.vercel.app/",
  },
  {
    id: 6,
    img: sprout,
    repo: "https://github.com/dacosio/project-2.git",
    url: "https://project-2-app.vercel.app/",
  },
];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "62a Avenue, Surrey, British Columbia",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "dacosio@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+1 (672) 338-0294",
  },
];
