import {FC} from 'react';
import styles from './AdminTable.module.scss';
import {ITableItem} from '@/ui/admin-table/AdminTable/AdminTable.interface';
import AdminTableHeader from '@/ui/admin-table/AdminTable/AdminTableHeader';
import SkeletonLoader from '@/ui/SkeletonLoader';
import AdminItemTable from '@/ui/admin-table/AdminTable/AdminItemTable';

interface IAdminTable {
  tableItems: ITableItem[];
  isLoading: boolean;
  headerItems: string[];
  removeHandler: (id: string) => void;
}

const AdminTable: FC<IAdminTable> = ({tableItems, headerItems, removeHandler, isLoading}) => {
  return (
    <div>
      <AdminTableHeader headerItems={headerItems}/>
      {isLoading ?
        <SkeletonLoader count={1} height={48} className='mt-4'/> :
        tableItems.length ?
          tableItems.map(item =>
            <AdminItemTable
              key={item._id}
              tableItems={item}
              removeHandler={() => removeHandler(item._id)}
            />) :
          <div className={styles.notFound}>Element not found</div>
      }
    </div>
  );
};

export default AdminTable;
