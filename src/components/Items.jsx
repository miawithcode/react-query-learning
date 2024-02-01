import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import authFetch from '../utils';

const Items = () => {
  const { isPending, data } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => authFetch.get('/'),
  });

  if(isPending) {
    return <p>Loading...</p>
  }

  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </div>
  );
};
export default Items;
