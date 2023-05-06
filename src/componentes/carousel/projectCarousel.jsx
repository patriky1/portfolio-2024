import Carousel from 'react-bootstrap/Carousel';
import carouselImage from './img-celular/img1.png'
import carouselImage1 from './img-celular/img2.png'
import carouselImage2 from './img-celular/img3.png'
import carouselImage3 from './img-celular/img4.png'
import carouselImage4 from './img-celular/img5.png'
import carouselImage5 from './img-celular/img6.png'
import carouselImage6 from './img-celular/img7.png'
import carouselImage7 from './img-celular/img8.png'

function ProjectsCarousel() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-75"
          src={carouselImage}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-75"
          src={carouselImage1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-75"
          src={carouselImage2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-75"
          src={carouselImage3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-75"
          src={carouselImage4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-75"
          src={carouselImage5}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-75"
          src={carouselImage6}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-75"
          src={carouselImage7}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectsCarousel;