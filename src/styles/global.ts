import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* New premium palette */
    --primary: #1e3a8a;
    --accent: #3b82f6;
    --bg-dark: #0f172a;
    --bg-light: #f8fafc;
    --text-dark: #0f172a;
    --text-light: #f8fafc;
    --success: #10b981;
    --border-light: rgba(15, 23, 42, 0.15);

    /* Backward-compatible old variables used by existing components */
    --black: #0f172a;
    --blue: #3b82f6;
    --pink: #2563eb;
    --green: #10b981;
    --white: #f8fafc;
    --gray: #94a3b8;

    scroll-padding-top: 5rem;
  }

  html.light body {
    transition: 0.3s;
    background-color: var(--bg-light);
    color: var(--text-dark);
  }

  html.light .logo {
    color: var(--text-dark);
  }

  html.light header.header-fixed {
    transition: 0.3s;
    backdrop-filter: blur(10px);
    background-color: rgba(248, 250, 252, 0.9);
  }

  html.light header.header-fixed a {
    color: var(--text-dark);
  }

  html.light header.header-fixed .menu,
  html.light header.header-fixed .menu:before,
  html.light header.header-fixed .menu:after {
    background-color: var(--text-dark);
  }

  html.light footer.footer {
    background-color: rgba(37, 99, 235, 0.08);
    color: var(--text-dark);
    border-top: 1px solid var(--border-light);
  }

  html.light form input,
  html.light form textarea {
    border: 1px solid var(--text-dark);
    color: var(--text-dark);
  }

  html.light form input::placeholder,
  html.light form textarea::placeholder {
    color: rgba(15, 23, 42, 0.65);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--bg-dark);
    color: var(--text-light);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  body, input, textarea, button {
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, .button {
    background: linear-gradient(135deg, var(--accent), var(--primary));
    color: white;
    border: none;
    border-radius: 5rem;
    padding: 1rem 2rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover, .button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.25);
  }

  .logo {
    font-size: clamp(1.8rem, 4vw, 3rem);
    color: var(--text-light);
    font-weight: 700;
  }
`;