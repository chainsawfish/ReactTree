import { useContext, useState } from "react";
import { TreeContext } from "../App";
import { getParentById } from "../utils/getParentById.js";

const Node = ({ nodes }) => {
  const {
    handleAdd,
    handleRemove,
    handleEdit,
    handleReset,
    selectedId,
    setSelectedId,
  } = useContext(TreeContext);
  const [isVisible, setIsVisible] = useState(false);
  const [nodeText, setNodeText] = useState(nodes.text);
  const toggleOpen = () => {
    setIsVisible(!isVisible);
  };

  const selectedNode = (node) => {
    console.log("selected node", node);
    const parentNode = getParentById(nodes?.id);
    console.log("parent id =", parentNode?.id);
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        selectedNode(nodes?.id);
        setSelectedId(nodes?.id);
      }}
      style={{ paddingLeft: 50 }}
    >
      <span style={{ cursor: "pointer" }} onClick={toggleOpen}>
        {isVisible ? "- " : "+ "}
      </span>
      <span>
        {nodes?.id} :{" "}
        <input
          type="text"
          readOnly={!nodes?.editable}
          defaultValue={nodes?.text}
        />
      </span>
      {isVisible &&
        nodes?.children?.map((childNode) => {
          return <Node key={childNode.id} nodes={childNode} />;
        })}
    </div>
  );
};

export default Node;
