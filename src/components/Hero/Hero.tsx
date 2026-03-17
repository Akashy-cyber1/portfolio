import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Akash Yadav</h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Aspiring Full Stack Developer</h3>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">
            I build modern, responsive, and practical web applications while continuously improving my technical and problem-solving skills.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <NavHashLink smooth to="#project" className="button">
            View My Projects
          </NavHashLink>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/akash-yadav-662017244" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/Akashy-cyber1" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://wa.me/917007592695?text=Hello! I found your contact through the portfolio site." target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
        </ScrollAnimation>
      </div>

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}