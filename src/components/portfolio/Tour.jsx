import { Pannellum } from "pannellum-react";
import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import { tourData } from "./TourData";
// Import the tour data

const Tour = () => {
  // State to store the current image and the current tour ID
  const [currentImage, setCurrentImage] = useState(tourData[0].images[0].src);
  const [currentTour, setCurrentTour] = useState(1); // Assuming starting with the first tour

  // Get the current tour data based on the tour ID
  const currentTourData = tourData.find((tour) => tour.id === currentTour);

  // Find the current room (image) in the tour data
  const currentRoom = currentTourData.images.find(
    (image) => image.src === currentImage
  );

  // Fallback in case currentRoom is undefined
  if (!currentRoom) {
    return <div>Room not found</div>;
  }

  useEffect(() => {
    // Function to move fullscreen control
    const moveFullscreenControl = () => {
      const fullscreenCtrl = document.querySelector('.pnlm-fullscreen-button');
      if (fullscreenCtrl) {
        fullscreenCtrl.classList.add('custom-fullscreen-control');
      }
    };

    // Call function to adjust control position after component mounts
    moveFullscreenControl();
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Pannellum
        width="100%"
        height="100%"
        image={currentImage}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        autoRotate={-2}
        showZoomCtrl={true}
        showFullscreenCtrl={true}
      >
        {currentRoom.hotspots.map((hotspot, index) => (
          <Pannellum.Hotspot
            key={index}
            type="custom"
            pitch={hotspot.pitch}
            yaw={hotspot.yaw}
            handleClick={() => setCurrentImage(hotspot.nextImage)} // Switch image on click
            cssClass={`hotspot-${hotspot.direction}`} // Apply custom class
          >
            <div
              className={`hotspot-icon ${hotspot.direction}`}
              title={hotspot.text}
            ></div>
          </Pannellum.Hotspot>
        ))}
      </Pannellum>
    </div>
  );
};

export default Tour;
