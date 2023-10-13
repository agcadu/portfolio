import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre mí</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend developer</h3>
              <p>
              En el backend, me especializo en desarrollar y optimizar APIs REST con Spring Boot, Security y Batch, favoreciendo la arquitectura de microservicios para una gestión, desacoplamiento y escalabilidad eficaces. También tengo experiencia en integrar proyectos Spring con tecnologías como GraphQL, Keycloak, servicios de envío de emails, cliente SOAP y Kafka, fortaleciendo la comunicación entre servicios y la seguridad.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend developer</h3>
              <p>
              En el frontend, tengo competencia en HTML, CSS, y JavaScript, con un enfoque particular en el desarrollo de aplicaciones web y móvil utilizando React, React Native y Expo, proporcionando interfaces de usuario intuitivas y responsivas.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
