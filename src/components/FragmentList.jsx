import React from "react";
import FragmentCard from "./FragmentCard";

const mockFragments = [
  {
    title: "React useState hook",
    code: "const [count, setCount] = useState(0);",
    tags: ["React", "State"]
  },
  {
    title: "Fetch API",
    code: "fetch('/api/data').then(res => res.json())",
    tags: ["JS", "API"]
  }
];

const FragmentList = () => {
  return (
    <div style={styles.wrapper}>
      {mockFragments.map((frag, index) => (
        <FragmentCard key={index} fragment={frag} />
      ))}
    </div>
  );
};

const styles = {
  wrapper: {
    maxWidth: "800px",
    width: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  }
};

export default FragmentList;
