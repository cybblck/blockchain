import meter1 from "../assets/img/polygon-logo-square-official.png";
import meter2 from "../assets/img/hyperledger-logo-square-official.png";
import meter3 from "../assets/img/ethereum-logo-square-black.png";
import meter4 from "../assets/img/algorand_square_logo_black-official.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Us</h2>
                        <p>Behind the scenes at IBI. Explore the team, our values and much more</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Polygon</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Hyperledger</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Ethereum</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Algorand</h5>
                            </div>
                        </Carousel>
                        {/* <h2>Learn. Execute. Master.</h2>
                        <p>Indian Blockchain Institute (IBI), the training division of Snapper Future Tech was founded with the primary goal of developing a productive and efficient Blockchain talent pool for the industry. With this goal in mind, IBI provides an entire ecosystem for upskilling in Blockchain through its range of training services for individuals, corporates, and academic institutions.
Our training offerings include NASSCOM accredited programs, tailored corporate programs, setting up a Blockchain Centre of Excellence, and faculty development programmes for academic institutions. Our experts are proficient in a variety of blockchain frameworks, including Ethereum, Hyperledger, Algorand, and Polygon. We are one of the few authorised Service Providers and Training Partners of Hyperledger in the entire world.</p> */}
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
