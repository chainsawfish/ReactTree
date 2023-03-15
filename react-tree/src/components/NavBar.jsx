import React, { useContext } from "react";
import { TreeContext } from "../App.jsx";

const NavBar = () => {
  const { handleAdd, handleRemove, handleEdit, handleReset, selectedId } =
    useContext(TreeContext);
  return (
    <div className="nav" >
      <button onClick={()=> handleAdd(selectedId)}>add</button>
      <button onClick={handleRemove}>remove</button>
      <button onClick={handleEdit}>edit</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default NavBar;
