import { useFetchTasks } from '../reactQueryCustomHooks';
import SingleItem from './SingleItem';

const Items = () => {
  const {isPending, data, isError} = useFetchTasks();

  if (isPending) {
    return <p>Loading...</p>;
  }

  if(isError) {
    return <p>There was an error...</p>;
  }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </div>
  );
};
export default Items;
