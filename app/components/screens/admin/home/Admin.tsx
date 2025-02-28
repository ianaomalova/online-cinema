import {FC} from 'react';
import Meta from '@/utils/meta/Meta';
import Heading from '@/ui/heading/Heading';
import Statistics from '@/screens/admin/home/statistics/Statistics';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';

const Admin: FC = () => {
  return (
    <Meta title='Admin panel'>
      <AdminNavigation />
      <Heading title='Some statistics' />
      <Statistics />
    </Meta>
  );
};

export default Admin;
