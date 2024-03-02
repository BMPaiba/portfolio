import React, { useState } from "react";
import styles from "./Home.module.css";
import logo from "../../assets/logo.png";
import foto from "../../assets/foto-perfil.png";
import { FaBars } from "react-icons/fa";
import { BiCopy } from "react-icons/bi";
import ContactForm from "../contactForm/ContactForm";
import Project from "../project/Project";
import Skills from "../skill/Skills";
import About from "../about/About";
import Header from "../header/Header";
export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <About />
      </div>
      <div className={styles.project}>
        <Project />
      </div>
      <div className={styles.skills}>
        <Skills />
      </div>
      <div className={styles.contact}>
        <ContactForm />
      </div>
    
     
    </>
  );
}
