import React, { createContext, useContext, useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// 🎨 Définition des thèmes
const lightTheme = {
  background: "#FFFFFF",
  text: "#333333",
  primary: "#9A48D0",
  accent: "#B288C0",
  success: "#7BC950",
};

const darkTheme = {
  background: "#333333",
  text: "#FFFFFF",
  primary: "#9A48D0",
  accent: "#B288C0",
  success: "#7BC950",
};

// 🌍 Global styles : fond, texte, titres, police
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: 0.3s ease;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6, p, a, span {
    color: ${(props) => props.theme.text};
  }

  a {
    text-decoration: none;
    margin-right: 10px;
    color: ${(props) => props.theme.primary};
  }

  a:hover {
    text-decoration: underline;
  }
`;

// 🌗 Contexte
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

// 💡 Composant qui englobe toute l'app
export const ThemeSwitcher = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// 🔘 Bouton pour changer le thème
export const ThemeToggleButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: #ffffff;
  border: none;
  padding: 8px 14px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.accent};
  }
`;
