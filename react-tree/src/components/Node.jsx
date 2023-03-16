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
      <span style={{ cursor: "pointer", color:"firebrick"}} onClick={toggleOpen}>
        {isVisible ? "V " : "> "}
      </span>
      <span>
        id{nodes?.id}
        <input
            style={{border:"1px solid grey", borderRadius:"10px", margin:'4px', padding:'4px', height: '24px', fontSize: '1.2rem'}}
          type="text"
          onChange={(e) => {
            e.stopPropagation();
            if (nodes?.id !== selectedId) return;
            setNodeText(e.target.value);
          }}
          readOnly={!isEditable}
          value={nodeText}
        />
        {isEditable && (
          <input
              style={{border:"0px", borderRadius:"20px", margin:'4px', height: '24px'}}
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
