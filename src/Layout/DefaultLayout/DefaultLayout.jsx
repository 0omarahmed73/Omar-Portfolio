import { Container } from "react-bootstrap";
import styles from "./DefaultLayout.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { NavbarContext } from "../../context/NavbarContext";
import { useContext } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
function DefaultLayout() {
  const { setNewClass } = useContext(NavbarContext);
  const location = useLocation();
  const dimensions = useWindowSize();
  return (
    <div>
      <Container fluid={true} className={styles.container22}>
        <Navbar></Navbar>
        <Container
          className={styles.content}
          fluid={dimensions.width <= 990  ? true : false}
          onClick={() => setNewClass(false)}
        >
          <Outlet />
        </Container>
      </Container>
    </div>
  );
}

export default DefaultLayout;
