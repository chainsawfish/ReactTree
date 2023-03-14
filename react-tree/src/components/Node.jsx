import { useState } from "react";

export const Node = ({ nodes, level = 0 }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleVisibility = (node) => {
    node.isVisible = !node.isVisible;
  };
  return (
    <div>
      {Array.isArray(nodes) &&
        nodes.map((node, index) => {
          return (
            <div
              key={node.id.toString() + index}
              style={{ marginLeft: level + 40 }}
            >
              <span onClick={() => handleVisibility(node)}>
                {isVisible ? "-" : "+"}{" "}
              </span>
              Node
              <Node nodes={node.children} level={level + 1} />
            </div>
          );
        })}
    </div>
  );
};

export default Node;
