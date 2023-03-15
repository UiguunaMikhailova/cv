import React from 'react'
import localFont from "next/font/local";
import styles from './Main.module.scss';

const secondaryFont = localFont({
  src: "../../assets/fonts/neutralFace/NeutralFace.otf",
});

export default function Main() {
  return (
    <div className={styles.main}>
      <h3 className={styles.main__subtitle}>FRONT-END WEB DEVELOPER</h3>
      <h2 className={`${secondaryFont.className} ${styles.main__title}`}>Uiguuna Mikhailova</h2>
      <p className={styles.main__text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam numquam inventore pariatur a aliquam reprehenderit sunt eum quidem repellendus, illo ipsa officia cumque qui. Debitis deserunt voluptatum voluptate saepe facilis?
      Ex, quidem?</p>
    </div>
  )
}
