import Header from './components/Header';
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
    <div className="App">
      <Header title="Shopping List App" />
      <Content
        items={items}
        handleClickCheck={handleClickCheck}
        handleClickDelete={handleClickDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
