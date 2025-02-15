import {FC} from 'react';
import {usePopularGenres} from '@/components/layout/Navigation/MenuContainer/genres/usePopularGenres';
import Menu from '@/components/layout/Navigation/MenuContainer/Menu';
import SkeletonLoader from '@/ui/SkeletonLoader';

const GenreMenu: FC = () => {
  console.log('GenreMenu is rendering');
  const {isLoading, data} = usePopularGenres();
  return isLoading ?
    <div className='mx-11 mb-6'>
      <SkeletonLoader count={4} className='h-7 mt-6'/>
    </div> :
    <Menu menu={{title: 'Popular Genres', items: data || []}} />
};

export default GenreMenu;
