import { useEditTask, useDeleteTask } from '../reactQueryCustomHooks';

const SingleItem = ({ id, title, isDone }) => {
  const { editTask } = useEditTask();
  const { deleteTask, deleteTaskLoading } = useDeleteTask();

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
        disabled={deleteTaskLoading}
        onClick={() => deleteTask(id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
