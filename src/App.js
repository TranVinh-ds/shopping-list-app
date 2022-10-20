import Header from './components/Header';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
  const API_URL = 'http://localhost:3500/items';
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Your requested data does not exist');
        const data = await response.json();
        setItems(data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

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
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && (
          <p
            style={{ marginTop: '2rem', color: 'red' }}
          >{`Error: ${fetchError}`}</p>
        )}
        {!fetchError && !isLoading && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleClickCheck={handleClickCheck}
            handleClickDelete={handleClickDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
