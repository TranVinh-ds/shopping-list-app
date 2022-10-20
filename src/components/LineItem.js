import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleClickCheck, handleClickDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleClickCheck(item.id)}
      />
      <label
        onDoubleClick={() => handleClickCheck(item.id)}
        style={item.checked ? { textDecoration: 'line-through' } : null}
      >
        {item.item}
      </label>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => handleClickDelete(item.id)}
      />
    </li>
  );
};

export default LineItem;
