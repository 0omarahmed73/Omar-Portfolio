import React from "react";
import styles from "./TV.module.css";
function TV({ image }) {
  return (
    <div className={styles.tv}>
      <div className={styles["tv-screen"]}>
        <img src={image} alt="tv" className={styles["tv-image"]} />
      </div>
    </div>
  );
}

export default TV;
