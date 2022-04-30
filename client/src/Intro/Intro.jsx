import React from "react";
import styles from "./intro.module.css";
import profileImage from "../../src/image/mark.png";
import { COLORS } from "../Values/Colors";

const Intro = () => {
  return (
    <div style={{ backgroundColor: COLORS.primary1 }} className={styles.i}>
      <div className={styles.iLeft}>
        <div className={styles.iLeftWrapper}>
          <div className={styles.iTitle}>
            <div
              style={{ color: COLORS.primary2 }}
              className={styles.iTitleWrapper}
            >
              <div className={styles.iTitleItem}>Web Developer</div>
              <div className={styles.iTitleItem}>UI/UX Designer</div>
              <div className={styles.iTitleItem}>Photographer</div>
              <div className={styles.iTitleItem}>Writer</div>
              <div className={styles.iTitleItem}>Content Creator</div>
            </div>
          </div>

          <h2 style={{ color: COLORS.white }} className={styles.iIntro}>
            Hello, My name is
          </h2>
          <h1 style={{ color: COLORS.white }} className={styles.iName}>
            Priya Kaushik
          </h1>

          <p style={{ color: COLORS.font2 }} className={styles.iDesc}>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.I design and develop services for customers of all
            sizes, specializing in creating stylish, modern websites, web
            services and online stores.
          </p>
        </div>
      </div>
      <div className={styles.iRight}>
        <div
          style={{ backgroundColor: COLORS.primary2 }}
          className={styles.iBg}
        ></div>

        <div className={styles.imgWrapper}>
          <img src={profileImage} alt="" className={styles.iImg} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
