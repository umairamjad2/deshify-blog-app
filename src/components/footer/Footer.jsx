import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <div>© {currentYear} Lamamia. All rights reserved.</div>
      <div>
        <div className={styles.social}>
          <Image
            src="/1.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Lama dev Facebook Account"
          />
          <Image
            src="/2.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Lama dev Instagram Account"
          />
          <Image
            src="/3.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Lama dev Tweeter Account"
          />
          <Image
            src="/4.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Lama dev Youtube Account"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
