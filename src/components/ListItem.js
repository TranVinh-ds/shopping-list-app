import React from 'react';
import LineItem from './LineItem';

const ListItem = ({ items, handleClickCheck, handleClickDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleClickCheck={handleClickCheck}
          handleClickDelete={handleClickDelete}
        />
      ))}
    </ul>
  );
};

export default ListItem;
