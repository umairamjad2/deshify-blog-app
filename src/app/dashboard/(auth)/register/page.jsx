"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Register = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.status === 201) {
        router.push("/dashboard/login?success=Account has been created");
      } else {
        const data = await res.text();
        setError(data || "Something went wrong!");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Create Account</h1>
        <h2 className={styles.subtitle}>Join our community of creators and thinkers.</h2>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Username"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email Address"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              required
            />
          </div>
          
          <button className={styles.button} disabled={loading}>
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
          
          {error && <div className={styles.error}>{error}</div>}
        </form>



        <div className={styles.footer}>
          <span>Already have an account?</span>
          <Link href="/dashboard/login" className={styles.link}>
            Login now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
