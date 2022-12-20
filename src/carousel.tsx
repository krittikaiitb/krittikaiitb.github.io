import Carousel from 'react-bootstrap/Carousel';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import slides1 from '../public/img/slides-1.jpeg';
import slides2 from '../public/img/slides-2.jpeg';
import slides3 from '../public/img/slides-3.jpeg';

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: -1.0,
    height: -1.0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


export default function HomeCarousel(){
    const size = useWindowSize();

    const data: {img: StaticImageData, captionh: string, captionp: string, alt?: string}[] = [
      {img: slides2, captionh: "Orion Nebula", captionp: "Located near the belt of Orion, this is one of our objects spots to show to first-time telescope users. Photo, once again, was captured by us, but after stretching, this does not do justice to our original image, dm one of us to get the original image ;)", alt: "First slide"},
      {img: slides1, captionh: "Pleiades", captionp: "A capture of the Pleides cluster using the gear we have here. Called Krittika in Indian culture, this star cluster is what our club is named after, so it holds some sentimental value. Please stop us if you find us staring at it for very long times at a stretch.", alt: "Second slide"},
      {img: slides3, captionh: "Jupiter", captionp: "One of the first pictures we captured this year. On a good day you can also see 4 of its largest moons with our telescopes.", alt: "Third slide"},
      

    ]
    return(
    <Carousel slide={false} controls={true} prevLabel="" nextLabel="" indicators={false}>
      {data.map((dataVal, key)=>{return (
      <Carousel.Item key={key}>
        <Image
          className="d-block w-100 carousel-img"
          src={dataVal.img}
          alt={`${dataVal.alt}`}
          width={size.width}
          height={1/2*size.width}
          placeholder="blur"
        />

        <Carousel.Caption>
          <h3>{dataVal.captionh}</h3>

          {(size.width > 600)? <p>{dataVal.captionp}</p>: <></>}
        </Carousel.Caption>
      </Carousel.Item>
      )
      })}
    </Carousel>
    )
}