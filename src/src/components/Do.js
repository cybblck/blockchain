import meter1 from "../assets/img/THUBA.jpeg";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import meter2 from "../assets/img/UDAAN.jpeg";
import meter3 from "../assets/img/IBA.jpeg";
import meter4 from "../assets/img/iitk.jpeg";
import meter5 from "../assets/img/sk.png";
import meter6 from "../assets/img/abes.png";

import meter7 from "../assets/img/tu.jpeg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Do = () => {
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
    
    <section className="skill" id="what">
        <br></br><br></br>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>What We Do?</h2>



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
                    <div className="why">
                    {/* <p>Leadership:-</p>

                    <h6>
Dr. Amit Kumar Vishwakarma <br></br>
<a href=" https://www.linkedin.com/in/dr-amit-vishwakarma-0a4b79bb/	"> https://www.linkedin.com/in/dr-amit-vishwakarma-0a4b79bb</a>		<br></br>	
Dr. Omji Pandey <br></br>
<a href="linkedin.com/in/om-jee-pandey-b90054116/">linkedin.com/in/om-jee-pandey-b90054116</a>		<br></br>	
Vijay Kumar Sharma<br></br>
<a href="https://www.linkedin.com/in/vijaysharmacs/	">https://www.linkedin.com/in/vijaysharmacs</a>		<br></br>	
</h6> */}
</div>
<hr></hr>
<div className="why">
<h3>Blockchain Training</h3>
<p align="justify">Blockchain training aims to provide better technical education to new generation youth. Emerging technology like blockchain, Metaverse, NFT, etc. helps students understand the current technological advancement in Web3. Technology is emerging, so there will be many requirements in the market for jobs. As Web3 trainers, we provide the best education to students so they can compete in the market and get a job in this field.</p>
<h3>AI, ML Training </h3>
<p align="justify">AI, ML training aims to provide better technical education to new generation youth. Emerging technology like AI, ML, Metaverse, helps students understand the current technological advancement in Web3. Technology is emerging, so there will be many requirements in the market for jobs. As Web3 trainers, we provide the best education to students so they can compete in the market and get a job in this field.</p>
<h3>Faculty Development</h3>
<p align="justify">The goal of India's higher education system is to achieve sustainable development and faster growth rates, which might be made possible by the production, sharing, and use of knowledge. All levels of higher education in the nation are seeing a steady growth pattern characterised by the creation of new institutions and the enhancement of already existing ones. Over the next few years, there will be a significant demand for skilled instructors and faculty members, making it crucial for states to increase their institutional capacities in terms of both infrastructure and faculty members who are both qualified and trained.</p>
</div>

                    </div>


                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
