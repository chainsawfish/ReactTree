import "react";
import Node from "./components/Node";
import { nodeList } from "./data/nodeList.js";
import './App.css'

function App() {

  return (
    <div className="App">
        <h1>Navbar here</h1>
        <Node nodes={nodeList} />
    </div>
  )
}

export default App
