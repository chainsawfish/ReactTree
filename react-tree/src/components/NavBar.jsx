import React, { useContext, useState } from "react";
import { TreeContext } from "../App.jsx";

const NavBar = () => {
  const [btnEdit, setBtnEdit] = useState(true);
  const { handleAdd, handleRemove, handleEdit, handleReset, selectedId } =
    useContext(TreeContext);
  return (
    <div className="nav">
      <button onClick={() => handleAdd(selectedId)}>add</button>
      <button onClick={() => handleRemove(selectedId)}>remove</button>
      <button
        onClick={() => {
          setBtnEdit(!btnEdit);
          handleEdit(selectedId);
        }}
      >
        {btnEdit ? "edit" : "save"}
      </button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default NavBar;
