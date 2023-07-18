import { Container, Row, Col, Image } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';

import pomodoroPulse from "../assets/pomodoropulse(retangulo).png";
import webstore from "../assets/webstore(retangulo).png";
import solveETH from "../assets/SolveETH(retangulo).png";


const projects = [
    {
        title: "Pomodoro Pulse", 
        description: "Pomodoro Pulse is a pomodoro timer designed for students and workers to enhance focus and increase productivity. Do you want to double your productivity? Give it a try!",
        shortDescription: "Pomodoro Pulse is a pomodoro timer designed for students and workers to enhance focus and increase productivity.",
        image: pomodoroPulse, 
        link: "https://pomodoropulse.netlify.app",
        github: "https://github.com/diogojarodrigues/pomodoro"
    },
    {
        title: "Store Manager", 
        description: "The Store Manager is a comprehensive full-stack warehouse management system that manages customers and suppliers in a store. Efficiently handle customer data, track supplier information, and streamline interactions with both parties.",
        shortDescription: "The Store Manager is a comprehensive full-stack warehouse management system that manages customers and suppliers in a store.",
        image: webstore, 
        link: null,
        github: "https://github.com/diogojarodrigues/E-Commerce"
    },
    {
        title: "SolveETH", 
        description: "The SolveETH was my fisrt blockchain project where users can trade ETH for qualified answers. Me and my team build this project during the ETH Lisbon Hackathon in 36 hours, from scratch and without previous experience of web3.",
        shortDescription: "The SolveETH was my fisrt blockchain project where users can trade ETH for qualified answers.",
        image: solveETH, 
        link: null,
        github: "https://github.com/diogojarodrigues/ETH-Global"
    },
]

export default function Portfolio({isMobile}) {

    const renderProjects = (isMobile, shortDescription) => {
        return projects.map((project, index) => {
            
            const ImageComponent = () => {
                return (
                    <Col lg={6} className="px-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <div className="image-container">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fluid
                            style={{ borderRadius: "2rem", boxShadow: '0px 0px 15px 3px rgba(0, 0, 0, 0.3)' }}
                        />
                        </div>
                    </a>
                    </Col>
                )
            }

            if (isMobile === true) {
                return (
                    <Container className="pb-5 mb-4" key={project.title} >
                    <Row className="d-flex flex-column justify-items-center">
                        <h1 className="text-center mb-4">{project.title}</h1>
                        <ImageComponent />
                        <p className="text-center px-3 mt-4 mb-3">{project.shortDescription}</p>
                        {project.link && <a href={project.link} style={{width: "auto"}} className="btn btn-primary my-3" target="_blank" rel="noopener noreferrer">Visit Website</a>}
                    </Row>
                    </Container>
                ) 
            }

            const TextComponent = () => {
                return (
                    <Col lg={6} className="d-flex flex-column justify-content-center align-items-center px-5">
                        <h1 className="text-center mb-5">{project.title}</h1>
                        <p className="text-center px-3">{shortDescription ? project.shortDescription : project.description}</p>
                        {project.link && <a href={project.link} className="btn btn-primary mt-3" target="_blank" rel="noopener noreferrer">Visit Website</a>}
                    </Col>
                )
                
            }

            return (
                <Container className="py-5 my-5" key={project.title} >
                <Row>
                    {index % 2 === 0 ? (
                        <>
                        <ImageComponent />
                        <TextComponent />
                        </>
                    ) : (
                        <>
                        <TextComponent />
                        <ImageComponent />
                        </>
                    )}
                </Row>
                </Container>
            )
        })
    }

    const shortDescription = useMediaQuery({ maxWidth: 1199 });

    return (
        <Container fluid className="pt-5 pb-1 bg-gray-100" style={{ backgroundColor: "#ebd9c6" }} id="portfolio">
            <Container className="my-5">
                <h1 style={{fontSize: "3rem"}}>My Projects</h1>
            </Container>
            {renderProjects(isMobile, shortDescription)}
        </Container>
    )
}