import React from "react";
import { FaReact } from "react-icons/fa";
import styles from "./Skills.module.css";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiSequelize } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className={`${styles.icon_html} ${styles.icon}`}  /> },
    { name: "CSS", icon: <FaCss3Alt className={`${styles.icon_css} ${styles.icon}`}  /> },
    { name: "JavaScript", icon: <SiJavascript className={`${styles.icon_js} ${styles.icon}`}  /> },
    { name: "React", icon: <FaReact className={`${styles.icon_react} ${styles.icon}`} /> },
    { name: "Redux", icon: <TbBrandRedux className={`${styles.icon_redux} ${styles.icon}`}  /> },
    { name: "Node", icon: <FaNodeJs className={`${styles.icon_node} ${styles.icon}`}  /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql className={`${styles.icon_postgreSQL} ${styles.icon}`}  /> },
    { name: "Sequelize", icon: <SiSequelize className={`${styles.icon_sequelize} ${styles.icon}`}  /> },
  ];

  return (
    <div className={styles.container}>
      <h2>Tech Skills</h2>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skill}>
            <h3>
              {skill.icon} {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
