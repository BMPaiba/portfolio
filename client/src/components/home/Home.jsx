import React  from "react";
import styles from "./Home.module.css";
import ContactForm from "../contactForm/ContactForm";
import Project from "../project/Project";
import Skills from "../skill/Skills";
import About from "../about/About";
import Header from "../header/Header";
export default function Home() {
  return (
    <div className={styles.container}>
      <div >
        <Header />
      </div>
      <div id="about" >
        <About />
      </div>
      <div className={styles.project} id="project">
        <Project />
      </div>
      <div className={styles.skills} id="skills">
        <Skills />
      </div>
      <div className={styles.contact} id="contact">
        <ContactForm />
      </div>
    </div>
  );
}
