// import React, { useRef } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";
// import Single from "./single"; // Make sure the path is correct
// import "./portfolio.scss";
// const items = [
//   {
//     id: 1,
//     title: "360-Degree Property Tour",
//     img: ["pexels-joshsorenson-1311155.jpg"],
//     desc: "Offer potential buyers a fully immersive 360-degree tour of your properties, allowing them to explore every angle from the comfort of their home.",
//   },
//   {
//     id: 2,
//     title: "Virtual Staging",
//     img: ["pexels-thelazyartist-2217658.jpg"],
//     desc: "Enhance empty rooms with virtual staging, helping potential buyers visualize how their future home could look, fully furnished.",
//   },
//   {
//     id: 3,
//     title: "Aerial Photography",
//     img: ["pexels-adit-prabowo-236007274-14919236.jpg"],
//     desc: "Showcase your property from above with stunning aerial shots, providing a unique perspective on the surrounding area and amenities.",
//   },
//   {
//     id: 4,
//     title: "Interactive Floor Plans",
//     img: ["pexels-haider-syed-719913841-18651509.jpg"],
//     desc: "Give buyers the ability to navigate through an interactive floor plan, exploring room layouts and space dimensions in a 360-degree view.",
//   },
// ];

// const Portfolio = () => {
//   const ref = useRef();
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end end", "start start"],
//   });

//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//   });

//   return (
//     <div className="portfolio" ref={ref}>
//       <div className="progress">
//         <h1>360-Degree Photography</h1>
//         <motion.div style={{ scaleX }} className="progressBar"></motion.div>
//       </div>
//       {items.map((item) => (
//         <Single item={item} key={item.id} />
//       ))}
//     </div>
//   );
// };

// export default Portfolio;

import React, { useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Single from "./single"; // Ensure the path is correct
import Tour from "./Tour"; // Ensure the path is correct
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "360-Degree Property Tour",
    img: [
      {
        src: "image1.jpg",
        hotspots: [
          { x: 30, y: 40, linkedImage: "image2.jpg" }, // hotspot coordinates and linked image
          { x: 50, y: 60, linkedImage: "image3.jpg" },
        ],
      },
      {
        src: "image2.jpg",
        hotspots: [
          { x: 20, y: 30, linkedImage: "image1.jpg" },
          { x: 70, y: 50, linkedImage: "image4.jpg" },
        ],
      },
      {
        src: "image3.jpg",
        hotspots: [{ x: 10, y: 20, linkedImage: "image1.jpg" }],
      },
      {
        src: "image4.jpg",
        hotspots: [],
      },
    ],
    desc: "Offer potential buyers a fully immersive 360-degree tour of your properties, allowing them to explore every angle from the comfort of their home.",
  },
  {
    id: 2,
    title: "Aerial Photography",
    img: [
      {
        src: "image2.jpg",
        hotspots: [],
      },
      {
        src: "image6.jpg",
        hotspots: [],
      },
    ],
    desc: "Enhance empty rooms with virtual staging, helping potential buyers visualize how their future home could look, fully furnished.",
  },
  {
    id: 3,
    title: "Virtual Staging",
    img: [
      {
        src: "image7.jpg",
        hotspots: [],
      },
      {
        src: "image6.jpg",
        hotspots: [],
      },
    ],
    desc: "Enhance empty rooms with virtual staging, helping potential buyers visualize how their future home could look, fully furnished.",
  },
  // Add other items as needed
];

const Portfolio = () => {
  const [isTourOpen, setTourOpen] = useState(false);
  const [currentTourImages, setCurrentTourImages] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0); // Track current image
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const handleViewDemo = (images) => {
    setCurrentTourImages(images);
    setActiveImageIndex(0); // Start with the first image
    setTourOpen(true);
  };

  const handleHotspotClick = (linkedImage) => {
    const newIndex = currentTourImages.findIndex(
      (img) => img.src === linkedImage
    );
    if (newIndex !== -1) {
      setActiveImageIndex(newIndex); // Update the active image index based on hotspot click
    }
  };

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>360-Degree Photography</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {items.map((item) => (
        <Single
          item={item}
          key={item.id}
          onViewDemo={() => handleViewDemo(item.img)} // Pass images to the tour
        />
      ))}

      {isTourOpen && (
        <Tour
          images={currentTourImages} // Pass the full image array to Tour
          currentIndex={activeImageIndex} // Pass active image index
          onHotspotClick={handleHotspotClick} // Handle hotspot clicks
          onClose={() => setTourOpen(false)} // Close the tour
          setActiveImageIndex={setActiveImageIndex} // Pass the state setter for index control
        />
      )}

     
    </div>
  );
};

