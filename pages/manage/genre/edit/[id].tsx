import {NextPageAuth} from '@/shared/types/auth.types';
import GenreEdit from '@/screens/admin/genre/GenreEdit';

const GenresEditPage: NextPageAuth = () => {
  return (
    <GenreEdit />
  );
};

GenresEditPage.isOnlyAdmin = true;

export default GenresEditPage;
