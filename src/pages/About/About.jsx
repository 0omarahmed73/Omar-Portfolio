import React, { useEffect, useState } from "react";
import image from "../../assets/unnamed.jpg";
import styles from "./About.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Typewriter } from "../../components/TypeWriter";
import { FaGithubSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CustomIcon } from "../../components/CustomIcon/CustomIcon";
import { useWindowSize } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import useDocumentTitle from "../../hooks/useDocumentTitle";
function About() {
  const dimensions = useWindowSize();
  const [loading, setLoading] = useState(true);
  const [done, setDone] = useState(false);
  const [none, setNone] = useState(false);
  const [classs, setClasss] = useState("hide");
  useEffect(() => {
    if (done) {
      setClasss("show");
    }
  }, [done]);
  useEffect(() => {
    const time0 = setTimeout(() => {
      setNone(true);
    }, 200);
    const time = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      clearTimeout(time0);
      clearTimeout(time);
    };
  }, []);
  useDocumentTitle("About");
  return (
    <motion.div className="container d-flex justify-content-center align-items-center">
      {loading ? (
        <div className={`loader ${!none ? "w-0" : "w-1"}`}></div>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            bounce: 1,
            delay: 0.2,
            velocity: 0.5,
            stiffness: 260,
            damping: 30,
          }}
          className="row d-flex align-items-center gap-3 gap-lg-0 w-100 flex-column flex-lg-row justify-content-md-center"
        >
          <Col
            lg="8"
            className="justify-content-lg-start justify-content-center"
          >
            <h1
              className={` ${dimensions.width <= 990 ? "text-center" : ""}`}
              style={{ fontWeight: "bold", color: "#264653" }}
            >
              Education
            </h1>
            <p
              className={`${dimensions.width <= 990 ? "text-center" : ""}`}
              style={{
                fontWeight: "bold",
                fontSize: dimensions.width <= 560 ? 16 : 20,
                lineHeight: 1.5,
                color: "#000",
              }}
            >
              <li style={{ listStyle: "none" }}>
                Faculty Of Engineering Shoubra - Benha University (2019-2024)
              </li>
              <li style={{ listStyle: "none" }}>
                Bachelor of Science in Computer Engineering (Grade : Excellent),
              </li>
              <li style={{ listStyle: "none" }}>
                Graduation Project: E-Pharmacy System Using React JS (Grade :
                A+)
              </li>
            </p>
            <h1
              className={`${dimensions.width <= 990 ? "text-center" : ""}`}
              style={{ fontWeight: "bold", color: "#264653" }}
            >
              Courses
            </h1>
            <p
              className={`${dimensions.width <= 990 ? "text-center" : ""}`}
              style={{
                fontWeight: "bold",
                fontSize: dimensions.width <= 560 ? 16 : 20,
                lineHeight: 1.5,
                color: "#000",
              }}
            >
              <li style={{ listStyle: "none" }}>
                Building Scalable UIs with React Context API
              </li>
              <li style={{ listStyle: "none" }}>
                Flutter UI Development: Building Custom Widgets,
              </li>
              <li style={{ listStyle: "none" }}>
                Implementing a Design System with React and Styled Components
              </li>
              <li style={{ listStyle: "none" }}>
                Modern JavaScript: Mastering Async/Await and Promises
              </li>
            </p>
          </Col>
          <Col
            lg="3"
            className="d-flex justify-content-lg-start justify-content-center"
          >
            <div>
              <div className={`${styles.img} `}>
                <img
                  src={
                    "https://miro.medium.com/v2/resize:fit:1400/1*s80xLYgbrwbXgEuuDBR5mw.jpeg"
                  }
                  alt="blob"
                  style={{ opacity: 1, transitionDelay: 0.5 }}
                />
              </div>
            </div>
          </Col>
        </motion.div>
      )}
    </motion.div>
  );
}

export default About;