export default Portfolio;

// import { Pannellum } from "pannellum-react";
// import React, { useState } from "react";
// import "./portfolio.scss";

// const Tour = () => {
//   // State to store the current image
//   const [currentImage, setCurrentImage] = useState(
//     "pexels-thelazyartist-2217658.jpg"
//   );

//   // List of 360 images with their names and hotspot data
//   const images = {
//     room1: {
//       src: "pexels-thelazyartist-2217658.jpg",
//       hotspots: [
//         {
//           pitch: 5,
//           yaw: 180,
//           text: "Go to Room 2",
//           nextImage: "pexels-joshsorenson-1311155.jpg", // Corrected image path
//           direction: "left", // Custom property for direction
//         },
//       ],
//     },
//     room2: {
//       src: "pexels-joshsorenson-1311155.jpg",
//       hotspots: [
//         {
//           pitch: 5,
//           yaw: 90,
//           text: "Go to Room 1",
//           nextImage: "pexels-thelazyartist-2217658.jpg", // Corrected image path
//           direction: "up", // Custom property for direction
//         },
//         {
//           pitch: 5,
//           yaw: 270,
//           text: "Go to Room 3",
//           nextImage: "pexels-room3.jpg", // Ensure this file exists
//           direction: "down", // Custom property for direction
//         },
//       ],
//     },
//     // room3: {
//     //   src: "pexels-room3.jpg",
//     //   hotspots: [
//     //     {
//     //       pitch: 5,
//     //       yaw: 90,
//     //       text: "Go to Room 2",
//     //       nextImage: "pexels-joshsorenson-1311155.jpg", // Corrected image path
//     //       direction: "up", // Custom property for direction
//     //     },
//     //     {
//     //       pitch: 5,
//     //       yaw: 270,
//     //       text: "Go to Room 4",
//     //       nextImage: "pexels-room4.jpg", // Ensure this file exists
//     //       direction: "down", // Custom property for direction
//     //     },
//     //   ],
//     // },
//     // room4: {
//     //   src: "pexels-room4.jpg",
//     //   hotspots: [
//     //     {
//     //       pitch: 5,
//     //       yaw: 180,
//     //       text: "Go to Room 3",
//     //       nextImage: "pexels-room3.jpg", // Corrected image path
//     //       direction: "left", // Custom property for direction
//     //     },
//     //   ],
//     // },
//   };

//   // Get the current image's hotspot data
//   const currentRoom = Object.values(images).find(
//     (room) => room.src === currentImage
//   );

//   // Fallback in case currentRoom is undefined
//   if (!currentRoom) {
//     return <div>Room not found</div>;
//   }

//   return (
//     <div style={{ width: "100%", height: "100vh" }}>
//       <Pannellum
//         width="100%"
//         height="100%"
//         image={currentImage}
//         pitch={10}
//         yaw={180}
//         hfov={110}
//         autoLoad
//         autoRotate={-2}
//         showZoomCtrl={true}
//         showFullscreenCtrl={true}
//       >
//         {currentRoom.hotspots.map((hotspot, index) => (
//           <Pannellum.Hotspot
//             key={index}
//             type="custom"
//             pitch={hotspot.pitch}
//             yaw={hotspot.yaw}
//             handleClick={() => setCurrentImage(hotspot.nextImage)} // Switch image on click
//             cssClass={`hotspot-${hotspot.direction}`} // Apply custom class
//           >
//             <div className={`hotspot-icon ${hotspot.direction}`} title={hotspot.text}></div>
//           </Pannellum.Hotspot>
//         ))}
//       </Pannellum>
//     </div>
//   );
// };

// export default Tour;
