import React, { useEffect, useState } from "react";
import image from "../../assets/hello.png";
import styles from "./Home.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Typewriter } from "../../components/TypeWriter";
import { FaGithubSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CustomIcon } from "../../components/CustomIcon/CustomIcon";
import { useWindowSize } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import useDocumentTitle from "../../hooks/useDocumentTitle";
function Home() {
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
  useDocumentTitle("Home");
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
          className="row d-flex align-items-center gap-3 gap-lg-0 w-100 flex-column-reverse flex-lg-row justify-content-md-center"
        >
          <Col
            lg="8"
            className="justify-content-lg-start justify-content-center"
          >
            <Typewriter
              text={"Omar Ahmed"}
              deleting={false}
              speed={80}
              type={"h1"}
              className={`glitch ${
                dimensions.width <= 990 ? "text-center" : ""
              }`}
              data-glitch="glitch"
            />
            <Typewriter
              text={"Full-Stack Developer | Odoo Developer | Software Engineer"}
              deleting={false}
              speed={20}
              type={"p"}
              className="subtitle"
              wait={600}
            />
            <Typewriter
              text={`
Experienced in JavaScript, React.js, Vue.js, Node.js, Express.js, MySQL, MongoDB, HTML5, CSS3, SASS, Tailwind CSS, Bootstrap, and the Odoo Framework. Proven expertise in developing responsive, scalable interfaces, building RESTful APIs, integrating databases, optimizing website performance, and ensuring SEO best practices. Proficient in UI/UX Development, clean code practices, cross-browser compatibility, and performance optimization. Dedicated to delivering scalable, maintainable, and efficient solutions with a commitment to continuous learning and collaboration.`}
              deleting={false}
              speed={15}
              type={"p"}
              wait={2000}
              onComplete={() => {
                setTimeout(() => {
                  setDone(true);
                }, 300);
              }}
            />
            <div className={styles.icons + " " + classs}>
              <CustomIcon to="https://www.linkedin.com/in/0omarahmed73/">
                <FaLinkedin size={20} />
              </CustomIcon>
              <CustomIcon to="https://github.com/0omarahmed73">
                <FaGithubSquare size={20} />
              </CustomIcon>
              <CustomIcon to="mailto:0omarahmed73@gmail.com">
                <MdEmail size={20} />
              </CustomIcon>
              <CustomIcon to="tel:+201553583288">
                <FaPhoneAlt size={20} />
              </CustomIcon>
              <CustomIcon to="https://drive.google.com/file/d/1rpdAMP8aDeCB5sV-FN_QUTwMOjNMWQXF/view?usp=sharing">
                <p
                  style={{
                    all: "unset",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  CV
                </p>
              </CustomIcon>
            </div>
          </Col>
          <Col
            lg="3"
            className="d-flex justify-content-lg-start justify-content-center"
          >
            <div>
              <div className={`${styles.img} `}>
                <img
                  src={image}
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

export default Home;
