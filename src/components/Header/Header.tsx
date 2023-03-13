import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Uiguuna Mikhailova</h1>
      <nav>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <a href="#projects">Projects</a>
          </li>
          <li className={styles.list__item}>
            <a href="#technologies">Technologies</a>
          </li>
          <li className={styles.list__item}>
            <a href="#about">About me</a>
          </li>
        </ul>
      </nav>
      <div className={styles.theme}>
        <button className={styles.theme__button}></button>
        <p>LIGHT</p>
      </div>
    </header>
  );
}