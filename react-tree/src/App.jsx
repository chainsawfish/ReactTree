import "react";
import {createContext, useState} from "react";
import Node from "./components/Node";
import { nodeList } from "./data/nodeList.js";
import NavBar from "./components/NavBar.jsx";
import "./App.css";
import {getParentById} from "./utils/getParentById.js";
import {getNewItemId} from "./utils/getNewItemId.js";

export const TreeContext = createContext(null);

const handlers = {
  handleAdd: (nodeId) => {
    const newNode = {
      id: getNewItemId(),
      text: "simple text",
      children: [],
    };
    getParentById(nodeId)?.children?.push(newNode)
  },

  handleRemove: () => {},
  handleEdit: () => {},
  handleReset: () => {},
};

function App() {
  const [selectedId, setSelectedId] = useState(0)
  const contextValue = {
    selectedId, setSelectedId,
    ...handlers,
  };

  return (
    <div className="App">
      <TreeContext.Provider value={contextValue}>
        <NavBar />
        <Node nodes={nodeList} />
      </TreeContext.Provider>
    </div>
  );
}

export default App;
