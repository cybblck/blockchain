import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/event1.jpeg";
import projImg2 from "../assets/img/event2.jpeg";
import projImg3 from "../assets/img/event3.jpeg";
import projImg4 from "../assets/img/event4.jpeg";
import projImg5 from "../assets/img/event5.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Team = () => {

  const team = [
    {
      title: "Blockchain Introductory Program",
      // description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Certified Ethereum Developer Program",
      // description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Deep Dive Into Decentralized Finance(DEFI)",
      // description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Faculty Development Programs",
      // description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Blockchain Center of Excellence",
      // description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Demo",
      // description: "Design & Development",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="blog">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Our Team</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Awards</Nav.Link>

                    
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          team.map((project, index) => {
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
                      <p>Conference on “Use of Smart Contract in Public Procurement and Supply Chain" on 17th-18th March 2023                       <a href="https://www.ajnifm.ac.in/event/conference-%E2%80%9Cuse-smart-contract-public-procurement-and-supply-chain-17th-18th-march-2023">see more</a>
</p>

<p>safeguarding dual use material and data using blockchain technology application.<br></br> <a href="https://www.crdfglobal.org/">see more</a></p>
<p>AEPC Japan India Industry Promotion Association. <br></br><a href="https://www.aepcindia.com/node">see more</a></p>
<p>Tsinghua Energy Hub<br></br>
Tsinghua International Blockchain Association <br></br>
<a href="https://www.linkedin.com/company/thu-tiba/about/">see more</a></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
