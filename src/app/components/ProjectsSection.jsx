"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 8,
    title: "Shipping website",
    description: "",
    image: "./images/projects/prevailshipping.png",
    tag: ["All", "Web"],
    previewUrl: "https://prevailshipping.com",
  },
     {
    id: 12,
    title: "React Profile",
    description: "",
    image: "./images/projects/haleefa.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.haleefaelitehomes.com/",
  },
    {
    id: 9,
    title: "TAP website",
    description: "",
    image: "./images/projects/tap.png",
    tag: ["All", "Web"],
    previewUrl: "https://talkandpay.com",
  },
    {
    id: 10,
    title: "Real estate",
    description: "",
    image: "./images/projects/capitalstay.png",
    tag: ["All", "Web"],
    previewUrl: "https://capitalstayuae.com",
  },
     {
    id: 13,
    title: "Dilex shipping",
    description: "",
    image: "./images/projects/dilex.png",
    tag: ["All", "Web"],
    previewUrl: "https://dilexfreight.com/",
  },
      {
    id: 11,
    title: "Breathtakingkeeps Vacations",
    description: "",
    image: "./images/projects/breathtakingkeeps.png",
    tag: ["All", "Web"],
    previewUrl: "https://breathtakingkeeps.site/",
  },
  {
    id: 1,
    title: "Management system",
    description: "Laravel project",
    image: "./images/projects/1.png",
    tag: ["All", "Web"],
    previewUrl: "",
  },
  {
    id: 2,
    title: "Lodge Website",
    description: "react with Laravel backend ",
    image: "./images/projects/2.png",
    tag: ["All", "Web"],
    previewUrl: "",
  },
  {
    id: 3,
    title: "Church  Website",
    description: "React project",
    image: "./images/projects/3.png",
    tag: ["All", "Web"],
    previewUrl: " ",
  },
  {
    id: 4,
    title: "Hymn Book Application",
    description: "Flutter Application",
    image: "./images/projects/mobile1.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Ashwin2926/hymn-book",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Kiosk App",
    description: "",
    image: "./images/projects/kiosk.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://kiosk.talkandpay.com/",
  },
  {
    id: 6,
    title: "Management system",
    description: "Laravel",
    image: "./images/projects/6.png",
    tag: ["All", "Web"],
    previewUrl: "",
  },
  {
    id: 7,
    title: "Ecommerce Shoe-Shop",
    description: "Authentication and product viewing(PHP<HTML,CSS)",
    image: "./images/projects/7.png",
    tag: ["All", "Web"],
    previewUrl: "",
  },
    
  
  

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-black mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-black flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>   
        ))}
       
      </ul>
    </section>
  );
};

export default ProjectsSection;
