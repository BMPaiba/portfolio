import React, { useState } from "react";
import styles from "./Project.module.css";
import rickMortyImg from "../../assets/rickmorty.jpg";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import countries from "../../assets/pi-countries.png";
import charlie from "../../assets/charlie-img.png";
import { FaArrowsRotate } from "react-icons/fa6";
import { MdOutlinePlayCircle } from "react-icons/md";

export default function Project() {
  const url_countries = "https://countries-wzre.onrender.com/";
  const repo_countries = "https://github.com/BMPaiba/PI-Countries-";
  const repo_rickmorty = "https://github.com/BMPaiba/rick-and-morty-ft45a";

  const descriptions = {
    rickmorty:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, provident tenetur corporis sit explicabo veritatis distinctio, dolor sint nulla error est eligendi odio asperiores quam! Quod ea earum atque deleniti!",
    countries:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, provident tenetur corporis sit explicabo veritatis distinctio, dolor sint nulla error est eligendi odio asperiores quam! Quod ea earum atque deleniti!",
    marketplace:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, provident tenetur corporis sit explicabo veritatis distinctio, dolor sint nulla error est eligendi odio asperiores quam! Quod ea earum atque deleniti!",
  };

  const [isFlipped, setIsFlipped] = useState({
    rickmorty: false,
    countries: false,
    marketplace: false,
  });

  const handleFlip = (project) => {
    setIsFlipped((prevState) => {
      const newState = {};
      Object.keys(prevState).forEach((key) => {
        newState[key] = key === project ? !prevState[key] : false;
      });
      return newState;
    });
  };

  const handleClick = (linkedInUrl) => {
    window.open(linkedInUrl, "_blank");
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Proyectos</h2>
        <div className={styles.project}>
          <div className={styles.project_itemI}>
            {isFlipped["rickmorty"] ? (
              <div>
                <p className={styles.project_itemI_description}>
                  {descriptions["rickmorty"]}
                </p>
              </div>
            ) : (
              <div>
                <img src={rickMortyImg} alt="" />
              </div>
            )}
            <h4
              className={
                !isFlipped["rickmorty"]
                  ? `${styles.imgActive}`
                  : `${styles.imgDisactive}`
              }
            >
              Rick & Morty
            </h4>

            <div className={styles.project_itemI_buttons}>
              <button onClick={() => handleClick(repo_rickmorty)}>
                <FaGithub />
              </button>
              <button
                onClick={() => handleFlip("rickmorty")}
                className={styles.button_reverse}
              >
                <FaArrowsRotate />
              </button>
              <button onClick={() => handleClick(url_countries)}>
                <FaExternalLinkAlt />
              </button>
            </div>
          </div>

          <div className={styles.project_itemII}>
            {isFlipped["countries"] ? (
              <div>
                <p className={styles.project_itemI_description}>
                  {descriptions["countries"]}
                </p>
              </div>
            ) : (
              <div>
                <img src={countries} alt="" />
              </div>
            )}

            <h4
              className={
                !isFlipped["countries"]
                  ? `${styles.imgActive}`
                  : `${styles.imgDisactive}`
              }
            >
              Proyecto de Bootcamp
            </h4>
            <div className={styles.project_itemII_buttons}>
              <button onClick={() => handleClick(repo_countries)}>
                <FaGithub />
              </button>
              <button onClick={() => handleFlip("countries")}>
                <FaArrowsRotate />
              </button>
              <button onClick={() => handleClick(url_countries)}>
                <FaExternalLinkAlt />
              </button>
            </div>
          </div>
          <div className={styles.project_itemIII}>
            {isFlipped["marketplace"] ? (
              <div>
                <p className={styles.project_itemI_description}>
                  {descriptions["marketplace"]}
                </p>
              </div>
            ) : (
              <div>
                <img src={countries} alt="" />
              </div>
            )}
            <h4
              className={
                !isFlipped["marketplace"]
                  ? `${styles.imgActive}`
                  : `${styles.imgDisactive}`
              }
            >
              Marketplace
            </h4>
          </div>
          <div className={styles.project_itemIV}></div>
          <div className={styles.project_itemII_buttons}>
            <button>
              <MdOutlinePlayCircle />
            </button>
            <button onClick={() => handleFlip("marketplace")}>
              <FaArrowsRotate />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.mobile}>
        <h2>Proyectos Recientes</h2>
        <div className={styles.projectI}>
          <img src={charlie} alt="" />
          <div className={styles.projectI_description}>
            <h3>Charlie App</h3>
            <p>{descriptions["rickmorty"]}</p>
            <div className={styles.projectI_description_buttons}>
              <MdOutlinePlayCircle
                className={styles.projectI_description_buttons_icon_play}
              />
            </div>
          </div>
        </div>

        

        <div className={styles.projectI}>
          <img src={countries} alt="" />
          <div className={styles.projectI_description}>
            <h3>Proyecto de Bootcamp</h3>
            <p>{descriptions["countries"]}</p>
            <div className={styles.projectI_description_buttons}>
              <FaGithub className={styles.projectI_description_buttons_icon} />
              <FaExternalLinkAlt
                className={styles.projectI_description_buttons_icon}
              />
            </div>
          </div>
        </div>
              
        <div className={styles.projectI}>
          <img src={rickMortyImg} alt="" />
          <div className={styles.projectI_description}>
            <h3>Rick & Morty App</h3>
            <p>{descriptions["rickmorty"]}</p>
            <div className={styles.projectI_description_buttons}>
              <FaGithub className={styles.projectI_description_buttons_icon} />
              <FaExternalLinkAlt
                className={styles.projectI_description_buttons_icon}
              />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
