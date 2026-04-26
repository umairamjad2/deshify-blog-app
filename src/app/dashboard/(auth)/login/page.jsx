"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!params) return;
    setSuccess(params.get("success") || "");
  }, []);

  useEffect(() => {
    if (session.status === "authenticated") {
      router?.push("/dashboard");
    }
  }, [session.status, router]);

  if (session.status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (session.status === "authenticated") {
    return <div className={styles.loading}>Redirecting...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Welcome Back</h1>
        <h2 className={styles.subtitle}>Log in to continue your creative journey.</h2>

        {success && <div className={styles.success}>{success}</div>}

        <form className={styles.form} onSubmit={handleSubmit}>
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

          <button className={styles.button}>Login</button>

          {error && <div className={styles.error}>{error}</div>}
        </form>



        <div className={styles.footer}>
          <span>Don't have an account?</span>
          <Link href="/dashboard/register" className={styles.link}>
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
