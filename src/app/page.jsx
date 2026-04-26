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
      {/* ── Left: Content ── */}
      <div className={styles.item}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Now live — explore our latest stories
        </div>

        {/* Heading */}
        <h1 className={styles.title}>
          Redefining the{" "}
          <span className={styles.titleGradient}>Digital Narrative</span>
        </h1>

        {/* Description */}
        <p className={styles.desc}>
          Turning visionary ideas into world-class digital realities. We combine
          high-end design with cutting-edge engineering to build products that
          resonate and inspire.
        </p>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>120+</span>
            <span className={styles.statLabel}>Articles</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Projects</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>10K+</span>
            <span className={styles.statLabel}>Readers</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={styles.actions}>
          <Button url="/portfolio" text="Explore Portfolio" />
          <Button url="/blog" text="Read Stories" />
        </div>
      </div>

      {/* ── Right: Image (hidden on mobile) ── */}
      <div className={styles.imageItem}>
        <div className={styles.imageWrapper}>
          {/* Floating decorative chips */}
          <div className={styles.floatCard + " " + styles.floatCard1}>
            ✍️ New article published
          </div>
          <div className={styles.floatCard + " " + styles.floatCard2}>
            🚀 10K+ monthly readers
          </div>

          <Image
            src="/hero.png"
            alt="Dashify Hero"
            className={styles.img}
            width={600}
            height={460}
            priority
          />
        </div>
      </div>
    </div>
  );
}
