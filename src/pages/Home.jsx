import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Home = () => {
  const [fragments, setFragments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("fragments") || "[]");
    setFragments(stored);
  }, []);

  return (
    <Container>
      <Header>
      </Header>

      <Main>
        <TitleSection>📦 My Code Fragments</TitleSection>
        {fragments.length === 0 ? (
          <EmptyMessage>No fragments yet. Add one!</EmptyMessage>
        ) : (
          <FragmentList>
            {fragments.map((frag) => (
              <FragmentCard key={frag.id}>
                <CardTitle>{frag.title}</CardTitle>
                <CodeBlock>
                  <pre>{frag.code}</pre>
                </CodeBlock>
                <Tags>
                  {frag.tags.map((tag, idx) => (
                    <Tag key={idx}>#{tag}</Tag>
                  ))}
                </Tags>
              </FragmentCard>
            ))}
          </FragmentList>
        )}
      </Main>
    </Container>
  );
};

export default Home;

// Styled Components

const Container = styled.div`
  background-color: #f4f4f4;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333333;
  padding: 1rem 2rem;
  border-bottom: 4px solid #7BC950;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #B288C0;

  span {
    color: #7BC950;
  }
`;


const Main = styled.main`
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
`;

const TitleSection = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  color: #B288C0;
  margin-bottom: 2rem;
`;

const EmptyMessage = styled.p`
  text-align: center;
  font-style: italic;
  color: #777;
`;

const FragmentList = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const FragmentCard = styled.div`
  padding: 1.5rem;
  background: #1e1e2f;
  color: white;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, border 0.3s;

  &:hover {
    transform: translateY(-5px);
    border: 2px solid #7BC950;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 1rem 0;
  color: #B288C0;
`;

const CodeBlock = styled.div`
  background: #2d2d40;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  font-family: monospace;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: #7BC950;
  color: #1e1e2f;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: bold;
`;

