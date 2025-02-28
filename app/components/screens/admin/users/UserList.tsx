import {FC} from 'react';
import Meta from '@/utils/meta/Meta';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import Heading from '@/ui/heading/Heading';
import {useUsers} from '@/screens/admin/users/useUsers';
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable';

const UserList: FC = () => {
  const {isLoading, data, handleSearch, searchTerm, deleteAsync} = useUsers();


  return (
    <Meta title='Users'>
      <AdminNavigation />
      <Heading title='Users' />

      <AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} />
      <AdminTable
        isLoading={isLoading}
        headerItems={['Email', 'Date register']}
        tableItems={data || []}
        removeHandler={deleteAsync}/>
    </Meta>
  );
};

export default UserList;
