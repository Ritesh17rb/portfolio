import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}

        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                I'm in 3rd year,pursuing Computer Science and Engineering from National Institute of Technology Jamshedpur.

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Hackathon</h3>
              <p>
                I have been Regionalist in GFGxGoogle Solving for India Hackathon & Semi-Finalist in Flipkart Grid 5.0

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Skills</h3>
              <p>
                I'm good in problem Solving and have good knowledge of Data Structures and Algorithms
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
