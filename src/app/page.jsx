import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Dashify – Crafting Stories & Digital Excellence",
  description:
    "Explore the intersection of technology and storytelling. Dashify is a premium platform for sharing insights, showcasing projects, and building the future of digital experiences.",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Redefining the Digital Narrative
        </h1>
        <p className={styles.desc}>
          Turning visionary ideas into world-class digital realities. We combine high-end design with cutting-edge engineering to build products that resonate and inspire.
        </p>
        <div className={styles.actions}>
          <Button url="/portfolio" text="Explore Portfolio" />
          <Button url="/blog" text="Read Stories" />
        </div>
      </div>
      <div className={styles.item}>
        <Image
          src="/hero.png"
          alt="Dashify Hero"
          className={styles.img}
          width={600}
          height={400}
          priority
        />
      </div>
    </div>
  );
}
