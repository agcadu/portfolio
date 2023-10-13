import React from "react";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export const Projects = () => {
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
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
