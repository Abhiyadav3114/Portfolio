
// import { Container, Row, Col } from "react-bootstrap";
// import activityImg from "../assets/img/activity.jpg";

// export const ActivitySection = () => {
//   return (
//     <section className="activity">
//       <Container>
//         <Row className="align-items-center">
//           <Col xs={12} md={6}>
//             <div>
              
//               <p>
//                 <h1>Capgemini Club</h1>
//                 I am an enthusiastic member of the Capgemini Club, actively participating in various events and activities. Recently, I had the privilege of competing against 50 participants in an event, where I proudly secured a position among the top 5. This achievement highlights my passion, dedication, and ability to excel in challenging environments. Such experiences have greatly enriched my journey, allowing me to broaden my horizons and develop invaluable skills that contribute to my personal and professional growth.
//               </p>
//             </div>
//           </Col>
//           <Col xs={12} md={6}>
//             <img src={activityImg} alt="Activity" />
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// import { Container, Row, Col } from "react-bootstrap";
// import activityImg from "../assets/img/activity.jpg";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const ActivitySection = () => {
//   return (
//     <section className="activity">
//       <Container >
//         <Row className="align-items-center">
//           <Col xs={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
//                   <div>
//                     <h1>Capgemini Club</h1>
//                     <p>
//                       I am an enthusiastic member of the Capgemini Club, actively participating in various events and activities. Recently, I had the privilege of competing against 50 participants in an event, where I proudly secured a position among the top 5. This achievement highlights my passion, dedication, and ability to excel in challenging environments. Such experiences have greatly enriched my journey, allowing me to broaden my horizons and develop invaluable skills that contribute to my personal and professional growth.
//                     </p>
//                   </div>
//                 </div>
//               }
//             </TrackVisibility>
//           </Col>
//           <Col xs={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
//                   <img src={activityImg} alt="Activity" />
//                 </div>
//               }
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// import { Container, Row, Col } from "react-bootstrap";
// import activityImg from "../assets/img/activity.jpg";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const ActivitySection = () => {
//   return (
//     <section className="activity">
//       <div className="rounded" style={{ overflow: "hidden" }}>
//         <Container>
//           <Row className="align-items-center">
//             <Col xs={12} md={6}>
//               <TrackVisibility>
//                 {({ isVisible }) => (
//                   <div className={isVisible ? "animate__animated animate__fadeInLeft rounded p-4" : "rounded p-4"}>
//                     <div>
//                       <h1>Capgemini Club</h1>
//                       <p>
//                         I am an enthusiastic member of the Capgemini Club, actively participating in various events and activities. Recently, I had the privilege of competing against 50 participants in an event, where I proudly secured a position among the top 5. This achievement highlights my passion, dedication, and ability to excel in challenging environments. Such experiences have greatly enriched my journey, allowing me to broaden my horizons and develop invaluable skills that contribute to my personal and professional growth.
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </TrackVisibility>
//             </Col>
//             <Col xs={12} md={6}>
//               <TrackVisibility>
//                 {({ isVisible }) => (
//                   <div className={isVisible ? "animate__animated animate__fadeInRight rounded" : "rounded"}>
//                     <img src={activityImg} alt="Activity" className="img-fluid" />
//                   </div>
//                 )}
//               </TrackVisibility>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </section>
//   );
// };

import { Container, Row, Col } from "react-bootstrap";
import activityImg from "../assets/img/activity.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const ActivitySection = () => {
  return (
    <section className="activity">
      <div className="rounded-container">
        <Container className="rounded p-4">
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <div>
                      <h1>Capgemini Club</h1>
                      <p>
                        I am an enthusiastic member of the Capgemini Club, actively participating in various events and activities. Recently, I had the privilege of competing against 50 participants in an event, where I proudly secured a position among the top 5. This achievement highlights my passion, dedication, and ability to excel in challenging environments. Such experiences have greatly enriched my journey, allowing me to broaden my horizons and develop invaluable skills that contribute to my personal and professional growth.
                      </p>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={activityImg} alt="Activity" className="img-fluid" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
