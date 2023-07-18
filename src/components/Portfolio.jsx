import { Container, Row, Col, Image } from "react-bootstrap";

const projects = [
    {
        title: "Pomodoro Pulse", 
        description: "Pomodoro Pulse is a pomodoro timer designed for students and workers to enhance focus and increase productivity. Do you want to double your productivity? Give it a try!",
        image: "src/assets/pomodoropulse(retangulo).png", 
        link: "https://pomodoropulse.netlify.app",
        github: "https://github.com/diogojarodrigues/pomodoro"
    },
    {
        title: "Store Manager", 
        description: "The Store Manager is a comprehensive full-stack warehouse management system that manages customers and suppliers in a store. Efficiently handle customer data, track supplier information, and streamline interactions with both parties.",
        image: "src/assets/webstore(retangulo).png", 
        link: null,
        github: "https://github.com/diogojarodrigues/E-Commerce"
    },
    {
        title: "SolveETH", 
        description: "The SolveETH was my fisrt blockchain project where users can trade ETH for qualified answers. Me and my team build this project during the ETH Lisbon Hackathon in 36 hours, from scratch and without previous experience of web3.",
        image: "src/assets/SolveETH(retangulo).png", 
        link: null,
        github: "https://github.com/diogojarodrigues/ETH-Global"
    },
]

export default function Portfolio() {

    const renderProjects = () => {
        return projects.map((project, index) => {

            console.log(project);

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

            const TextComponent = () => {
                return (
                    <Col lg={6} className="d-flex flex-column justify-content-center align-items-center px-5">
                        <h1 className="mb-5">{project.title}</h1>
                        <p className="text-center px-3">{project.description}</p>
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


    return (
        <Container fluid className="pt-5 pb-1 bg-gray-100" style={{ backgroundColor: "#ebd9c6" }} id="portfolio">
            <Container className="my-5">
                <h1 style={{fontSize: "3rem"}}>My Projects</h1>
            </Container>
            {renderProjects()}
        </Container>
    )
}