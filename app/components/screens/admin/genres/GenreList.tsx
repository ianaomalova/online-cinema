import {FC} from 'react';
import Meta from '@/utils/meta/Meta';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import Heading from '@/ui/heading/Heading';
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable';
import {useGenres} from '@/screens/admin/genres/useGenres';

const GenreList: FC = () => {
  const {isLoading, data, handleSearch, searchTerm, deleteAsync, createAsync} = useGenres();


  return (
    <Meta title='Genres'>
      <AdminNavigation />
      <Heading title='Genres' />

      <AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} onClick={createAsync}/>
      <AdminTable
        isLoading={isLoading}
        headerItems={['Title', 'Slug']}
        tableItems={data || []}
        removeHandler={deleteAsync}/>
    </Meta>
  );
};

export default GenreList;
