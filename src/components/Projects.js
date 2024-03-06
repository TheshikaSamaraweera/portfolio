import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/motelui.png";
import projImg2 from "../assets/img/famisy.png";
import projImg3 from "../assets/img/cofee.png";
import projImg4 from "../assets/img/nest.jpeg";
import projImg5 from "../assets/img/bookml.png";
import projImg6 from "../assets/img/famisyui.png";
import projImg7 from "../assets/img/milkui.png";
import projImg8 from "../assets/img/filmui.png";
import projImg9 from "../assets/img/posui.png";
import projImg10 from "../assets/img/mobileui.png";
import projImg11 from "../assets/img/boosml.png";
import projImg12 from "../assets/img/mobile.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Motel Food Manager",
      description: "MERN stack web application ",
      imgUrl: projImg1,
      githubUrl: "https://github.com/TheshikaSamaraweera/MERN_Food-Manager"
    },
    {
      title: "pharmacy App",
      description: "ReactJs,NodeJs,JWT authentication",
      imgUrl: projImg2,
      githubUrl: "https://github.com/TheshikaSamaraweera/Pharmacy-App"
    },
    {
      title: "Coffee Wbsite",
      description: "Html,Javascript,CSS",
      imgUrl: projImg3,
      githubUrl: "https://github.com/TheshikaSamaraweera/Black_Cofee"
    },
    {
      title: "CRUD Application",
      description: "NestJs",
      imgUrl: projImg4,
      githubUrl: "https://github.com/TheshikaSamaraweera/CRUD-REST-APP"
    },
   
  ];
  const projects3 = [
    {
      title: "ML Book Recommended System(collebarative)",
      description: "Machine Learning , Numpy, Pyhon",
      imgUrl:projImg5,
      githubUrl: "https://github.com/TheshikaSamaraweera/book_recomendation_system"
      
    },
    {
      title: "ML Book Recommended System",
      description: "Machine Learning , Numpy, Pyhon",
      imgUrl: projImg11,
      githubUrl: "https://github.com/TheshikaSamaraweera/ML_Book_Recommendation_System"
    },
    {
      title: "pharmacy App UI",
      description: "Figma,Ui/UX",
      imgUrl: projImg6,
      githubUrl: "//www.figma.com/file/xa151415FVEgBjb3XDVPsj/Pharmisy?type=design&mode=design&t=VIgObWy2dfErEvMw-1"
    },
    {
      title: "Milk web UI",
      description: "Figma,Ui/UX",
      imgUrl: projImg7,
      githubUrl: "//www.figma.com/file/YOG7B4rH6xRQbe55i7HHCQ/milkProduction?type=design&mode=design&t=VIgObWy2dfErEvMw-1"
    },
    {
      title: "Film Production App UI",
      description: "Figma,Ui/UX",
      imgUrl: projImg8,
      githubUrl: "//www.figma.com/file/41C9N2Dy4FqU5XODBMTi65/Untitled?type=design&mode=design&t=VIgObWy2dfErEvMw-1"
    },

      {title: "SaaS PoS App UI",
      description: "Figma,Ui/UX",
      imgUrl: projImg9,
      githubUrl: "//www.figma.com/file/htybHCxVpQLv0TL1C9IpIM/Untitled?type=design&mode=design&t=VIgObWy2dfErEvMw-1"
    },

    {title: "Mobile App UI",
    description: "Figma,Ui/UX",
    imgUrl: projImg10,
    githubUrl: "//www.figma.com/file/S0sE8E8hgCByDPJ60T5ioH/Untitled?type=design&mode=design&t=VIgObWy2dfErEvMw-1"
    },

    {title: "Motel App UI",
    description: "Figma,Ui/UX",
    imgUrl: projImg1,
    githubUrl: "//www.figma.com/file/3LflC4HcRU4qD6WHtRwJPi/Motel-Food-Manegment?type=design&node-id=0%3A1&mode=design&t=fU5tAOivw5MI3da4-1"
    },
   
  ];

  const projects2 = [
    {
      title: "Work manager",
      description: "Flutter,Dart,Firebase ",
      imgUrl: projImg12,
      githubUrl: "https://github.com/TheshikaSamaraweera/Work_Manager_Android"
    },
    
   
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web App</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile App</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Others</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
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
                      <Row>
                        {
                          projects2.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
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
