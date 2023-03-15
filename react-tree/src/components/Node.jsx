import { useState } from "react";

const Node = ({ nodes }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const toggleOpen = () => {
    setIsVisible(!isVisible);
  };

  const selectedNode = (node) => {
    console.log("selected node", node);
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        selectedNode(nodes?.id);
      }}
      style={{ paddingLeft: 30 }}
    >
      <span onClick={toggleOpen}>{isVisible ? "- " : "+ "}</span>
      <span>Node {nodes?.id}</span>
      {isVisible &&
        nodes?.children?.map((childNode) => {
          return <Node key={childNode.id} nodes={childNode} />;
        })}
    </div>
  );
};

export default Node;
