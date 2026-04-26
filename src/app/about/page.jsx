import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "About – Dashify",
  description:
    "Learn about Dashify – a team of creators, engineers, and designers building world-class digital experiences.",
};

const skills = [
  { icon: "⚡", label: "Full-Stack Development" },
  { icon: "🎨", label: "Premium UI/UX Design" },
  { icon: "📊", label: "Digital Strategy" },
  { icon: "🚀", label: "Performance Engineering" },
];

const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "120+", label: "Projects Delivered" },
  { number: "10K+", label: "Happy Readers" },
  { number: "98%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <div className={styles.page}>
      {/* ── Hero Banner ── */}
      <div className={styles.hero}>
        <Image
          src="/about.png"
          fill
          alt="Our Team"
          className={styles.heroImg}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            Our Story
          </span>
          <h1 className={styles.heroTitle}>Digital Visionaries</h1>
          <p className={styles.heroSub}>
            Handcrafting the future of digital interactions with precision.
          </p>
        </div>
      </div>

      {/* ── Stats Row ── */}
      <div className={styles.statsRow}>
        {stats.map((s) => (
          <div key={s.label} className={styles.statCard}>
            <span className={styles.statNumber}>{s.number}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── Text Columns ── */}
      <div className={styles.textGrid}>
        {/* Who We Are */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Who We Are</h2>
          <p className={styles.cardDesc}>
            At Dashify, we are more than just a team of developers and
            designers. We are creators, thinkers, and problem solvers dedicated
            to pushing the boundaries of what's possible in the digital realm.
          </p>
          <p className={styles.cardDesc}>
            Our philosophy is built on the belief that technology should be as
            beautiful as it is functional. We bridge the gap between complex
            engineering and intuitive design — creating products that leave a
            lasting impression.
          </p>
        </div>

        {/* What We Deliver */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>What We Deliver</h2>
          <p className={styles.cardDesc}>
            We specialize in end-to-end digital transformation, delivering
            premium solutions tailored to your unique vision.
          </p>

          <ul className={styles.skillList}>
            {skills.map((s) => (
              <li key={s.label} className={styles.skillItem}>
                <span className={styles.skillIcon}>{s.icon}</span>
                <span className={styles.skillLabel}>{s.label}</span>
              </li>
            ))}
          </ul>

          <Button url="/contact" text="Start a Conversation" />
        </div>
      </div>
    </div>
  );
};

export default About;
