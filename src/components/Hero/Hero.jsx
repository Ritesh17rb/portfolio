import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ritesh</h1>
        <p className={styles.description}>
         I'm a full-stack developer and an enthusiastic Computer Science undergrad, driven by a passion for creating innovative tech solutions
        </p>
        <a href="mailto:ritesh17lifeamazing.com" className={styles.contactBtn}>
          Contact Me
        </a>

      </div>


      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
