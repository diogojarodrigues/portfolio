import { Container, Row, Col, Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { motion, useInView, useAnimation } from "framer-motion";

import { BsGlobe, BsGithub } from "react-icons/bs";

import pomodoroPulse from "../assets/pomodoropulse(retangulo).png";
import consensusPaxos from "../assets/paxos-diagram.png";
import solveETH from "../assets/SolveETH(retangulo).png";
import humanaEthica from "../assets/humanaethica.png";

import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Pomodoro Pulse",
    description:
      "Pomodoro Pulse is a pomodoro timer designed for students and workers to enhance focus and increase productivity. Do you want to double your productivity? Give it a try!",
    shortDescription:
      "Pomodoro Pulse is a pomodoro timer designed for students and workers to enhance focus and increase productivity.",
    image: pomodoroPulse,
    link: "https://pomodoropulse.netlify.app",
    github: "https://github.com/diogojarodrigues/pomodoro",
  },
  {
    title: "Consensus Paxos",
    description: "An implementation of the Paxos algorithm for distributed consensus in fault-tolerant systems with reconfiguration.",
    shortDescription: "Paxos algorithm for distributed consensus in fault-tolerant systems.",
    image: consensusPaxos,
    link: null,
    github: "https://github.com/diogojarodrigues/Consensus-Paxos/",
},
{
    title: "Humana Ethica",
    description: "A full-stack app connecting users to volunteer opportunities for personal and social growth.",
    shortDescription: "App connecting users to volunteer opportunities.",
    image: humanaEthica,
    link: null,
    github: "https://github.com/diogojarodrigues/HumanaEthica/",
},
  {
    title: "SolveETH",
    description:
      "The SolveETH was my fisrt blockchain project where users can trade ETH for qualified answers. Me and my team build this project during the ETH Lisbon Hackathon in 36 hours, from scratch and without previous experience of web3.",
    shortDescription:
      "The SolveETH was my fisrt blockchain project where users can trade ETH for qualified answers.",
    image: solveETH,
    link: null,
    github: "https://github.com/diogojarodrigues/ETH-Global",
  },
];

const getVariants = (isMobile, index, type) => {
  const left = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const right = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const middle = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  let variant;

  if (isMobile === true) {
    if (index % 2 === 0) {
      switch (type) {
        case "title":
          variant = left;
          break;
        case "image":
          variant = right;
          break;
        case "text":
          variant = middle;
          break;
      }
    } else {
      switch (type) {
        case "title":
          variant = right;
          break;
        case "image":
          variant = left;
          break;
        case "text":
          variant = middle;
          break;
      }
    }
  } else {
    if (index % 2 === 0) {
      switch (type) {
        case "image":
          variant = left;
          break;
        case "title":
          variant = right;
          break;
        case "text":
          variant = middle;
          break;
      }
    } else {
      switch (type) {
        case "image":
          variant = right;
          break;
        case "title":
          variant = left;
          break;
        case "text":
          variant = middle;
          break;
      }
    }
  }
  return variant;
};

export default function Portfolio({ isMobile }) {
  const renderProjects = (isMobile, shortDescription) => {
    return projects.map((project, index) => {
      const TitleAnimated = () => {
        const titleRef = useRef(null);
        const isTitleVisible = useInView(titleRef, {
          once: true,
          amount: isMobile ? 0.5 : 0.2,
        });
        const titleAnimation = useAnimation();

        useEffect(() => {
          if (isTitleVisible) {
            titleAnimation.start("visible");
          }
        }, [isTitleVisible]);

        return (
          <motion.h1
            ref={titleRef}
            className="text-center mb-4"
            variants={getVariants(isMobile, index, "title")}
            initial="hidden"
            animate={titleAnimation}
            transition={{ duration: 1.3 }}
          >
            {project.title}
          </motion.h1>
        );
      };

      const TextAnimated = () => {
        const textRef = useRef(null);
        const isTextVisible = useInView(textRef, {
          once: true,
          amount: isMobile ? 0.5 : 1,
        });
        const textAnimation = useAnimation();

        useEffect(() => {
          if (isTextVisible) {
            textAnimation.start("visible");
          }
        }, [isTextVisible]);

        return (
          <>
            <motion.p
              ref={textRef}
              className="text-center px-3 mt-4 mb-3"
              variants={getVariants(isMobile, index, "text")}
              initial="hidden"
              animate={textAnimation}
              transition={{ duration: 2 }}
            >
              {shortDescription || isMobile
                ? project.shortDescription
                : project.description}
            </motion.p>
            <div className="d-flex align-items-center gap-2 mt-3">
  {project.github && (
    <a
      href={project.github}
      className="btn btn-secondary d-flex align-items-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsGithub className="me-2" /> GitHub
    </a>
  )}
  {project.link && (
    <a
      href={project.link}
      className="btn btn-primary d-flex align-items-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsGlobe className="me-2" /> Visit Website
    </a>
  )}
</div>
          </>
        );
      };

      const ImageAnimated = () => {
        const imageRef = useRef(null);
        const isImageVisible = useInView(imageRef, {
          once: true,
          amount: isMobile ? 0.5 : 0.5,
        });
        const imageAnimation = useAnimation();

        useEffect(() => {
          if (isImageVisible) {
            imageAnimation.start("visible");
          }
        }, [isImageVisible]);

        return (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <motion.div
              className="image-container mx-2"
              ref={imageRef}
              variants={getVariants(isMobile, index, "image")}
              initial="hidden"
              animate={imageAnimation}
              transition={{ type: "spring", duration: 2, bounce: 0.5 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fluid
                style={{
                  borderRadius: "2rem",
                  boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 0.3)",
                }}
              />
            </motion.div>
          </a>
          // </motion.div>
        );
      };

      if (isMobile === true) {
        return (
          <Container className="pb-5 mb-4" key={project.title}>
            <Row>
              <Col
                lg={6}
                className="d-flex flex-column justify-content-center align-items-center px-0"
              >
                <TitleAnimated />
                <ImageAnimated />
                <TextAnimated />
              </Col>
            </Row>
          </Container>
        );
      }

      return (
        <Container className="py-5 my-5" key={project.title}>
          <Row>
            {index % 2 === 0 ? (
              <>
                <Col>
                  <ImageAnimated />
                </Col>
                <Col
                  lg={6}
                  className="d-flex flex-column justify-content-center align-items-center px-5"
                >
                  <TitleAnimated />
                  <TextAnimated />
                </Col>
              </>
            ) : (
              <>
                <Col
                  lg={6}
                  className="d-flex flex-column justify-content-center align-items-center px-5"
                >
                  <TitleAnimated />
                  <TextAnimated />
                </Col>
                <Col>
                  <ImageAnimated />
                </Col>
              </>
            )}
          </Row>
        </Container>
      );
    });
  };

  const shortDescription = useMediaQuery({ maxWidth: 1199 });

  return (
    <Container
      fluid
      className="pt-5 pb-1 bg-gray-100"
      style={{ backgroundColor: "#ebd9c6" }}
      id="portfolio"
    >
      <Container className="my-5">
        <h1 style={{ fontSize: "3rem" }}>My Projects</h1>
      </Container>
      {renderProjects(isMobile, shortDescription)}
    </Container>
  );
}
