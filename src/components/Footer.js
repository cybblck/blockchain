import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
<<<<<<< HEAD
            {/* <p>Copyright 2023. All Rights Reserved</p> */}
=======
            <p>Copyright 2023. All Rights Reserved</p>
>>>>>>> d427370 (i completed expertise section and about us section and set all the images. remaining is services full section and some in contact us section)

      <Container>


        <Row className="align-items-center">
        <p>Copyright 2023. All Rights Reserved</p>

          <MailchimpForm />
          <p>Copyright 2023. All Rights Reserved</p>

          <Col size={12} sm={6}>
          <p>Copyright 2023. All Rights Reserved</p>

            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}
