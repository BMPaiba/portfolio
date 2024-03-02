import React from "react";
import styles from "./About.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import CV from '../../assets/Brian-Paiba.pdf';

export default function About() {

    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = CV;
      link.download = 'Brian Paiba';
      link.click();
    };
  
  const description =
    "¡Hola! Soy Brian, un apasionado desarrollador web con una sólida formación en tecnologías como JavaScript, React, Redux, Node.js, Express, Sequelize y PostgreSQL. Me destaco por mi enfoque centrado en la calidad y la eficiencia en cada proyecto en el que me involucro. Estoy siempre buscando nuevas oportunidades para aplicar y expandir mis habilidades en el desarrollo web. ";

    const linkedIn = 'https://www.linkedin.com/in/brian-m-paiba/'
    const github = 'https://github.com/BMPaiba'

    const handleClick = (linkedInUrl) => {
      window.open(linkedInUrl, '_blank');
    };

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
        <button onClick={() => handleClick(linkedIn)}>Linkedin</button>
        <button onClick={() => handleClick(github)}>Github</button>
        <button onClick={handleDownload}>Descarga CV</button>
      </div>
    </>
  );
}
