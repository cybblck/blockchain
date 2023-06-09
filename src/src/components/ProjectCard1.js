import { Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';

export const ProjectCard = ({ title, about, about1, description, imgUrl, lnurl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <span><br></br>{about1}</span>

          <h5>{about}</h5>
          <div className="social-icon">
                <a href="{url}"><img src={navIcon1} alt="" /></a>
              </div>
        </div>
      </div>
    </Col>
  )
}
