import Carousel from 'react-bootstrap/Carousel';

  
export default function HomeCarousel(){
    return(
    <Carousel slide={false} controls={true} prevLabel="" nextLabel="" indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="/krittika-website/img/slides-2.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Orion Nebula</h3>
          <p>Located near the belt of Orion, this is one of our objects spots to show to first-time telescope users. Photo, once again, was captured by us, but after stretching, this does not do justice to our original image, dm one of us to get the original image ;)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-img"
          src="/krittika-website/img/slides-1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Pleiades</h3>
          <p>A capture of the Pleides cluster using the gear we have here. Called Krittika in Indian culture, this star cluster is what our club is named after, so it holds some sentimental value. Please stop us if you find us staring at it for very long times at a stretch.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="/krittika-website/img/slides-3.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Jupiter</h3>
          <p>
          One of the first pictures we captured this year. On a good day you can also see 4 of its largest moons with our telescopes.          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}