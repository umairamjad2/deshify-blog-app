"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((r) => r.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
  }, [session.status, router]);

  if (session.status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (session.status === "unauthenticated") {
    return <div className={styles.loading}>Redirecting...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>Your Stories</h1>
          <div className={styles.posts}>
            {isLoading ? (
              <div className={styles.loadingSmall}>Fetching your stories...</div>
            ) : data?.length > 0 ? (
              data.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div 
                    className={styles.postClickArea} 
                    onClick={() => router.push(`/blog/${post._id}`)}
                  >
                    <div className={styles.imgContainer}>
                      <Image
                        src={post.img?.startsWith("http") ? post.img : "/default.png"}
                        alt={post.title}
                        fill={true}
                        className={styles.img}
                      />
                    </div>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                  </div>
                  <button
                    className={styles.delete}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(post._id);
                    }}
                    title="Delete story"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </button>
                </div>
              ))
            ) : (
              <div className={styles.empty}>You haven't shared any stories yet.</div>
            )}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <h1 className={styles.formTitle}>Add New Story</h1>
            <p className={styles.formSubtitle}>Share your latest ideas with the world.</p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Story Title" className={styles.input} required />
              </div>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Brief Description" className={styles.input} required />
              </div>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Cover Image URL" className={styles.input} required />
              </div>
              <div className={styles.inputGroup}>
                <textarea
                  placeholder="Tell your story..."
                  className={styles.textArea}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button className={styles.button}>Publish Story</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
