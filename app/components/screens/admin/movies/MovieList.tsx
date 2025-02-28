import {FC} from 'react';
import Meta from '@/utils/meta/Meta';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import Heading from '@/ui/heading/Heading';
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable';
import {useMovies} from '@/screens/admin/movies/useMovies';

const MovieList: FC = () => {
  const {isLoading, data, handleSearch, searchTerm, deleteAsync} = useMovies();


  return (
    <Meta title='Movies'>
      <AdminNavigation />
      <Heading title='Movies' />

      <AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} />
      <AdminTable
        isLoading={isLoading}
        headerItems={['Title', 'Genres', 'Rating']}
        tableItems={data || []}
        removeHandler={deleteAsync}/>
    </Meta>
  );
};

export default MovieList;
