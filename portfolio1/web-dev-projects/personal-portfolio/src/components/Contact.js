
// import { Container, Row, Col } from "react-bootstrap";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { AiOutlineFilePdf } from "react-icons/ai";
// import contact from "../assets/img/contact.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Contact = () => {
//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <img
//                   className={isVisible ? "animate__animated animate__zoomIn" : ""}
//                   src={contact}
//                   alt="Contact Us"
//                   style={{ borderRadius: "70px" }}
//                 />
//               )}
//             </TrackVisibility>
//           </Col>
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                   <h2>Get In Touch</h2>
//                   <ul className="contact-links">
//                     <li>
//                       <FaLinkedin className="contact-icon" />
//                       <a href="https://www.linkedin.com/in/abhishek-yadav-5849301b7/" target="_blank" rel="noopener noreferrer" className="white-link">LinkedIn</a>

//                     </li>
//                     <li>
//                       <FaGithub className="contact-icon" />
//                       <a href="https://github.com/Abhiyadav3114" target="_blank" rel="noopener noreferrer" className="white-link">GitHub</a>
//                     </li>
//                     <li>
//                       <AiOutlineFilePdf className="contact-icon" />
//                       <a href="https://drive.google.com/file/d/1kJxdMOX1zEmM-iZMtwcHUYglQ9NE_10v/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="white-link">CV (Google Drive)</a>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { AiOutlineFilePdf } from "react-icons/ai";
import contact from "../assets/img/contact.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contact}
                  alt="Contact Us"
                  style={{ borderRadius: "70px" }}
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <ul className="contact-links">
                    <li>
                      <FaLinkedin className="contact-icon" />
                      <a href="https://www.linkedin.com/in/abhishek-yadav-5849301b7/" target="_blank" rel="noopener noreferrer" className="white-link">LinkedIn</a>
                    </li>
                    <li>
                      <FaGithub className="contact-icon" />
                      <a href="https://github.com/Abhiyadav3114" target="_blank" rel="noopener noreferrer" className="white-link">GitHub</a>
                    </li>
                    <li>
                      <AiOutlineFilePdf className="contact-icon" />
                      <a href="https://drive.google.com/file/d/1kJxdMOX1zEmM-iZMtwcHUYglQ9NE_10v/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="white-link">CV (Google Drive)</a>
                    </li>
                    <li>
                      <FaEnvelope className="contact-icon" />
                      <a href="mailto:abhiyadav3114@gmail.com" className="white-link"> abhiyadav3114@gmail.com </a>
                    </li>
                  </ul>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
