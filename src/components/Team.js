import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard1";
import projImg1 from "../assets/img/amit.jpeg";
import projImg2 from "../assets/img/omji.jpeg";
import projImg3 from "../assets/img/shar.jpeg";
import projImg4 from "../assets/img/zee.jpeg";
import projImg5 from "../assets/img/pan.jpeg";
import projImg6 from "../assets/img/var.jpeg";
import projImg7 from "../assets/img/man.jpeg";
import projImg8 from "../assets/img/vij.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Team = () => {

  const team = [
    {
      title: "Dr. Amit K. Vishwakarma",
      about: "Director AP Blockchain",
      description: ". IIT Kanpur, Tsinghua University Beijing ",
      imgUrl: projImg1,
    
    },
    {
      title: "Dr. Omji Pandey",
      about: "Senior Advisor AP Blockchain",
      description: "Ph.D. IIT Kanpur, University of Saskatchewan",
      imgUrl: projImg2,
    },
    {
      title: "Dr. Sharad Kumar Yadav ",
      about: "Advisor AP Blockchain",
      description: "Ph.D. IISc Bangalore, IIT Madras, University of Surrey",
      imgUrl: projImg3,
    },
    {
      title: "Dr. Zeeshan Akhtar",
      about: "Advisor AP Blockchain",

      description: "Ph.D. IIT Kanpur",
      imgUrl: projImg4,
    },
    {
      title: "Dr. Pankaj Kumar Mishra",
      about: "Advisor AP Blockchain",
      description: "Ph.D. IISc Bangalore, IIT kanpur",
      imgUrl: projImg5,
    },
    {
      title: "Dr. Varsha Lohani",
      about: "Advisor AP Blockchain",
      description: "Ph.D. IIT Kanpur",
      imgUrl: projImg6,
    },
    {
        title: "Mayank Singh",
        about: "Advisor AP Blockchain",
        description: "VP at JPMorgan Chase & Co. | Tech Lead | React JS | Node JS | GraphQL | Automation Testing",
        imgUrl: projImg7,
      },
      {
        title: "Vijay Kumar Sharma",
        description: "M.Tech MNNIT Allahbad, Prayagraj",
        about1: "Expert- Python Programming/AI/ML/Data Science",
        about: "Advisor AP Blockchain",

        imgUrl: projImg8,
      },
  ];

  return (
    <section className="project" id="team">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Our Team</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
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
