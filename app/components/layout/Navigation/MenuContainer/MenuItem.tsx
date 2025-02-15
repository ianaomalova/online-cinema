import {FC} from 'react';
import {usePathname} from 'next/navigation';
import cn from 'classnames';
import styles from './Menu.module.scss';
import {IMenuItem} from '@/components/layout/Navigation/MenuContainer/menu.interface';
import Link from 'next/link';
import MaterialIcon from '@/ui/MaterialIcon';


const MenuItem: FC<{item:IMenuItem }> = ({item}) => {
  const pathname = usePathname();
  return (
    <li className={cn({
      [styles.active]: pathname === item.link
    })}>
      <Link href={item.link} legacyBehavior>
        <a>
          <MaterialIcon name={item.icon}/>
          <span>{item.title}</span>
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
