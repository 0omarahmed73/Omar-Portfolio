import React from "react";
import styles from "./TV.module.css";
function TV({ image }) {
  console.log(image);
  return (
    <div className={styles.tv}>
      <div className={styles["tv-screen"]}>
        <div
          style={{ "--image-url": `url(${image})` }}
          className={styles["tv-image"]}
        >
          Hello
        </div>
      </div>
    </div>
  );
}

export default TV;
