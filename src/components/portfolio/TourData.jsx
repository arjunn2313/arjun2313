// tourData.js
export const tourData = [
    {
      id: 1,
      title: "Living Room Tour",
      images: [
        {
          src: "image1.jpg",
          hotspots: [
            {
              pitch: 10,
              yaw: 110,
              text: "Go to Living Room 2",
              nextImage: "image2.jpg",
              direction: "right"
            },
          ],
        },
        {
          src: "image2.jpg",
          hotspots: [
            {
              pitch: 15,
              yaw: 50,
              text: "Go to Living Room 3",
              nextImage: "image3.jpg",
              direction: "left"
            },
          ],
        },
        {
          src: "image3.jpg",
          hotspots: [
            {
              pitch: 20,
              yaw: 70,
              text: "Go to Living Room 4",
              nextImage: "image4.jpg",
              direction: "down"
            },
          ],
        },
        {
          src: "image4.jpg",
          hotspots: [
            {
              pitch: 25,
              yaw: 100,
              text: "Back to Living Room 1",
              nextImage: "image1.jpg",
              direction: "up"
            },
          ],
        },
      ],
    },
    // {
    //   id: 2,
    //   title: "Bedroom Tour",
    //   images: [
    //     {
    //       src: "bedroom-1.jpg",
    //       hotspots: [
    //         {
    //           pitch: 15,
    //           yaw: 80,
    //           text: "Go to Bedroom 2",
    //           nextImage: "bedroom-2.jpg",
    //           direction: "right"
    //         },
    //       ],
    //     },
    //     {
    //       src: "bedroom-2.jpg",
    //       hotspots: [
    //         {
    //           pitch: 10,
    //           yaw: 90,
    //           text: "Go to Bedroom 3",
    //           nextImage: "bedroom-3.jpg",
    //           direction: "left"
    //         },
    //       ],
    //     },
    //     {
    //       src: "bedroom-3.jpg",
    //       hotspots: [
    //         {
    //           pitch: 20,
    //           yaw: 110,
    //           text: "Go to Bedroom 4",
    //           nextImage: "bedroom-4.jpg",
    //           direction: "down"
    //         },
    //       ],
    //     },
    //     {
    //       src: "bedroom-4.jpg",
    //       hotspots: [
    //         {
    //           pitch: 25,
    //           yaw: 130,
    //           text: "Back to Bedroom 1",
    //           nextImage: "bedroom-1.jpg",
    //           direction: "up"
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];
  