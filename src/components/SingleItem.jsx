import { useMutation, useQueryClient } from '@tanstack/react-query';
import authFetch from '../utils';
import { toast } from 'react-toastify';

const SingleItem = ({ id, title, isDone }) => {
  const queryClient = useQueryClient();

  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) =>
      authFetch.patch(`/${taskId}`, { isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => editTask({ taskId: id, isDone: !isDone })}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: isDone && 'line-through',
        }}
      >
        {title}
      </p>
      <button
        className="btn remove-btn"
        onClick={() => console.log('delete item')}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
