import { useContext, useState } from "react";
import { TreeContext } from "../App";
import { getParentById } from "../utils/getParentById.js";

const Node = ({ nodes, isEditable=false }) => {
  const {
    handleAdd,
    handleRemove,
    handleEdit,
    handleReset,
    selectedId,
    setSelectedId, nodeText, setNodeText
  } = useContext(TreeContext);
  const [isVisible, setIsVisible] = useState(false);
  const toggleOpen = () => {
    setIsVisible(!isVisible);
  };


  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        console.log("selected node", nodes?.id);
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
          value={nodeText}
        />
      </span>
      {isVisible &&
        nodes?.children?.map((childNode) => {
          return <Node key={childNode.id} nodes={childNode} isEditable={isEditable} />;
        })}
    </div>
  );
};

export default Node;
