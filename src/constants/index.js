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
    mongodb,
    git,
    figma,
    docker,
    ilp,
    hoopla,
    ministry,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Performance Tester",
    icon: backend,
  },
  {
    title: "Project Manager",
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
      name: "React JS",
      icon: reactjs,
    },
    
   
    {
      name: "Node JS",
      icon: nodejs,
    },
    
    
    {
      name: "git",
      icon: git,
    },
    
    {
      name: "docker",
      icon: docker,
    }, 
  ];
  
  const experiences = [
    {
      title: "Event Manager",
      company_name: "Hoopla Club",
      icon: hoopla,
      iconBg: "#fff",
      date: "June 2019 - July 2019",
      points: [
        "Orchestrated a comprehensive mental health awareness campaign at school, employing research, community outreach, and team building to gather resources and raise awareness on mental health. ",
        "Demonstrated strong leadership skills, effectively managing a team of three through role allocation, task delegation, clear communication, and scheduled review sessions, ensuring structured collaboration and timely task completion ",
        "Facilitated impactful activities with students and teachers, highlighting the impact of mental health on students, thereby increasing awareness among students and parents. ",
        "Received positive feedback from parents and stakeholders, and the success of the campaign led to a collaborative agreement between the school and the Hoopla Club for future mental health awareness workshops, emphasizing the significance of the initiative and its potential for ongoing impact. ",
      ],
    },
    {
      title: "Mathematics Content Lead and Project Manager",
      company_name: "India Literacy Project",
      icon: ilp,
      iconBg: "#fff",
      date: "May 2022 - June 2022",
      points: [
        "Employed instructional design principles to create engaging and tailored interactive activities and worksheets aligned with students’ learning styles and individual needs, leading to enhanced knowledge retention and positive student feedback. ",
        "Facilitated effective collaboration within the team by coordinating and scheduling meetings, ensuring regular communication, and actively reviewing project progress. This collaborative approach streamlined task completion, resulting in improved efficiency and timely project delivery."
        
      ],
    },
    {
      title: "Automation Developer",
      company_name: "Ministry of Public and Business Service Delivery of Ontario",
      icon: ministry,
      iconBg: "#fff",
      date: "Jan 2023 - Present",
      points: [
        "Streamlined server decommissioning tasks through PowerShell automation, resulting in substantial time savings and enhanced productivity. ",
        "Developed a Power BI tool by seamlessly integrating server data using Power Query, enabling comprehensive monitoring of storage, utilization, and availability according to the organization’s server infrastructure. ",
        "Conducted meticulous load testing for esteemed applications, including FCMS-FRO, SAMS, HCD-ISCIS, Justice Centre Systems Portal, and EDU, facilitating pre-production testing and empowering data-driven decision making. ",
        "Demonstrated proficiency in Linux server administration, leveraging automation to establish a seamless ticket forwarding system that prioritizes and expedites high-priority tickets between tools, ensuring efficient incident resolution and optimized workflow management.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "Identifies what needs to be done and does it proactively and seeks out and takes on additional duties and assignments. Shows innovation and creativity when seeking new skills.",
      name: "Bounmay Chang",
      designation: "Senior Software Analyst",
      company: "Government of Ontario",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },

    {
      testimonial:
        "We had a great experience with her. She has excellent technical and communication skills. She supported PowerBI Dashboards, VuGen scripting for automated load testing of applications, general purpose automation and integration scripts using PowerShell and demonstrating the work using PowerPoint slide decks. She will be an asset to any organization.",
      name: "Mohammad Nadeem",
      designation: "Manager, Management and Monitoring Tools Team",
      company: "Government of Ontario",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    
    
  ];
  
  const projects = [
    {
      name: "Car Rent",
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
      name: "Job IT",
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
      name: "Trip Guide",
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