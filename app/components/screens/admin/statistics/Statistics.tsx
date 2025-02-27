import {FC} from 'react';
import styles from '../Admin.module.scss'
import CountUser from '@/screens/admin/statistics/CountUser';
import PopularMovie from '@/screens/admin/statistics/PopularMovie';

const Statistics: FC = () => {
  return (
    <div className={styles.statistics}>
      <CountUser />
      <PopularMovie />
    </div>
  );
};

export default Statistics;
