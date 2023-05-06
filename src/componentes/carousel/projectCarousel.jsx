import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './img-celular/img1.png';
import img2 from './img-celular/img2.png';
import img3 from './img-celular/img3.png';
import img4 from './img-celular/img4.png';
import img5 from './img-celular/img5.png';
import img6 from './img-celular/img6.png';
import img7 from './img-celular/img7.png';
import img8 from './img-celular/img8.png';
import img9 from './img-celular/img9.png';

const ProjectsCarousel = () => {
  const [interval, setInterval] = useState(2000);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const handleSelect = () => {
    setInterval(3000);
  };

  return (
    <Carousel indicators={false} onSelect={handleSelect}>
      {images.map((image, index) => (
        <Carousel.Item key={index} interval={interval}>
          <img className="d-block w-100 h-50" src={image} alt={`Slide-${index}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProjectsCarousel;