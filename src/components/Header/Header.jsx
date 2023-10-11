import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, me llamo Agustin</h1>
        <p className={styles.description}>
          Soy desarrollador full-stack, utilizo React para el front y Spring
          para el back
        </p>
        <a href="mailto:agcadu@gmail.com" className={styles.contactBtn}>Contactame</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Mi Imagen" className={styles.image}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </header>
  );
};
