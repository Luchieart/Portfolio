import { Row, Col, Container,Tab,Nav                                                                        } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Img1 from "../assets/img/Img1.png";
import Img5 from "../assets/img/img5.png";
import Img3 from "../assets/img/img3.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
export const Projects = () => {
    
    const projects = [
        {
          title: "Ecommerce Website",
          Stack: "HTML,CSS,JS,BOOTSTRAP",
          imgUrl: Img5,
        },
        {
          title: "Image Lookup App",
          Stack: "HTML,CSS,JS AXIOS,REACT,API",
          imgUrl: Img5,
        },
        {
          title: "A simple Form",
          Stack: "HTML,CSS,BOOTSTRAP",
          imgUrl:  Img5,
        },
      /*   {
          title: "An Online Fashion Shop",
          Stack: "HTML,CSS,JS,BOOTSTRAP",
          imgUrl: projImg1,
        },
        {
          title: "Playstation Website clone",
          Stack: "HTML,CSS,JS",
          imgUrl: Img3 ,
        }, */
        
      ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="first">Tab one</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Tab two</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third">
          Tab three
        </Nav.Link>
      </Nav.Item>
                            </Nav>
                            <Tab.Content>
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
                                <Tab.Pane eventKey="second">Text Second</Tab.Pane>
                                <Tab.Pane eventKey="third">Text third</Tab.Pane>
                            </Tab.Content>
        </Tab.Container>
        </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="bg color"></img>
          </section>
      )
}