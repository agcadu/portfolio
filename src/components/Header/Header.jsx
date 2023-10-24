import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, me llamo Agustín</h1>
        <p className={styles.description}>
        Soy un apasionado desarrollador, especializado en crear experiencias dinámicas con React en el frontend y desarrollar la lógica del negocio usando Spring en el backend.
        </p>
        <a href="AgustinCasaCV.pdf" className={styles.contactBtn} download>Currículum</a>
      </div>
      <img src={getImageUrl("header/Image.png")} alt="Mi Imagen" className={styles.image}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </header>
  );
};
