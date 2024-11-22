import { Stack, Image, Button, Row, Col } from "react-bootstrap";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

import profilePicture from "../assets/profile-picture.jpeg";

export default function Hero({ isMobile }) {
  return (
    <div className="hero" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        <Image
          src={profilePicture}
          alt="Profile Picture"
          roundedCircle
          style={{ width: "20rem" }}
        />
      </motion.div>

      {/* Apply the animation to the header */}
      <motion.h1
        style={{ marginBottom: "1.2rem", marginTop: "2.2rem" }}
        className="h1-responsive text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Diogo Rodrigues
      </motion.h1>
      <motion.h4
        style={{ marginBottom: "5rem" }}
        className="text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Student, Developer & Self Learner
      </motion.h4>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
      >
        <Stack direction="horizontal" gap={3} className="mx-auto">
          <Button
            className="icon-link"
            target="_blank"
            href="https://www.linkedin.com/in/diogo-rodrigues-7181a0246/"
            variant="light"
          >
            <BsLinkedin />
            LinkedIn
          </Button>
          <Button
            className="icon-link"
            target="_blank"
            href="https://github.com/diogojarodrigues"
            variant="light"
          >
            <BsGithub />
            Github
          </Button>
        </Stack>
      </motion.div>
    </div>
  );
}
