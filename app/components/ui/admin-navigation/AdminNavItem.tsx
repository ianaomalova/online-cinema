import {FC} from 'react';
import {INavItem} from '@/ui/admin-navigation/admin-navigation.interface';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import cn from 'classnames';

import styles from './AdminNavigation.module.scss'

const AdminNavItem: FC<{ item: INavItem }> = ({item: {title, link}}) => {
  const pathname = usePathname();
  console.log(pathname);
  console.log(link);
  return (
    <li>
      <Link href={link} legacyBehavior>
        <a className={cn({
          [styles.active]: pathname === link
        })}>{title}</a>
      </Link>
    </li>
  );
};

export default AdminNavItem;
