import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            We are a team of passionate designers, developers, and storytellers
            dedicated to creating meaningful digital experiences. Our mission is
            to bridge creativity with technology—crafting solutions that are not
            only visually stunning but also impactful and user-friendly.
            <br />
            <br />
            From startups to established enterprises, we have collaborated with
            clients across industries, bringing unique visions to life with
            precision, innovation, and excellence.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            We specialize in building engaging digital products that empower
            businesses and delight users. Our expertise includes:
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>

          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
