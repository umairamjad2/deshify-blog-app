import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          fill={true}
          alt="Our Team"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Visionaries</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting the future of digital interactions with precision.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Are</h1>
          <p className={styles.desc}>
            At Dashify, we are more than just a team of developers and designers. We are creators, thinkers, and problem solvers dedicated to pushing the boundaries of what's possible in the digital realm.
            <br />
            <br />
            Our philosophy is built on the belief that technology should be as beautiful as it is functional. We bridge the gap between complex engineering and intuitive design, creating products that leave a lasting impression.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Deliver</h1>
          <p className={styles.desc}>
            We specialize in end-to-end digital transformation, delivering premium solutions tailored to your unique vision. Our core expertise includes:
            <br />
            <br /> 
            • **Full-Stack Development**: Scalable, high-performance web and mobile applications built with the latest technologies.
            <br />
            • **Premium UI/UX Design**: Stunning, user-centric interfaces that drive engagement and tell your brand's story.
            <br />
            • **Digital Strategy**: Data-driven insights and strategic planning to help your business thrive in the modern landscape.
          </p>

          <Button url="/contact" text="Start a Conversation" />
        </div>
      </div>
    </div>
  );
};

export default About;
