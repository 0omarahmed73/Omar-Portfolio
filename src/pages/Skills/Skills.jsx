import React, { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Typewriter } from "../../components/TypeWriter";
import {
  FaCss3,
  FaGithubSquare,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaPhoneAlt,
  FaReact,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { CustomIcon } from "../../components/CustomIcon/CustomIcon";
import { useWindowSize } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Slider from "react-infinite-logo-slider";
import { SiAdobexd, SiFlutter, SiJavascript, SiPhp } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

function Skills() {
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
  useDocumentTitle("Skills");
  return (
    <motion.div className="container-fluid d-flex justify-content-center align-items-center">
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
          className="row d-flex align-items-center gap-3 gap-lg-0 w-100 flex-column-reverse flex-lg-row justify-content-md-center"
        >
          <Col className="justify-content-lg-start justify-content-center">
            <Typewriter
              text={"SKILLS"}
              deleting={false}
              speed={140}
              type={"h1"}
              className={`glitch text-center`}
              data-glitch="glitch"
              style={{ marginBottom: "30px" }}
            />
            {dimensions.width < 769 ? (
              <Row className={styles.skills_container_mobile}>
                <Col className={styles.skill}>
                  <div className={`${styles.body} d-flex flex-columngap-2`}>
                    <FaHtml5 size={40} />
                    <h3>HTML</h3>
                  </div>
                </Col>
                <Col className={styles.skill}>
                  <div className={`${styles.body} d-flex flex-columngap-2`}>
                    <FaCss3 size={40} />
                    <h3>CSS</h3>
                  </div>
                </Col>
                <Col className={styles.skill}>
                  <div className={`${styles.body} d-flex flex-columngap-2`}>
                    <SiJavascript size={40} />
                    <h3>JS</h3>
                  </div>
                </Col>
                <Col className={styles.skill}>
                  <div className={`${styles.body} d-flex flex-columngap-2`}>
                    <FaReact size={40} />
                    <h3>React JS</h3>
                  </div>
                </Col>
                <Col className={styles.skill}>
                  <div className={`${styles.body} d-flex flex-columngap-2`}>
                    <SiFlutter size={40} />
                    <h3>Flutter</h3>
                  </div>
                </Col>
                <Col className={styles.skill}>
                  <div className={`${styles.body} d-flex flex-columngap-2`}>
                    <FaNodeJs size={40} />
                    <h3>Node JS</h3>
                  </div>
                </Col>
                <Col className={styles.skill}>
                  <div className={`${styles.body} d-flex flex-columngap-2`}>
                    <SiPhp size={40} />
                    <h3>PHP</h3>
                  </div>
                </Col>
                <Col className={styles.skill}>
                  <div className={`${styles.body} d-flex flex-columngap-2`}>
                    <SiAdobexd size={40} />
                    <h3>Adobe XD</h3>
                  </div>
                </Col>
              </Row>
            ) : (
              <Slider
                duration={20}
                pauseOnHover={true}
                blurBorders={false}
                blurBoderColor={"#fff"}
                className={styles.skills_container}
              >
                <Slider.Slide className={styles.skill}>
                  <div className={`${styles.body} d-flex flex-columngap-2`}>
                    <FaHtml5 size={40} />
                    <h3>HTML</h3>
                  </div>
                </Slider.Slide>
                <Slider.Slide className={styles.skill}>
                  <div className={`${styles.body} d-flex flex-columngap-2`}>
                    <FaCss3 size={40} />
                    <h3>CSS</h3>
                  </div>
                </Slider.Slide>
                <Slider.Slide className={styles.skill}>
                  <div className={`${styles.body} d-flex flex-columngap-2`}>
                    <SiJavascript size={40} />
                    <h3>JS</h3>
                  </div>
                </Slider.Slide>
                <Slider.Slide className={styles.skill}>
                  <div className={`${styles.body} d-flex flex-columngap-2`}>
                    <FaReact size={40} />
                    <h3>React JS</h3>
                  </div>
                </Slider.Slide>
                <Slider.Slide className={styles.skill}>
                  <div className={`${styles.body} d-flex flex-columngap-2`}>
                    <SiFlutter size={40} />
                    <h3>Flutter</h3>
                  </div>
                </Slider.Slide>
                <Slider.Slide className={styles.skill}>
                  <div className={`${styles.body} d-flex flex-columngap-2`}>
                    <FaNodeJs size={40} />
                    <h3>Node JS</h3>
                  </div>
                </Slider.Slide>
                <Slider.Slide className={styles.skill}>
                  <div className={`${styles.body} d-flex flex-columngap-2`}>
                    <SiPhp size={40} />
                    <h3>PHP</h3>
                  </div>
                </Slider.Slide>
                <Slider.Slide className={styles.skill}>
                  <div className={`${styles.body} d-flex flex-columngap-2`}>
                    <SiAdobexd size={40} />
                    <h3>Adobe XD</h3>
                  </div>
                </Slider.Slide>
              </Slider>
            )}
          </Col>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Skills;
