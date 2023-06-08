import meter1 from "../assets/img/THUBA.jpeg";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import meter2 from "../assets/img/UDAAN.jpeg";
import meter3 from "../assets/img/IBA.jpeg";
import meter4 from "../assets/img/iitk.jpeg";
import meter5 from "../assets/img/sk.png";
import meter6 from "../assets/img/abes.png";

import meter7 from "../assets/img/tu.jpeg";

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

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
                        
                    <div className="why">
                    <h3>Leadership</h3>
                    <h5><div className="social-icon">
                <a href="https://www.linkedin.com/in/dr-amit-vishwakarma-0a4b79bb/"><img src={navIcon1} alt="" /></a></div> Dr. Amit Kumar Vishwakarma</h5>
                <h5><div className="social-icon">
                <a href="https://linkedin.com/in/om-jee-pandey-b90054116/"><img src={navIcon1} alt="" /></a></div> Dr. Omji Pandey</h5>
                <h5><div className="social-icon">
                <a href="https://www.linkedin.com/in/vijaysharmacs/"><img src={navIcon1} alt="" /></a></div> Vijay Kumar Sharma</h5>
</div>
<div className="why">
<h3>Why Us</h3>
<p align="justify">We prioritize your growth</p>
<h3>Our Vision</h3>
<p align="justify">We believe in the work with quality and accuracy. We want to be recognized as the trusted, innovative, reliable, and user-friedly service provider in education sector</p>
<h3>Our Mission</h3>
<p align="justify">Your growth is our mission. Our mission is to technologically educate each and every indiciduals</p>
</div>
<hr></hr>

<h3>Trusted Partner</h3><br></br>



                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>THUBA</h5>
                            </div>
                            {/* <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>YARNA Labs</h5>
                            </div> */}
                            {/* <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>IIT Kanpur</h5>
                            </div>  */}
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Tsinghua University, Beijing</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Seth visambhar nath college, Lucknow</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>ABES, Ghaziabad </h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Udaan Skill Academy</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>India Blockchain Alliance  </h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter5} alt="Image" /> */}
                                <h5>Ms. Singh Academy (UK)  </h5>
                            </div>
                        </Carousel>
                        {/* <div className="table"> */}
    {/* <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
        </tr>
        <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
        </tr>
        <tr>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
        </tr>
        <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
        </tr>
    </table> */}
{/* </div> */}

                      
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
