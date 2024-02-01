import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import authFetch from '../utils';

const Form = () => {
  const [newItem, setNewItem] = useState('');

  const { mutate: createTask, isPending } = useMutation({
    mutationFn: (taskTitle) => authFetch.post('/', { title: taskTitle }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>To Do List</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="btn" disabled={isPending}>
          Add Task
        </button>
      </div>
    </form>
  );
};
export default Form;
