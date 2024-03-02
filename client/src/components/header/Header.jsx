import React from "react";
import logo from "../../assets/logo.png";
import foto from "../../assets/foto-perfil.png";
import { FaBars } from "react-icons/fa";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="home" />
      <FaBars className={styles.bars} />
    </div>
  );
}
