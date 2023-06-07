import meter1 from "../assets/img/polygon-logo-square-official.png";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import meter2 from "../assets/img/hyperledger-logo-square-official.png";
import meter3 from "../assets/img/ethereum-logo-square-black.png";
import meter4 from "../assets/img/algorand_square_logo_black-official.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Team = () => {
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
    <section className="team" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Us</h2>
                        <p>Trusted Partner</p>



                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>TIBA 	YARNA Labs	IIT Kanpur</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Tsinghua University Beijing 	</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Seth visambhar nath college </h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>lucknow ABES ghaziabad </h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>5Udaan Skill Academy </h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>India Blockchain Alliance </h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>India Blockchain Alliance  </h5>
                            </div>
                        </Carousel>

                      
                        {/* <h2>Learn. Execute. Master.</h2>
                        <p>Indian Blockchain Institute (IBI), the training division of Snapper Future Tech was founded with the primary goal of developing a productive and efficient Blockchain talent pool for the industry. With this goal in mind, IBI provides an entire ecosystem for upskilling in Blockchain through its range of training services for individuals, corporates, and academic institutions.
Our training offerings include NASSCOM accredited programs, tailored corporate programs, setting up a Blockchain Centre of Excellence, and faculty development programmes for academic institutions. Our experts are proficient in a variety of blockchain frameworks, including Ethereum, Hyperledger, Algorand, and Polygon. We are one of the few authorised Service Providers and Training Partners of Hyperledger in the entire world.</p> */}
                    <div className="why">
                    <p>Leadership:-</p>

                    <h6>
Dr. Amit Kumar Vishwakarma <br></br>
<a href=" https://www.linkedin.com/in/dr-amit-vishwakarma-0a4b79bb/	"> https://www.linkedin.com/in/dr-amit-vishwakarma-0a4b79bb</a>		<br></br>	
Dr. Omji Pandey <br></br>
<a href="linkedin.com/in/om-jee-pandey-b90054116/">linkedin.com/in/om-jee-pandey-b90054116</a>		<br></br>	
Vijay Kumar Sharma<br></br>
<a href="https://www.linkedin.com/in/vijaysharmacs/	">https://www.linkedin.com/in/vijaysharmacs</a>		<br></br>	
</h6>
</div>

<div className="why">
<h6>Why Us</h6>
<p>We prioritize your growth</p>
<h6>Our Vision</h6>
<p>We believe in the work with quality and accuracy. We want to be recognized as the trusted, innovative, reliable, and user-friedly service provider in education sector</p>
<h6>Our Mission</h6>


<p>Your growth is our mission. Our mission is to technologically educate each and every indiciduals</p>
</div>

                    </div>


                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
