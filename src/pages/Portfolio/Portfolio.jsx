import React, { useEffect, useState } from "react";
import image from "../../assets/project1.png";
import image2 from "../../assets/project2.png";
import image3 from "../../assets/project3.png";
import image4 from "../../assets/project4.png";
import image5 from "../../assets/project5.png";
import image6 from "../../assets/project6.png";
import image7 from "../../assets/project7.png";
import image8 from "../../assets/project8.png";
import styles from "./Portfolio.module.css";
import { Col } from "react-bootstrap";
import { Typewriter } from "../../components/TypeWriter";
import { useWindowSize } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import TV from "../../components/TV/TV";
import Project from "../../components/Project/Project";
function Portfolio() {
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
  const images = [
    image,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    "https://i.pinimg.com/736x/71/ac/e4/71ace42dbbc248cc9041d07b71ce26d5.jpg",
  ];
  // Preload images
  useEffect(() => {
    images.forEach((img) => {
      const imgObj = new Image();
      imgObj.src = img;
    });
  }, [images]);
  const [imageIndex, setImageIndex] = useState(8);
  console.log(imageIndex);
  useDocumentTitle("Portfolio");
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
          className="row d-flex align-items-center gap-3 gap-lg-0 w-100 flex-column-reverse flex-lg-row justify-content-md-between"
        >
          <Col
            lg="7"
            className="justify-content-lg-start justify-content-center"
          >
            <Typewriter
              text={"PROJECTS"}
              deleting={false}
              speed={60}
              wait={200}
              type={"h1"}
              className={`glitch ${
                dimensions.width <= 990 ? "text-center" : ""
              }`}
              data-glitch="glitch"
            />
            <div className={styles.projects}>
              <Project
                title="Quran Project"
                link="https://holyquran0omar.netlify.app/"
                functions={() => setImageIndex(0)}
              />
              <Project
                title="Prayer Times"
                link="https://main--prayertimes0omar.netlify.app/ar"
                functions={() => setImageIndex(1)}
              />
              <Project
                title="E-Book Project"
                link="https://byt-elhekma-library.netlify.app/"
                functions={() => setImageIndex(7)}
              />
              <Project
                title="Memory Game"
                link="https://memorygame0omar.netlify.app/"
                functions={() => setImageIndex(2)}
              />
              <Project
                title="Pen's Inspiration"
                link="https://main--wahialqalam-0omar.netlify.app/"
                functions={() => setImageIndex(3)}
              />
              <Project
                title="Huda's Way"
                link="https://hudas-way.netlify.app/"
                functions={() => setImageIndex(4)}
              />
              <Project
                title="XO"
                link="https://0omarahmed73.github.io/XO/"
                functions={() => setImageIndex(5)}
              />
              <Project
                title="Calculate Age"
                link="https://0omarahmed73.github.io/calcAge/"
                functions={() => setImageIndex(6)}
              />
            </div>
          </Col>
          <Col
            lg="4"
            className="d-flex justify-content-lg-start justify-content-center"
          >
            <TV image={images[imageIndex]} />
          </Col>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Portfolio;
