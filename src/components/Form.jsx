import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import authFetch from '../utils';
import { toast } from 'react-toastify';

const Form = () => {
  const [newItem, setNewItem] = useState('');
  const queryClient = useQueryClient();

  const { mutate: createTask, isPending } = useMutation({
    mutationFn: (taskTitle) => authFetch.post('/', { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] }); // 标记该查询的数据为过时或陈旧。一旦查询被标记为过时，React Query 将在下次需要数据时自动重新获取它，以确保应用程序的数据保持最新
      toast.success('task added');
      setNewItem('');
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
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
