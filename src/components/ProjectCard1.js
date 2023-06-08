import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, about, about1, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <h5>{about}</h5>
          <h5>{about1}</h5>

        </div>
      </div>
    </Col>
  )
}
