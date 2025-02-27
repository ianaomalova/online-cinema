import {FC} from 'react';
import Meta from '@/utils/meta/Meta';
import Heading from '@/ui/heading/Heading';
import Statistics from '@/screens/admin/statistics/Statistics';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';

const Admin: FC = () => {
  return (
    <Meta title='Admin panel'>
      <AdminNavigation />
      <Heading title='Admin Panel' />
      <Statistics />
    </Meta>
  );
};

export default Admin;
