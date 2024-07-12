"use client";
import React from 'react';
import styles from "./navbar.module.css";
import { ButtonBase } from "@mui/material";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { push } = useRouter();

  return (
    <nav className={styles.navbar}>
      <ButtonBase className={styles.navbarItem} onClick={e => push("https://aryakurdo.com")}>
        دەربارە
      </ButtonBase>
    </nav>
  );
}

export default Navbar;