import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Layout } from "@/types/types";
import styles from "./Layout.module.scss";

export default function LayoutComponent({ children }: Layout) {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
