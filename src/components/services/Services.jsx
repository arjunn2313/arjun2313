// Services.js
import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { FaCamera, FaHome, FaSearch } from 'react-icons/fa';
import { FaPanorama } from 'react-icons/fa6';

const servicesData = [
  {
    icon: <FaHome size={30} style={{ color: "#007BFF" }} />,
    title: "Property Tours",
    description:
      "Showcase your properties with interactive 360-degree tours that provide an immersive viewing experience.",
    buttonText: "Explore Tours",
  },
  {
    icon: <FaCamera size={30} style={{ color: "#28a745" }} />,
    title: "High-Quality Photography",
    description:
      "Capture stunning, high-resolution images that highlight every detail of your properties.",
    buttonText: "See Examples",
  },
  {
    icon: <FaPanorama size={30} style={{ color: "#17a2b8" }} />,
    title: "360-Degree Photography",
    description:
      "Offer a full panoramic view of your listings, allowing potential buyers to explore every angle.",
    buttonText: "View 360-Degree",
  },
  {
    icon: <FaSearch size={30} style={{ color: "#dc3545" }} />,
    title: "Virtual Staging",
    description:
      "Enhance your property listings with virtual staging to help buyers visualize their future home.",
    buttonText: "Learn More",
  },
];

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Elevate your property listings with
          <br /> stunning 360-degree photography
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/real-estate-360.jpg" alt="360-degree view" /> */}
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Immersive</motion.b>{" "}
            Experiences
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Listings.
          </h1>
          <button>Discover More</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="box"
                 // whileHover={{ background: "#f0f0f0", color: "#333" }}
          >
            {service.icon}
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            {/* <button>{service.buttonText}</button> */}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
