import {ChangeEvent, FC} from 'react';
import styles from './SearchField.module.scss';
import MaterialIcon from '@/ui/MaterialIcon';

interface ISearchField {
  searchTerm: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: FC<ISearchField> = ({searchTerm, handleSearch}) => {
  console.log('search field rendered');
  return (
    <div className={styles.search}>
      <MaterialIcon name='MdSearch' />
      <input
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={handleSearch}/>
    </div>
  );
};

export default SearchField;
