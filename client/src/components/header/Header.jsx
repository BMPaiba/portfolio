import React, { useState } from "react";
import logo from "../../assets/logo.png";
import foto from "../../assets/foto-perfil.png";
import { FaBars } from "react-icons/fa";
import styles from "./Header.module.css";
import "./Header.module.css";
import { TfiMenu } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useTheme } from "../themeContext/ThemeContext";

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <>
      <header
        className={`${styles.header_menu} ${darkMode ? styles.dark : ""}`}
      >
        <div className={styles.barras}>
          <img src={logo} alt="" />
          <button onClick={toggleDarkMode} className={styles.btnmenu}>
            {darkMode ? <MdOutlineDarkMode /> : <CiLight />}
          </button>
          {menuAbierto ? (
            <button onClick={toggleMenu} className={styles.btnmenu} id="x">
              <GrClose />
            </button>
          ) : (
            <button onClick={toggleMenu} className={styles.btnmenu} id="x">
              <TfiMenu />
            </button>
          )}
        </div>
        <nav
          className={`${styles.desplegable} ${
            menuAbierto ? styles.abrir_menu : ""
          }`}
          id="menu"
        >
          <img src={logo} className={styles.logo} alt="" />
          <ul>
            <li>
              <a href="#about">Sobre mí</a>
            </li>
            <li>
              <a href="#project">Proyectos</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
