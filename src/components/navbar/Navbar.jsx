"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  const session = useSession();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // During SSR and the first client-side render, we render a stable version
  // of the links to avoid hydration mismatch.
  const filteredLinks = !mounted
    ? links.filter((link) => link.title !== "Dashboard" && link.title !== "Blog")
    : links.filter((link) => {
        if (session.status !== "authenticated") {
          return link.title !== "Dashboard" && link.title !== "Blog";
        }
        return true;
      });

  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Dashify
        </Link>

        {/* Desktop links */}
        <div className={styles.links}>
          <DarkModeToggle />
          {filteredLinks.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
          {mounted &&
            (session.status === "authenticated" ? (
              <button className={styles.logout} onClick={signOut}>
                Logout
              </button>
            ) : (
              session.status === "unauthenticated" && (
                <>
                  <Link href="/dashboard/login" className={styles.link}>
                    Login
                  </Link>
                  <Link href="/dashboard/register" className={styles.loginButton}>
                    Sign Up
                  </Link>
                </>
              )
            ))}
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ""}`} />
        </button>
      </div>

      {/* Mobile overlay backdrop */}
      {menuOpen && (
        <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />
      )}

      {/* Mobile slide-in menu */}
      <nav className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileMenuHeader}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            Dashify
          </Link>
          <DarkModeToggle />
        </div>

        <div className={styles.mobileLinks}>
          {filteredLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={styles.mobileLink}
              onClick={closeMenu}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {mounted &&
          (session.status === "authenticated" ? (
            <button
              className={styles.logout}
              onClick={() => { signOut(); closeMenu(); }}
            >
              Logout
            </button>
          ) : (
            session.status === "unauthenticated" && (
              <div className={styles.mobileAuthLinks}>
                <Link
                  href="/dashboard/login"
                  className={styles.mobileLink}
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link
                  href="/dashboard/register"
                  className={styles.loginButton}
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>
              </div>
            )
          ))}
      </nav>
    </>
  );
};

export default Navbar;
