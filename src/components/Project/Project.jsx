import React from "react";
import styles from "./Project.module.css";
import { Link } from "react-router-dom";
import { PiLinkSimpleBold } from "react-icons/pi";
function Project({ title, index, functions, link }) {
  return (
    <div className={styles.project} onClick={functions}>
      <div className={`${styles.project_title}`}>
        <h2>{title}</h2>
        <Link style={{all : 'unset'}} to={link} target="_blank"><PiLinkSimpleBold size={25} /></Link>
      </div>
    </div>
  );
}

export default Project;
