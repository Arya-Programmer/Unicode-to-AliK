"use client";
import React from 'react';
import styles from "./navbar.module.css";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { push } = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <span className={styles.logoText}>AliK</span>
          <div className={styles.logoIcon}>⟷</div>
          <span className={styles.logoText}>Unicode</span>
        </div>
        
        <div className={styles.navLinks}>
          <button 
            className={styles.navbarItem} 
            onClick={e => push("https://aryakurdo.com")}
          >
            <span className={styles.buttonText}>دەربارە</span>
            <div className={styles.buttonHighlight}></div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
