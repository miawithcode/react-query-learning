import { useState } from 'react';
import { useCreateTask } from '../reactQueryCustomHooks';

const Form = () => {
  const [newItem, setNewItem] = useState('');
  const { createTask, isPending } = useCreateTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItem, {
      onSuccess: () => {
        setNewItem('');
      },
    });
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
