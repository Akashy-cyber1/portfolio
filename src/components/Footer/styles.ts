import styled from "styled-components";


export const Container = styled.footer`
  background: var(--secondary, #1a1a1a);
  padding: 3rem 10rem;
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border, #333);
  
  .logo {
    font-size: 2.2rem;
    font-weight: 600;
    color: var(--text-primary, #ffffff);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--accent, #23ce6b);
    }
  }

  p {
    color: var(--text-secondary, #b0b0b0);
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    
    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      border-radius: 1rem;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
      
      &:hover {
        background: var(--accent, #23ce6b);
        border-color: var(--accent, #23ce6b);
        transform: translateY(-2px);
      }
    }
    
    img {
      width: 2.2rem;
      height: 2.2rem;
      filter: brightness(1);
    }
  }

  @media (max-width: 900px) {
    padding: 3rem 6rem;
    flex-direction: column;
    gap: 2.5rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 2.5rem 2rem;
    margin-top: 6rem;
    
    p {
      font-size: 1.3rem;
    }
    
    .social-media {
      gap: 1.2rem;
      
      a {
        width: 3.5rem;
        height: 3.5rem;
      }
      
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`
