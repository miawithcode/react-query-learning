import { useState } from 'react';

import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';

import Form from './components/Form';
import Items from './components/Items';

const defaultItems = [
  { id: nanoid(), title: 'walk the dog', idDone: false },
  { id: nanoid(), title: 'wash dishes', idDone: false },
  { id: nanoid(), title: 'drink coffee', idDone: true },
  { id: nanoid(), title: 'take a nap', idDone: false },
];

const App = () => {
  const [items, setItems] = useState(defaultItems);

  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form />
      <Items items={items} />
    </section>
  );
};
export default App;
