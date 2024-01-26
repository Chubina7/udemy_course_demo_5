import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/Luka.jpg"
          alt="Image showing Luka"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, i'm Luka</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
        laudantium incidunt saepe!
      </p>
    </section>
  );
};

export default Hero;
