import {FC} from 'react';
import {useQuery} from 'react-query';
import {AdminService} from '@/services/admin.service';
import cn from 'classnames';
import styles from '../Admin.module.scss'
import SkeletonLoader from '@/ui/SkeletonLoader';

const CountUser: FC = () => {
  const {isLoading, data:response} = useQuery('Count users', () => AdminService.getCountUsers())
  return (
    <div className={cn(styles.block, styles.countUsers)}>
      <div>
        {isLoading ?
          <SkeletonLoader /> :
          <div className={styles.number}>{response?.data}</div>
        }
        <div className={styles.description}>users</div>
      </div>
    </div>
  );
};

export default CountUser;
