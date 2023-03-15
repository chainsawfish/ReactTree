import { useContext, useState } from "react";
import { TreeContext } from "../App";
import { nodeList } from "../data/nodeList";
const Node = ({ nodes, level = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [nodeText, setNodeText] = useState(nodes.text);
  const {handleAdd, handleRemove, handleEdit, handleReset} = useContext(TreeContext)
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
          return (
            <Node key={childNode.id} nodes={childNode} level={level + 1} />
          );
        })}
    </div>
  );
};

export default Node;
