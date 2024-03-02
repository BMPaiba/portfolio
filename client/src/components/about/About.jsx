import React from "react";
import styles from "./About.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function About() {
  const description =
    "¡Hola! Soy Brian, un apasionado desarrollador web con una sólida formación en tecnologías como JavaScript, React, Redux, Node.js, Express, Sequelize y PostgreSQL. Me destaco por mi enfoque centrado en la calidad y la eficiencia en cada proyecto en el que me involucro. Estoy siempre buscando nuevas oportunidades para aplicar y expandir mis habilidades en el desarrollo web. ";
  return (
    <>
      <div className={styles.about}>
        <h1>Brian Paiba</h1>
        <h3>fullstack developer</h3>
      </div>
      <div className={styles.about_me}>
        <p>{description}</p>
      </div>
      <div className={styles.about_links}>
        <button>Linkedin</button>
        <button>Github</button>
        <button>Ver CV</button>
      </div>
    </>
  );
}
