import "react";
import { createContext, useState } from "react";
import Node from "./components/Node";
import { nodeList } from "./data/nodeList.js";
import NavBar from "./components/NavBar.jsx";
import "./App.css";
import { getParentById } from "./utils/getParentById.js";
import { getNewItemId } from "./utils/getNewItemId.js";
import getNodeById from "./utils/getNodeById.js";
import arrayItemId from "./data/arrayItemsId";

export const TreeContext = createContext(null);

function App() {
  const [nodeText, setNodeText] = useState("text");
  const [selectedId, setSelectedId] = useState(0);
  const [treeObj, setTreeObj] = useState({ ...nodeList });
  const [isEditable, setIsEditable] = useState(false);

  const handlers = {
    handleAdd: (nodeId) => {
      if (!nodeId) return;
      const newNode = {
        id: getNewItemId(),
        text: "simple text",
        editable: false,
        children: [],
      };
      const nodeObject = getNodeById(treeObj, nodeId);
      nodeObject?.children?.push(newNode);
      setTreeObj({ ...treeObj });
    },

    handleRemove: (nodeId) => {
      const parent = getParentById(treeObj, nodeId);
      if (!parent) return;
      parent.children = parent.children.filter((child) => child.id !== nodeId);
      setTreeObj({ ...treeObj });
    },

    handleEdit: (nodeId) => {
      if (!nodeId) return;
      const nodeObject = getNodeById(treeObj, nodeId);
      setIsEditable(!isEditable);
      nodeObject.editable = true;
      console.log(isEditable);
    },

    handleReset: () => {
      arrayItemId.length = 0;
      arrayItemId.push(1);
      setTreeObj({
        id: 1,
        text: "text",
        editable: false,
        children: [],
      });
    },
  };

  const contextValue = {
    selectedId,
    setSelectedId,
    ...handlers,
    nodeText,
    setNodeText,
  };

  return (
    <div className="App">
      <TreeContext.Provider value={contextValue}>
        <NavBar />
        <Node nodes={treeObj} />
      </TreeContext.Provider>
    </div>
  );
}

export default App;
