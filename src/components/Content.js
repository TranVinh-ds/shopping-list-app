import React from 'react';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: 'liquor',
    },
    {
      id: 2,
      checked: false,
      item: 'bread',
    },
    {
      id: 3,
      checked: false,
      item: 'coffee',
    },
  ]);

  const handleClickCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleClickDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
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
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: '10rem', color: 'red', fontSize: '1.5rem' }}>
          Your List Is Empty
        </p>
      )}
    </main>
  );
};

export default Content;
