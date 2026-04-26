"use client";

import React from "react";
import styles from "./footer.module.css";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // Define pages where footer should NOT be shown
  const hideFooterPages = ["/dashboard", "/dashboard/login", "/dashboard/register"];

  // Check if current path starts with any of the hidden paths
  const shouldHide = hideFooterPages.some(page => pathname === page || pathname.startsWith("/dashboard/"));

  if (shouldHide) return null;

  return (
    <div className={styles.container}>
      <div className={styles.brand}>© {currentYear} Dashify. All rights reserved.</div>

    </div>
  );
};

export default Footer;
