const SingleItem = ({ id, title, isDone }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => console.log('edit task')}
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
