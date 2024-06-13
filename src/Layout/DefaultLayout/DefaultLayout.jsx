import { Container } from "react-bootstrap";
import styles from "./DefaultLayout.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { NavbarContext } from "../../context/NavbarContext";
import { useContext } from "react";
function DefaultLayout() {
  const { setNewClass } = useContext(NavbarContext);
  return (
    <div>
      <Container fluid={true} className={styles.container22}>
        <Navbar></Navbar>
        <Container
        fluid={true}
          className={styles.content}
          onClick={() => setNewClass(false)}
        >
          <Outlet />
        </Container>
      </Container>
    </div>
  );
}

export default DefaultLayout;
