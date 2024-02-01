import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import authFetch from '../utils';

const Items = () => {
  const { isPending, data, isError, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await authFetch.get('/');
      return data;
    },
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  // if(isError) {
  //   return <p>There was an error...</p>;
  // }

  if(error) {
    return <p>{error.message}</p>;
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
