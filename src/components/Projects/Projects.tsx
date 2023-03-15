import Image from "next/image";
import React from "react";
import styles from "./Projects.module.scss";
import defaultImage from "src/assets/images/default.jpg";


export default function Projects() {
  return (
    <div className={styles.projects}>
      <h4 className={styles.projects__title}>PROJECTS</h4>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <div className={styles.card}>
            <Image
              src={defaultImage}
              alt="image-CRM-system"
              className={styles.card__image}
            />
            <p className={styles.card__title}>CRM-system</p>
            <p className={styles.card__text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda tempora accusamus voluptatum labore, nostrum, placeat
              deleniti totam magni delectus, quod maxime. Fugiat cupiditate
              quidem obcaecati, explicabo illum eum? Ut, odit.
            </p>
            <div className={styles.buttons}>
              <button className={styles.buttons__deploy}>Deploy</button>
              <button className={styles.buttons__github}>Github</button>
            </div>
          </div>
        </li>
        <li className={styles.list__item}>
          <div className={styles.card}>
            <Image
              src={defaultImage}
              alt="image-Kanban"
              className={styles.card__image}
            />
            <p className={styles.card__title}>Kanban</p>
            <p className={styles.card__text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda tempora accusamus voluptatum labore, nostrum, placeat
              deleniti totam magni delectus, quod maxime. Fugiat cupiditate
              quidem obcaecati, explicabo illum eum? Ut, odit.
            </p>
            <div className={styles.buttons}>
              <button className={styles.buttons__deploy}>Deploy</button>
              <button className={styles.buttons__github}>Github</button>
            </div>
          </div>
        </li>
        <li className={styles.list__item}>
          <div className={styles.card}>
            <Image
              src={defaultImage}
              className={styles.card__image}
              alt="image-Movies"
            />
            <p className={styles.card__title}>Movies</p>
            <p className={styles.card__text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda tempora accusamus voluptatum labore, nostrum, placeat
              deleniti totam magni delectus, quod maxime. Fugiat cupiditate
              quidem obcaecati, explicabo illum eum? Ut, odit.
            </p>
            <div className={styles.buttons}>
              <button className={styles.buttons__deploy}>Deploy</button>
              <button className={styles.buttons__github}>Github</button>
            </div>
          </div>
        </li>
        <li className={styles.list__item}>
          <div className={styles.card}>
            <Image
              src={defaultImage}
              className={styles.card__image}
              alt="image-Discord-page"
            />
            <p className={styles.card__title}>Discord-page</p>
            <p className={styles.card__text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda tempora accusamus voluptatum labore, nostrum, placeat
              deleniti totam magni delectus, quod maxime. Fugiat cupiditate
              quidem obcaecati, explicabo illum eum? Ut, odit.
            </p>
            <div className={styles.buttons}>
              <button className={styles.buttons__deploy}>Deploy</button>
              <button className={styles.buttons__github}>Github</button>
            </div>
          </div>
        </li>
        <li className={styles.list__item}>
          <div className={styles.card}>
            <Image
              src={defaultImage}
              className={styles.card__image}
              alt="image-Coffee-store"
            />
            <p className={styles.card__title}>Coffee-store</p>
            <p className={styles.card__text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda tempora accusamus voluptatum labore, nostrum, placeat
              deleniti totam magni delectus, quod maxime. Fugiat cupiditate
              quidem obcaecati, explicabo illum eum? Ut, odit.
            </p>
            <div className={styles.buttons}>
              <button className={styles.buttons__deploy}>Deploy</button>
              <button className={styles.buttons__github}>Github</button>
            </div>
          </div>
        </li>
        <li className={styles.list__item}>
          <div className={styles.card}>
            <Image
              src={defaultImage}
              className={styles.card__image}
              alt="image-Lang-app"
            />
            <p className={styles.card__title}>Lang-app</p>
            <p className={styles.card__text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda tempora accusamus voluptatum labore, nostrum, placeat
              deleniti totam magni delectus, quod maxime. Fugiat cupiditate
              quidem obcaecati, explicabo illum eum? Ut, odit.
            </p>
            <div className={styles.buttons}>
              <button className={styles.buttons__deploy}>Deploy</button>
              <button className={styles.buttons__github}>Github</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
