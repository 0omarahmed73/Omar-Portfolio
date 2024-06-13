import React from "react";
import styles from "./TV.module.css";
import { Img } from "react-image";
function TV({ image }) {
  return (
    <div className={styles.tv}>
      <div className={styles["tv-screen"]}>
        <Img
          src={image}
          alt="tv"
          className={styles["tv-image"]}
          loader={<div className={`loader`} />}
        />
      </div>
    </div>
  );
}

export default TV;
