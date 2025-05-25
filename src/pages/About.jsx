import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title onClick={() => navigate("/")}>💾 Code Wallet</Title>

      <Section>
        <h2>🛠️ Fonctionnalités</h2>
        <ul>
          <li>Ajouter, modifier, supprimer des fragments de code</li>
          <li>Organiser les fragments par tags</li>
          <li>Interface rapide et minimaliste</li>
          <li>Stockage local (pas besoin de connexion internet)</li>
        </ul>
      </Section>

      <Section>
        <h2>👩‍💻 Développeur</h2>
        <p>
          Code Wallet a été conçu par une développeuse passionnée en formation
          full-stack. L'application a été développée avec React, Electron et
          Styled Components.
        </p>
      </Section>

      <Section>
        <h2>⚖️ Informations légales</h2>
        <p>
          Code Wallet ne collecte, ne traite ni ne partage aucune donnée
          personnelle. Toutes les données sont stockées localement sur votre
          appareil via <strong>localStorage</strong>.
        </p>
        <p>
          Cette application est un projet pédagogique et ne fait l'objet d'aucune
          exploitation commerciale.
        </p>
      </Section>
    </Container>
  );
};

export default About;

// 💅 Styled Components
const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  color: #1e1e2f;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  cursor: pointer;
  color: #4b0082;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;

  h2 {
    color: #333;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: disc;
    padding-left: 1.5rem;
  }

  p {
    margin: 0.5rem 0;
    line-height: 1.6;
  }
`;
