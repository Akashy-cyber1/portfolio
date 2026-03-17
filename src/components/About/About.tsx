import { Container } from "./styles";
import PHOTO from "../../assets/Akash.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Akash Yadav – Aspiring Full Stack Developer from Farrukhabad, Uttar Pradesh. Passionate about creating modern web applications through hands-on project building and self-directed learning. Focused on frontend and backend technologies to deliver complete, deployable solutions.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            My development approach prioritizes clean code, responsive design, and real-world deployment workflows using Git and GitHub. Constantly strengthening skills in full stack development to contribute effectively in professional environments.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Actively building projects that demonstrate practical problem-solving and technical proficiency across the stack.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education</h3>
            <h4>Diploma in Computer Science (Polytechnic)</h4>
            <p>Core computing and programming foundation</p>
            <h4>B.Tech in Computer Science</h4>
            <p>Advanced software engineering and development</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Main Skills</h3>
        </ScrollAnimation>

        <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', gap: '1rem', padding: 0 }}>
          <li>React</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>Styled Components</li>
          <li>Next.js</li>
          <li>Django</li>
          <li>PostgreSQL</li>
          <li>Git/GitHub</li>
        </ul>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={PHOTO} alt="Akash Yadav" style={{ borderRadius: "50%" }} />
        </ScrollAnimation>
      </div>
    </Container>
  )
}