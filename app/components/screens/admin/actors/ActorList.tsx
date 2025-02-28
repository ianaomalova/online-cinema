import {FC} from 'react';
import Meta from '@/utils/meta/Meta';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import Heading from '@/ui/heading/Heading';
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable';
import {useActors} from '@/screens/admin/actors/useActors';

const ActorList: FC = () => {
  const {isLoading, data, handleSearch, searchTerm, deleteAsync} = useActors();


  return (
    <Meta title='Actors'>
      <AdminNavigation />
      <Heading title='Actors' />

      <AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} />
      <AdminTable
        isLoading={isLoading}
        headerItems={['Name', 'Count movies']}
        tableItems={data || []}
        removeHandler={deleteAsync}/>
    </Meta>
  );
};

export default ActorList;
