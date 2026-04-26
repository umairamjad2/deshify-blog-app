"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Get In Touch
        </div>
        <h1 className={styles.title}>
          Let's Start a{" "}
          <span className={styles.titleGradient}>Conversation</span>
        </h1>
        <p className={styles.subtitle}>
          Have a project in mind? We'd love to hear about it. Send us a message
          and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* ── Form ── */}
      <div className={styles.content}>
        <div className={styles.formContainer}>
          {submitted ? (
            <div className={styles.successState}>
              <span className={styles.successIcon}>✅</span>
              <h2 className={styles.successTitle}>Message Sent!</h2>
              <p className={styles.successDesc}>
                Thanks for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                className={styles.button}
                onClick={() => setSubmitted(false)}
              >
                Send Another
              </button>
            </div>
          ) : (
            <>
              <h2 className={styles.formTitle}>Send a Message</h2>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className={styles.input}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className={styles.input}
                      required
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Message</label>
                  <textarea
                    className={styles.textArea}
                    placeholder="Tell us about your project or question..."
                    rows="5"
                    required
                  />
                </div>
                <button type="submit" className={styles.button}>
                  Send Message
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
                    <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" />
                  </svg>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
