import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";


export const metadata = {
  title: "Deshify – Explore Blogs & Inspire Minds",
  description:
    "Welcome to Deshify, a modern blogging platform to share stories, ideas, and knowledge with the world.",
};
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />  
      </div>
      <div className={styles.item}>
        <Image
          src="/hero.png"
          alt="Hero banner"
          className={styles.img}
          width={600}
          height={400}
        />
      </div>
    </div>
  );
}
