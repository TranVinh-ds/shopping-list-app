import React from 'react';
import ListItem from './ListItem';

const Content = ({ items, handleClickCheck, handleClickDelete }) => {
  return (
    <main>
      {items.length ? (
        <ListItem
          items={items}
          handleClickCheck={handleClickCheck}
          handleClickDelete={handleClickDelete}
        />
      ) : (
        <p style={{ marginTop: '10rem', color: 'red', fontSize: '1.5rem' }}>
          Your List Is Empty
        </p>
      )}
    </main>
  );
};

export default Content;
