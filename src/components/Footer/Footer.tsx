import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://portfolio-rho-jet-61.vercel.app/" className="logo">
        Akash Yadav
      </a>
      <div>
        <p>
          © 2024 Akash Yadav. Made with <img src={reactIcon} alt="React" />
        </p>
      </div>
      <div className="social-media">
        <a
          href="www.linkedin.com/in/akashyprofile1"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/Akashy-cyber1/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://wa.me/917007592695"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>
        <a
          href="https://t.me/akashyadav"
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
        >
          <img src={telegram} alt="Telegram" />
        </a>
        <a
          href="https://instagram.com/akashyadav"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
