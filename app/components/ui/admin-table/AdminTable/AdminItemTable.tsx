import {FC} from 'react';
import styles from '@/ui/admin-table/AdminTable/AdminTable.module.scss';
import AdminActions from '@/ui/admin-table/AdminTable/AdminActions/AdminActions';
import {IAdminTableItem} from '@/ui/admin-table/AdminTable/AdminTable.interface';

const AdminItemTable: FC<IAdminTableItem> = ({removeHandler, tableItems}) => {
  return (
    <div className={styles.item}>
      {tableItems.items.map(value => <div key={value}>{value}</div>)}

      <AdminActions editUrl={tableItems.editUrl} removeHandler={removeHandler}/>
    </div>
  );
};

export default AdminItemTable;
