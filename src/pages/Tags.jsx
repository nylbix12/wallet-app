import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TagsPage = () => {
  const [tags, setTags] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTag, setCurrentTag] = useState({ index: null, value: "" });

  useEffect(() => {
    const storedTags = JSON.parse(localStorage.getItem("tags") || "[]");
    setTags(storedTags);
  }, []);

  const openNewTagModal = () => {
    setCurrentTag({ index: null, value: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (index) => {
    setCurrentTag({ index, value: tags[index] });
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    setCurrentTag({ ...currentTag, value: e.target.value });
  };

  const handleSave = () => {
    const updated = [...tags];
    if (currentTag.index !== null) {
      updated[currentTag.index] = currentTag.value;
    } else {
      updated.push(currentTag.value);
    }
    setTags(updated);
    localStorage.setItem("tags", JSON.stringify(updated));
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    const updated = tags.filter((_, i) => i !== currentTag.index);
    setTags(updated);
    localStorage.setItem("tags", JSON.stringify(updated));
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Header>
        <h2>🏷️ Manage Tags</h2>
        <NewButton onClick={openNewTagModal}>+ New</NewButton>
      </Header>

      <TagList>
        {tags.map((tag, i) => (
          <Tag key={i} onClick={() => openEditModal(i)}>
            #{tag}
          </Tag>
        ))}
      </TagList>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <h3>{currentTag.index === null ? "Add Tag" : "Edit Tag"}</h3>
            <input
              type="text"
              value={currentTag.value}
              onChange={handleChange}
              placeholder="Tag name"
            />
            <ModalActions>
              <button onClick={handleSave}>Save</button>
              {currentTag.index !== null && <button onClick={handleDelete}>Delete</button>}
              <button onClick={() => setIsModalOpen(false)}>Cancel</button>
            </ModalActions>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default TagsPage;

// 🧩 Styled Components
const Container = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NewButton = styled.button`
  background: #ffd700;
  color: #1e1e2f;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 2rem;
`;

const Tag = styled.div`
  background: #1e1e2f;
  color: #fff;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
`;

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: 300px;
`;

const ModalActions = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;

  button {
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:nth-child(1) {
    background: #4caf50;
    color: white;
  }
  button:nth-child(2) {
    background: #f44336;
    color: white;
  }
  button:nth-child(3) {
    background: #ccc;
  }
`;
