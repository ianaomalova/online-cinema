import {FC} from 'react';
import {useQuery} from 'react-query';
import {MoviesService} from '@/services/movie.services';
import SkeletonLoader from '@/ui/SkeletonLoader';
import MovieList from '@/components/layout/Sidebar/MoviesContainer/MovieList';

const PopularMovies: FC = () => {
  const {isLoading, data: popularMovies} = useQuery('Popular movies in sidebar', () => (
    MoviesService.getMostPopularMovies()
  ))
  return (
    isLoading ? <div className='mt-11'>
      <SkeletonLoader count={3} className='h-28 mb-4'/>
    </div> : <MovieList link='/tranding' movies={popularMovies || []} title='Popular Movies'/>
  );
};

export default PopularMovies;
