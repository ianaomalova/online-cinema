import {NextPageAuth} from '@/shared/types/auth.types';
import MovieList from '@/screens/admin/movies/MovieList';

const MoviesListPage: NextPageAuth = () => {
  return (
    <MovieList />
  );
};

MoviesListPage.isOnlyAdmin = true;

export default MoviesListPage;
