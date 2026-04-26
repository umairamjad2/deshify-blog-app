import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

async function getData() {
  // const res = await fetch("http://localhost:3000/api/posts", {
  //   cache: "no-store",
  // });
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
      <h1 className={styles.pageTitle}>Latest Stories</h1>
      <div className={styles.posts}>
        {data.length > 0 ? (
          data.map((item) => (
            <Link
              href={`/blog/${item._id}`}
              className={styles.container}
              key={item._id}
            >
              <div className={styles.imgContainer}>
                <Image
                  className={styles.img}
                  width={300}
                  height={180}
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <div className={styles.content}>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.desc}>{item.desc}</p>
                <div className={styles.meta}>
                  <span className={styles.readMore}>Read Story →</span>
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
