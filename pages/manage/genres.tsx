import {NextPageAuth} from '@/shared/types/auth.types';
import GenreList from '@/screens/admin/genres/GenreList';

const GenresListPage: NextPageAuth = () => {
  return (
    <GenreList />
  );
};

GenresListPage.isOnlyAdmin = true;

export default GenresListPage;
