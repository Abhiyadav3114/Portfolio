import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import travelProject from "../assets/img/travelProject.png";
import chatappProject from "../assets/img/chatappProject.png";
import todoProjects from "../assets/img/todoProjects.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Travelling guide",
      description: "Design & Development, using html,css, javascript and bootstrap",
      imgUrl: travelProject,
    },
    {
      title: "Todo App using react",
      description: "Design & Development",
      imgUrl: todoProjects,
    },
    {
      title: "chat app in node Js",
      description: "Design & Development",
      imgUrl: chatappProject,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <p>In my portfolio, I am proud to present my diverse range of projects that showcase my skills and expertise in web development. One of my notable creations is a Traveling app, developed using HTML, CSS, JavaScript, and Bootstrap. This application allows users to explore various travel destinations, discover exciting activities, and plan their itineraries with ease. The user-friendly interface and responsive design enhance the overall user experience, making it a valuable tool for travel enthusiasts.</p>
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
                      <p> Additionally, I have developed a Chat app using Node.js and Socket.IO. This real-time messaging application enables users to connect and communicate with each other seamlessly. Leveraging the power of Node.js and Socket.IO, the app delivers instant messaging functionality with features like chat rooms, private messaging, and real-time notifications. The combination of these technologies ensures a reliable and efficient communication platform.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Furthermore, I have designed a Todo app using React and Bootstrap. This intuitive application assists users in managing their tasks and maintaining productivity. With a clean and organized interface, users can create, update, and track their to-do lists effortlessly. The integration of React allows for efficient state management and component reusability, while Bootstrap ensures a visually appealing and responsive design across different devices.</p>
                    </Tab.Pane>
                  </Tab.Content>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  
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
