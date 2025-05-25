import React from "react";

const FragmentCard = ({ fragment }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{fragment.title}</h3>
      <pre style={styles.code}>{fragment.code}</pre>
      <div style={styles.tags}>
        {fragment.tags.map((tag, idx) => (
          <span key={idx} style={styles.tag}>#{tag}</span>
        ))}
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  },
  title: {
    margin: "0 0 10px"
  },
  code: {
    backgroundColor: "#f0f0f0",
    padding: "10px",
    borderRadius: "5px",
    overflowX: "auto"
  },
  tags: {
    marginTop: "10px",
    display: "flex",
    gap: "10px"
  },
  tag: {
    backgroundColor: "#1e1e2f",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "0.8rem"
  }
};

export default FragmentCard;
