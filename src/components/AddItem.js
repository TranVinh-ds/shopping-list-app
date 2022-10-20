import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({ handleSubmit, newItem, setNewItem }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button>
        <FaPlus onClick={() => inputRef.current.focus()} />
      </button>
    </form>
  );
};

export default AddItem;
