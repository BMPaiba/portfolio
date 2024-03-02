import React from "react";
import styles from "./Project.module.css";
import rickMortyImg from "../../assets/rickmorty.jpg";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import countries from "../../assets/pi-countries.png";
import { FaArrowsRotate } from "react-icons/fa6";
import { MdOutlinePlayCircle } from "react-icons/md";

export default function Project() {
  
  return (
    <>
      <div className={styles.project}>
        <div className={styles.project_itemI}>
          <img src={rickMortyImg} alt="" />
          <h4>Rick & Morty</h4>
          <div className={styles.project_itemI_buttons}>
          <button >
            <FaGithub />
          </button>
          <button >
            <FaArrowsRotate  />
          </button>
          <button  >
            <FaExternalLinkAlt />
          </button>
          </div>
        </div>
        <div className={styles.project_itemII}>
          <img src={countries} alt="" />
          <h4>Proyecto de Bootcamp</h4>
          <div className={styles.project_itemII_buttons}>
          <button >
            <FaGithub />
          </button>
          <button >
            <FaArrowsRotate  />
          </button>
          <button  >
            <FaExternalLinkAlt />
          </button>
          </div>
        </div>
        <div className={styles.project_itemIII}>
          <img src={countries} alt="" />
          <h4>Marketplace</h4>
        </div>
        <div className={styles.project_itemIV}></div>
        <div className={styles.project_itemII_buttons}>
          <button >
            <MdOutlinePlayCircle />
          </button>
          <button  >
            <FaArrowsRotate />
          </button>
          </div>
      </div>
    </>
  );
}
