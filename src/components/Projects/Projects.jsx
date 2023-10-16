import React, { useState, useEffect } from "react";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  const updateVisibleCount = () => {
    if (window.innerWidth <= 900) {
      setVisibleCount(1);
    } else if (window.innerWidth <= 1686) {
      setVisibleCount(2);
    } else {
      setVisibleCount(4);
    }
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const getVisibleProjectIndices = (currentIndex) => {
    const totalProjects = projects.length;
    return Array.from(
      { length: visibleCount },
      (_, i) => (currentIndex + i) % totalProjects
    );
  };

  const visibleProjectIndices = getVisibleProjectIndices(currentIndex);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Proyectos</h2>
      <p className={styles.description}>
        Todos los proyectos desarrollados con Spring en este portfolio están
        dockerizados. Cada proyecto incluye su respectivo Dockerfile y
        configuración Docker Compose, facilitando así su despliegue y gestión.
        Además, en casos pertinentes, se proporciona una colección Postman para
        facilitar las pruebas de API.
      </p>
      <div className={styles.projects}>
        <button onClick={prevProject} className={styles.arrow}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6L9 12L15 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {visibleProjectIndices.map((index) => (
          <ProjectCard key={index} project={projects[index]} />
        ))}
        <button onClick={nextProject} className={styles.arrow}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

