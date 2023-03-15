import React, {useContext} from 'react';
import {TreeContext} from "../App.jsx";

const NavBar = () => {
    const {selectedId, add, remove, edit, reset} = useContext(TreeContext)
    return (
        <div style={{display: "inline"}}>
            <button>Add</button>
            <button>Remove</button>
            <button>Edit</button>
            <button>Reset</button>
        </div>
    );
};

export default NavBar;
