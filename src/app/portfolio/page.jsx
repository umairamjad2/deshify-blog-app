import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Portfolio – Dashify",
  description:
    "Browse our curated portfolio across illustrations, websites, and applications. Explore world-class digital work crafted with precision and creativity.",
};

const categories = [
  {
    id: 1,
    title: "Illustrations",
    url: "/portfolio/illustrations",
    description: "Hand-crafted visual art and digital illustrations that tell compelling stories.",
    icon: "🎨",
    tag: "Creative",
    bg: "/illustration.png",
    count: "24 works",
  },
  {
    id: 2,
    title: "Websites",
    url: "/portfolio/websites",
    description: "Pixel-perfect, performant websites built with modern web technologies.",
    icon: "🌐",
    tag: "Development",
    bg: "/websites.jpg",
    count: "18 works",
  },
  {
    id: 3,
    title: "Applications",
    url: "/portfolio/applications",
    description: "Full-stack applications designed for real-world impact and scalability.",
    icon: "📱",
    tag: "Engineering",
    bg: "/apps.jpg",
    count: "12 works",
  },
];

const Portfolio = () => {
  return (
    <div className={styles.page}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Our Work
        </div>
        <h1 className={styles.title}>
          Explore the{" "}
          <span className={styles.titleGradient}>Portfolio</span>
        </h1>
        <p className={styles.subtitle}>
          Dive into a curated collection of projects across design, development,
          and engineering. Select a category to get started.
        </p>
      </div>

      {/* ── Category Cards ── */}
      <div className={styles.grid}>
        {categories.map((cat) => (
          <Link href={cat.url} key={cat.id} className={styles.card}>
            {/* Background image */}
            <div
              className={styles.cardBg}
              style={{ backgroundImage: `url(${cat.bg})` }}
            />
            {/* Gradient overlay */}
            <div className={styles.cardOverlay} />

            {/* Content */}
            <div className={styles.cardContent}>
              <div className={styles.cardTop}>
                <span className={styles.cardIcon}>{cat.icon}</span>
                <span className={styles.cardTag}>{cat.tag}</span>
              </div>

              <div className={styles.cardBottom}>
                <span className={styles.cardCount}>{cat.count}</span>
                <h2 className={styles.cardTitle}>{cat.title}</h2>
                <p className={styles.cardDesc}>{cat.description}</p>
                <div className={styles.cardCta}>
                  View Gallery
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
