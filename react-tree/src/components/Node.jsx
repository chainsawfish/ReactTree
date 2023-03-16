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
    nodeText,
    setNodeText,
    isEditable,
    setIsEditable,
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
        {nodes?.id}
        <input
          type="text"
          onChange={(e) => {
            e.stopPropagation();
            setNodeText(e.target.value);
          }}
          readOnly={!isEditable}
          value={nodeText}
        />
        {isEditable && (
          <input
            type="button"
            value="save"
            onClick={() => setIsEditable(false)}
          />
        )}
      </span>
      {isVisible &&
        nodes?.children?.map((childNode) => {
          return (
            <Node
              key={childNode.id}
              nodes={childNode}
              isEditable={isEditable}
            />
          );
        })}
    </div>
  );
};

export default Node;
