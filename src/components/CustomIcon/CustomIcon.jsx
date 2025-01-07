import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./CustomIcon.module.css";
export const CustomIcon = ({children , ...props}) => (
  <Link
    target="_blank"
    {...props}
    className={styles.icon}
  >
    {children}
  </Link>
);
