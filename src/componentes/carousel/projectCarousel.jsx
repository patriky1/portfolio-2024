import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./img-celular/img1.png";
import img2 from "./img-celular/img2.png";
import img3 from "./img-celular/img3.png";
import img4 from "./img-celular/img4.png";
import img5 from "./img-celular/img5.png";
import img6 from "./img-celular/img6.png";
import img7 from "./img-celular/img7.png";
import img8 from "./img-celular/img8.png";
import img9 from "./img-celular/img9.png";
import img10 from "./img-celular/img10.png";

import { useEffect } from "react";

const showDesktopImage = window?.screen.width <= 680;
const noMobileValue = {
  source: img9,
  class: "source-img--large d-block w-100 h-desktop-image mt-5",
};

const ProjectsCarousel = () => {
  const [interval, setInterval] = useState(2000);
  const [renderData, setRenderData] = useState([]);

  useEffect(() => {
    const data = [
      { source: img1, class: "source-img d-block w-100 h-100" },
      { source: img2, class: "source-img d-block w-100 h-100" },
      { source: img3, class: "source-img d-block w-100 h-100" },
      { source: img4, class: "source-img d-block w-100 h-100" },
      { source: img5, class: "source-img d-block w-100 h-100" },
      { source: img6, class: "source-img d-block w-100 h-100" },
      { source: img7, class: "source-img d-block w-100 h-100" },
      { source: img8, class: "source-img d-block w-100 h-100" },
      { source: img10, class: "source-img d-block w-50 h-100" },

    ];

    setRenderData(showDesktopImage ? data : [...data, noMobileValue]);
  }, []);

  const handleSelect = () => {
    setInterval(3000);
  };

  return (
    <Carousel indicators={false} onSelect={handleSelect}>
      {renderData.map((image, index) => (
        <Carousel.Item key={index} interval={interval}>
          {image.class === renderData[8]?.class ? (
            <div className={`last-${index}`}>
              <img
                className={image.class}
                src={image.source}
                alt={`Slide-${index}`}
              />
            </div>
          ) : (
            <img
              className={image.class}
              src={image.source}
              alt={`Slide-${index}`}
            />
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProjectsCarousel;
