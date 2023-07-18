import { Stack, Image, Button, Row, Col } from "react-bootstrap";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <Image src="src/assets/profile-picture.jpeg" roundedCircle style={{ width: "20rem" }} />
      <h1 style={{ marginBottom: "1.2rem", marginTop: "2.2rem" }} className="h1-responsive text-center">Diogo Rodrigues</h1>
      <h4 style={{ marginBottom: "5rem"}}>Student, Developer & Self Learner</h4>

      <Stack direction="horizontal" gap={3} className="mx-auto">
            <Button className="icon-link" target="blank" href="https://www.linkedin.com/in/diogo-rodrigues-7181a0246/" variant="light">
                <BsLinkedin />
                LinkedIn
            </Button>
            <Button className="icon-link" target="blank" href="https://github.com/diogojarodrigues" variant="light">
                <BsGithub />
                Github
            </Button>
      </Stack>
    </div>
  );
}
