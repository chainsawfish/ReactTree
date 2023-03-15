import React, { useContext } from "react";
import { TreeContext } from "../App.jsx";

const NavBar = () => {
  const { handleAdd, handleRemove, handleEdit, handleReset } =
    useContext(TreeContext);
  return (
    <div style={{ display: "inline" }}>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default NavBar;
