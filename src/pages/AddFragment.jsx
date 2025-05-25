import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AddFragment = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [tags, setTags] = useState("");

  const handleSave = () => {
    const newFragment = {
      id: Date.now(),
      title,
      code,
      tags: tags.split(",").map(tag => tag.trim())
    };

    // Sauvegarde temporaire en localStorage (à remplacer plus tard)
    const stored = JSON.parse(localStorage.getItem("fragments") || "[]");
    stored.push(newFragment);
    localStorage.setItem("fragments", JSON.stringify(stored));

    navigate("/"); // redirige vers fragments (page d’accueil)
  };

  const handleDelete = () => {
    // On supprime par le titre pour l'exemple simple
    const stored = JSON.parse(localStorage.getItem("fragments") || "[]");
    const updated = stored.filter(frag => frag.title !== title);
    localStorage.setItem("fragments", JSON.stringify(updated));
    navigate("/");
  };

  return (
    <Wrapper>
      <h2>📝 Add or Edit Fragment</h2>

      <FormGroup>
        <label>Title</label>
        <input
          type="text"
          placeholder="Fragment title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <label>Code</label>
        <textarea
          rows="8"
          placeholder="Enter code here"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <label>Tags (comma separated)</label>
        <input
          type="text"
          placeholder="e.g., React, Hooks"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </FormGroup>

      <ButtonRow>
        <button onClick={handleSave}>💾 Save</button>
        <button onClick={handleDelete}>🗑️ Delete</button>
        <button onClick={() => navigate("/about")}>ℹ️ Info</button>
      </ButtonRow>
    </Wrapper>
  );
};

export default AddFragment;

// 🎨 Styled-components
const Wrapper = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-family: monospace;
    background: #f7f7f7;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;

  button {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 8px;
    background: #1e1e2f;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      background: #444;
    }
  }
`;
