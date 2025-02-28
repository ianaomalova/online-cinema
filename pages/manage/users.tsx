import {NextPageAuth} from '@/shared/types/auth.types';
import UserList from '@/screens/admin/users/UserList';

const UserListPage: NextPageAuth = () => {
  return (
    <UserList />
  );
};

UserListPage.isOnlyAdmin = true;

export default UserListPage;
