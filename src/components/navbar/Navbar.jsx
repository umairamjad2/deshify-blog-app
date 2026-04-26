"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR and the first client-side render, we render a stable version 
  // of the links to avoid hydration mismatch.
  const filteredLinks = !mounted 
    ? links.filter(link => link.title !== "Dashboard" && link.title !== "Blog")
    : links.filter((link) => {
        if (session.status !== "authenticated") {
          return link.title !== "Dashboard" && link.title !== "Blog";
        }
        return true;
      });

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Dashify
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {filteredLinks.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {mounted && (
          session.status === "authenticated" ? (
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
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
