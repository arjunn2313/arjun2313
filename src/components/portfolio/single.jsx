import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Pannellum } from "pannellum-react";
import "./portfolio.scss";

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="pannellumContainer" ref={ref}>
            <Pannellum
              width="100%"
              height="500px" // Adjust as needed
              image={item.img[0].src}
              pitch={10}
              yaw={180}
              hfov={110}
              autoLoad
              autoRotate={-2}
              showZoomCtrl={true}
              showFullscreenCtrl={true}
            />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Single;
