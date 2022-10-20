import Header from './components/Header';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
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
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemObj = {
      id: items.length ? items[items.length - 1].id + 1 : 1,
      checked: false,
      item: newItem,
    };
    setItems(items.concat(itemObj));
    setNewItem('');
  };
  return (
    <div className="App">
      <Header title="Shopping List App" />
      <AddItem
        handleSubmit={handleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleClickCheck={handleClickCheck}
        handleClickDelete={handleClickDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
