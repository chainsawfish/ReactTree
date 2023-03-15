import "react";
import {useContext, createContext} from "react";
import Node from "./components/Node";
import { nodeList } from "./data/nodeList.js";
import NavBar from "./components/NavBar.jsx";
import './App.css'

export const TreeContext = createContext(null)

const handlers = {
    handleAdd: () => {},
    handleRemove: () => {},
    handleEdit: () => {},
    handleReset: () => {},
}

function App() {

    const contextValue = {
        selectedId: 0,
        ...handlers
    }

  return (
    <div className="App">
        <TreeContext.Provider value={contextValue}>
        <NavBar/>
        <Node nodes={nodeList} />
        </TreeContext.Provider>

    </div>
  )
}

export default App
