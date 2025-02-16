import {ChangeEvent, useState} from 'react';
import {useDebounce} from '@/hooks/useDebounce';
import {useQuery} from 'react-query';
import {MoviesService} from '@/services/movie.services';

export const useSearch = () => {
  console.log('use search rendered');
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  const {isSuccess, data} = useQuery(['search movie list', debouncedSearch], () =>
    MoviesService.getAll(debouncedSearch), {
      select: ({data}) => data,
      enabled: !!debouncedSearch
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  return {isSuccess, handleSearch, data, searchTerm};
}
