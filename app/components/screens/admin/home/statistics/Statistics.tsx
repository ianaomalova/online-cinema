import {FC} from 'react';
import styles from '../Admin.module.scss'
import CountUser from '@/screens/admin/home/statistics/CountUser';
import PopularMovie from '@/screens/admin/home/statistics/PopularMovie';
import Heading from '@/ui/heading/Heading';

const Statistics: FC = () => {
  return (
    <div className={styles.statistics}>
      <CountUser />
      <PopularMovie />
    </div>
  );
};

export default Statistics;
