import {NextPageAuth} from '@/shared/types/auth.types';
import ActorEdit from '@/screens/admin/actor/ActorEdit';

const ActorsEditPage: NextPageAuth = () => {
  return (
    <ActorEdit />
  );
};

ActorsEditPage.isOnlyAdmin = true;

export default ActorsEditPage;
