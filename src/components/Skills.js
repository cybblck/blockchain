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
<<<<<<< HEAD
<<<<<<< HEAD
                        <p>Trusted Partner</p>
=======
                        <p>WE SPECIALIZE IN</p>
>>>>>>> 15b34aa ( i completed home page,Expertise section and About us section and set all the images. now remaining is services sections page and some changes in contact us section.)
=======
                        <p>Trusted Partner</p>
>>>>>>> d427370 (i completed expertise section and about us section and set all the images. remaining is services full section and some in contact us section)



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

<<<<<<< HEAD
<<<<<<< HEAD
                      
=======
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      <Nav.Link eventKey="first">Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
>>>>>>> 15b34aa ( i completed home page,Expertise section and About us section and set all the images. now remaining is services sections page and some changes in contact us section.)
=======
                      
>>>>>>> d427370 (i completed expertise section and about us section and set all the images. remaining is services full section and some in contact us section)
                        {/* <h2>Learn. Execute. Master.</h2>
                        <p>Indian Blockchain Institute (IBI), the training division of Snapper Future Tech was founded with the primary goal of developing a productive and efficient Blockchain talent pool for the industry. With this goal in mind, IBI provides an entire ecosystem for upskilling in Blockchain through its range of training services for individuals, corporates, and academic institutions.
Our training offerings include NASSCOM accredited programs, tailored corporate programs, setting up a Blockchain Centre of Excellence, and faculty development programmes for academic institutions. Our experts are proficient in a variety of blockchain frameworks, including Ethereum, Hyperledger, Algorand, and Polygon. We are one of the few authorised Service Providers and Training Partners of Hyperledger in the entire world.</p> */}
                    <div className="why">
<<<<<<< HEAD
                    {/* <p>Leadership:-</p>
=======
                    <p>Leadership:-</p>
>>>>>>> d427370 (i completed expertise section and about us section and set all the images. remaining is services full section and some in contact us section)

                    <h6>
Dr. Amit Kumar Vishwakarma <br></br>
<a href=" https://www.linkedin.com/in/dr-amit-vishwakarma-0a4b79bb/	"> https://www.linkedin.com/in/dr-amit-vishwakarma-0a4b79bb</a>		<br></br>	
Dr. Omji Pandey <br></br>
<a href="linkedin.com/in/om-jee-pandey-b90054116/">linkedin.com/in/om-jee-pandey-b90054116</a>		<br></br>	
Vijay Kumar Sharma<br></br>
<a href="https://www.linkedin.com/in/vijaysharmacs/	">https://www.linkedin.com/in/vijaysharmacs</a>		<br></br>	
<<<<<<< HEAD
</h6> */}
</div>
<hr></hr>
<div className="why">
<h3>Why Us</h3>
<p>We prioritize your growth</p>
<h3>Our Vision</h3>
<p>We believe in the work with quality and accuracy. We want to be recognized as the trusted, innovative, reliable, and user-friedly service provider in education sector</p>
<h3>Our Mission</h3>
=======
</h6>
</div>

<div className="why">
<h6>Why Us</h6>
<p>We prioritize your growth</p>
<h6>Our Vision</h6>
<p>We believe in the work with quality and accuracy. We want to be recognized as the trusted, innovative, reliable, and user-friedly service provider in education sector</p>
<h6>Our Mission</h6>


>>>>>>> d427370 (i completed expertise section and about us section and set all the images. remaining is services full section and some in contact us section)
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
