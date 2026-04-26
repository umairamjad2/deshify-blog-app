import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Blog – Dashify",
  description: "Explore the latest stories and insights from Dashify.",
};

async function getData() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <span className={styles.badge}>
          <span className={styles.badgeDot} />
          Inside Dashify
        </span>
        <h1 className={styles.pageTitle}>Latest Stories</h1>
        <p className={styles.pageSub}>
          Exploring the intersection of design, code, and digital strategy.
        </p>
      </div>

      <div className={styles.posts}>
        {data.length > 0 ? (
          data.map((item) => (
            <Link
              href={`/blog/${item._id}`}
              className={styles.container}
              key={item._id}
            >
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.img}
                  src={item.img || "/default.png"}
                  alt={item.title}
                  fill
                />
                <div className={styles.imgOverlay} />
                <span className={styles.postTag}>Design</span>
              </div>

              <div className={styles.content}>
                <div className={styles.postHeader}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
                <div className={styles.footer}>
                  <div className={styles.authorInfo}>
                    <span className={styles.date}>April 26, 2026</span>
                  </div>
                  <span className={styles.readMore}>
                    Read Story
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className={styles.emptyState}>
            <h2>No stories found yet.</h2>
            <p>Check back later for fresh inspiration!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
