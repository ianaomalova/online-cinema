import {ChangeEvent, FC} from 'react';
import styles from './AdminHeader.module.scss';
import SearchField from '@/ui/search-field/SearchField';
import AdminCreateButton from '@/ui/admin-table/AdminHeader/AdminCreateButton';

interface IAdminHeader {
  onClick?: () => void;
  searchTerm: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const AdminHeader: FC<IAdminHeader> = ({onClick, searchTerm, handleSearch}) => {
  return (
    <div className={styles.header}>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      {onClick && <AdminCreateButton onClick={onClick}/>}
    </div>
  );
};

export default AdminHeader;
