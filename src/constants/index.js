import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    wordpress,
    docker,
    ct,
    mediapulse,
    prodes,
    anizero,
    carrent,
    jobit,
    tripguide,
    threejs,
    chris,
    mikan,
    thijs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Entrepeneur",
      icon: backend,
    },
    {
      title: "Tech Support",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "wordpress",
      icon: wordpress,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Intern React Native Developer",
      company_name: "Mediapulse",
      icon: mediapulse,
      iconBg: "#383E56",
      date: "November 2018 - January 2019",
      points: [
        "Learning & developing a web application using React.js.",
        "Working with the lead developer and investors.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating hackathons and project functionalities",
      ],
    },
    {
      title: "Co-owner",
      company_name: "Anizero",
      icon: anizero,
      iconBg: "#404040",
      date: "March 2019 - Present",
      points: [
        "Front-office: customer service & sales of product. ",
        "Back-office: human resources, technical developer & development, operational manager ",
        "Investor and the main contact of the company",
      ],
    },
    {
      title: "WordPress Developer & Tech Support",
      company_name: "Prodes",
      icon: prodes,
      iconBg: "#E6DEDD",
      date: "July 2020 - March 2021",
      points: [
        "Solving problems such as website (re)styling, down or hacked",
        "Further developments of existing or new projects",
        "Deploying and maintaining finished projects",
        "Collaborating closely with clients to support or update them about the project",
      ],
    },
    {
      title: "Freelance developer",
      company_name: "",
      icon: ct,
      iconBg: "#383E56",
      date: "September 2021 - Present",
      points: [
        "Developing and assisting on website/application mostly front-end related.",
        "Active participating in problem and solution finding of the project",
        "Advising and providing constructive feedback to other developers",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Christian is a hardworking developer that has the protential to create great work.",
      name: "Mikan Simonis",
      designation: "Co-Owner",
      company: "Blayce.nl",
      image: mikan,
    },
    {
      testimonial:
        "Really nice collaboration with Christian. He keeps his promises and works accurately.",
      name: "Thijs Roelofse",
      designation: "Owner",
      company: "Maatweb.nl",
      image: thijs,
    },
    {
      testimonial:
        "Finding opportunities is Christians strong suit, he is a responsible reliable professional.",
      name: "Chris Beljaars",
      designation: "CTO",
      company: "Underdogs",
      image: chris,
    },
  ];
  
  const projects = [
    {
      name: "Car Rent (Dummy Data)",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT  (Dummy Data)",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide  (Dummy Data)",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };