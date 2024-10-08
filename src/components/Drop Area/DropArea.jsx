import { useState } from "react";
import "./DropArea.css";

const DropArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragExit={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      className={showDrop ? "drop_area" : "hide_drop"}
    >
      Drop Area
    </section>
  );
};

export default DropArea;
