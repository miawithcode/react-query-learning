import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import authFetch from '../utils';

const Items = ({ items }) => {
  const result = useQuery({
    queryKey: ['tasks'],
    queryFn: () => authFetch.get('/'),
  });
  console.log(result);
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </div>
  );
};
export default Items;
