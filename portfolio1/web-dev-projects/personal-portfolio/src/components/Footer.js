import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import {ActivitySection} from "./ActivitySection";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
         <h2>Activity</h2>
      <Container>
        <Row className="align-items-center">
          <ActivitySection />
          <Col size={12} sm={6}>
            <div className="logo-circle">
            <img src={logo} alt="Logo" style={{ width: '50px', height: 'auto' }}/>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abhishek-yadav-5849301b7/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/abhiyadav3114?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Insta" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved to me 😅</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
