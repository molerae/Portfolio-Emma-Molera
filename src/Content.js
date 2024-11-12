// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Emma Molera",
    firstName: "EMMA",
    LastName: "MOLERA",
    btnText: "Portfolio",
    image: Hero_person,
    hero_content: [
      {
        count: "A5",
        text: "Fifth year in engineering school at ESILV",
      },
      {
        count: "IFT",
        text: "Creative Technology Student at the Institute for Future Technologies",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Project management",
        para: "During my studies and professional experiences",
        logo: figma,
        details: [
          "Planning and overseeing projects from inception to completion",
          "Ensuring projects are completed on time and within budget",
          "Coordinating with team members and stakeholders",
        ],
      },
      {
        name: "Creativity and innovation",
        para: "During my studies and professional experiences",
        logo: nodejs,
        details: [
          "Developing new concepts",
          "Prototyping and experimentation",
          "Implementation of low-tech initiatives",
        ],
      },
      {
        name: "Thoroughness and organization",
        para: "During my studies and professional experiences",
        logo: ps,
        details: [
          "Prioritizing tasks",
          "Respecting deadlines",
          "Reliability in project execution",
        ],
      },
      {
        name: "Analytical skills",
        para: "During my studies and professional experiences",
        logo: reactjs,
        details: [
          "Problem solving",
          "Information gathering",
          "Continuous improvement",
        ],
      },
      {
        name: "Interpersonal skills",
        para: "During my studies and professional experiences",
        logo: sketch,
        details: [
          "Teamwork and collaboration through various group projects",
          "Communication and active listening",
          "Ability to build personal and work relationships, e.g. developing close relationships with customers to understand their expectations",
        ],
      },
      {
        name: "Commitment to sustainable development",
        para: "During my studies and professional experiences",
        logo: python,
        details: [
          "Creating sustainable solutions, such as the mycelium leather glove project",
          "Promoting ethical and ecological values",
          "Designing eco-responsible products",
        ],
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "My Projects",
    subtitle: "WHAT I DID",
    service_content: [
      {
        title: "The bio-based leather glove",
        para: "A new project based on Mycelium cultivation techniques, obtain a leather skin to create a functional and aesthetic object like a glove. ",
        logo: services_logo1,
        width: "200px",
        height: "300px"
      },
      {
        title: "POGODO : The Quickstarter project",
        para: "A leather bag for your water bottle or glass, so you can stay hydrated at all times without being burdened.",
        logo: services_logo2,
        width: "300px",
        height: "300px"
      },
      {
        title: "The modular green wall",
        para: "A carefully designed structure of interconnected rectangular modules and a modular design allowing flexibility in location, rotation and custom design.",
        logo: services_logo3,
        width: "200px",
        height: "300px"
      },
    ],
  },
 
  Testimonials: {
    title: "Experiences",
    subtitle: "WHAT I LEARNED",
    testimonials_content: [
      {
        review:
          "“Identify market opportunities and coordinate actions between technical and sales teams to optimize customer satisfaction”",
        img: avatar1,
        name: "Business Engineer Internship - April to July 2024",
      },
      {
        review:
          "“Men's and Women's Purchasing Management Department: Participation in product performance analysis and warehouse stock balancing”",
        img: avatar2,
        name: "Operational internship - June to August 2022",
      },
      {
        review:
          "“Waitress in a restaurant while studying: Provide quality service, contributing to customer satisfaction and loyalty in a dynamic environment”",
        img: avatar3,
        name: "Waitress - June 2023 to June 2024",
      },
      {
        review:
          "“Support students at different levels to strengthen their understanding of mathematical concepts, improve their academic performance and develop their confidence in their abilities”",
        img: avatar4,
        name: "Mathematics tutor - September 2021 to September 2023",
      },
    ],
  },
 
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "emma.molera@edu.devinci.fr",
        icon: GrMail,
        link: "https://www.linkedin.com/in/emma-molera-831960205/?originalSubdomain=fr",
      },
      {
        text: "+33 6 95 82 83 58",
        icon: MdCall,
        link: "https://wa.me/0695828358",
      },
      {
        text: "molerae",
        icon: BsInstagram,
        link: "https://www.instagram.com/molerae/",
      },
    ],
  },
  
};
