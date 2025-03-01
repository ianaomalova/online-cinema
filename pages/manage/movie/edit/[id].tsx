import {NextPageAuth} from '@/shared/types/auth.types';
import MovieEdit from '@/screens/admin/movie/MovieEdit';

const MoviesEditPage: NextPageAuth = () => {
  return (
    <MovieEdit />
  );
};

MoviesEditPage.isOnlyAdmin = true;

export default MoviesEditPage;
