import { Container } from "react-bootstrap";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import image from "../../assets/code-tech-dev-icon-512x448-gc8hejmy.png";
import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarContext } from "../../context/NavbarContext";

function Navbar() {
  const { newClass, setNewClass } = useContext(NavbarContext);
  return (
    <Container className={styles.container}>
      <NavLink
        to="/"
        className={`${styles.all} d-flex flex-row justify-content-center align-items-center`}
      >
        <div className={styles.img}>
          <img src={image} alt="logo" className={styles.logo} />
        </div>
        <h1 style={{ color: "white" }}>Omar</h1>
      </NavLink>
      <ul className={styles.list}>
        <div className={styles.allSpans} onClick={() => setNewClass((d) => !d)}>
          <span className={newClass ? styles.span_new : styles.span}></span>
          <span className={newClass ? styles.span1_new : styles.span1}></span>
          <span className={newClass ? styles.span2_new : styles.span2}></span>
        </div>
        <AnimatePresence>
          {newClass && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 0.3,
              }}
              className={styles.navLinks_small}
            >
              <NavLink to="/" className={styles.navLink}>
                Home
              </NavLink>
              <NavLink to="/about" className={styles.navLink}>
                About
              </NavLink>
              <NavLink to="/skills" className={styles.navLink}>
                Skills
              </NavLink>
              <NavLink to="/portfolio" className={styles.navLink}>
                Portfolio
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </ul>
      <ul className={`${styles.list} ${styles.navLinks_large}`}>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="/about" className={styles.navLink}>
          About
        </NavLink>
        <NavLink to="/skills" className={styles.navLink}>
          Skills
        </NavLink>
        <NavLink to="/portfolio" className={styles.navLink}>
          Portfolio
        </NavLink>
      </ul>
    </Container>
  );
}

export default Navbar;
