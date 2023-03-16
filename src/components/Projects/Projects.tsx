import Image from "next/image";
import React from "react";
import styles from "./Projects.module.scss";
import defaultImage from "src/assets/images/default.jpg";
import crmImage from "src/assets/images/crmImage.png";
import kanbanImage from "src/assets/images/kanbanImage.png";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h4 className={styles.projects__title}>PROJECTS</h4>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <div className={styles.card}>
            <Image
              src={crmImage}
              alt="image-CRM-system"
              className={styles.card__image}
            />
            <p className={styles.card__title}>CRM-system</p>
            <p className={styles.card__text}>
              Project job for the animation studio. Automation of business
              processes, recording and accounting of clients, controlling
              company income and expenses.
            </p>
            <p className={styles.card__stack}>
              Stack: React, Strapi, Javascript, Material UI
            </p>
            <div className={styles.buttons}>
              <a href="https://google.com" className={styles.buttons__link}>
                Link
              </a>
              <a href="https://google.com" className={styles.buttons__github}>
                Github
              </a>
            </div>
          </div>
        </li>
        <li className={styles.list__item}>
          <div className={styles.card}>
            <Image
              src={kanbanImage}
              alt="image-Kanban"
              className={styles.card__image}
            />
            <p className={styles.card__title}>Kanban</p>
            <p className={styles.card__text}>
              The app for organizing daily tasks with the ability to drag and
              drop tasks.
            </p>
            <p className={styles.card__stack}>
              Stack: React, Typescript, React Beautiful DnD, Redux Toolkit
              Query, Material UI
            </p>
            <div className={styles.buttons}>
              <a href="https://google.com" className={styles.buttons__link}>
                Link
              </a>
              <a href="https://google.com" className={styles.buttons__github}>
                Github
              </a>
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
            <p className={styles.card__stack}>
              Stack: React, Typescript, Redux
            </p>
            <div className={styles.buttons}>
              <a href="https://google.com" className={styles.buttons__link}>
                Link
              </a>
              <a href="https://google.com" className={styles.buttons__github}>
                Github
              </a>
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
              <a href="https://google.com" className={styles.buttons__link}>
                Link
              </a>
              <a href="https://google.com" className={styles.buttons__github}>
                Github
              </a>
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
              <a href="https://google.com" className={styles.buttons__link}>
                Link
              </a>
              <a href="https://google.com" className={styles.buttons__github}>
                Github
              </a>
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
              <a href="https://google.com" className={styles.buttons__link}>
                Link
              </a>
              <a href="https://google.com" className={styles.buttons__github}>
                Github
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
