"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="Contact us"
            fill={true}
            className={styles.image}
          />
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Name" className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Email Address" className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <textarea
                className={styles.textArea}
                placeholder="How can we help you?"
                rows="6"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
