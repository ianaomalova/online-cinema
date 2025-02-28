import {useMutation, useQuery} from 'react-query';
import {UserService} from '@/services/user.service';
import {ITableItem} from '@/ui/admin-table/AdminTable/AdminTable.interface';
import {getAdminUrl, getGenreUrl} from '@/config/url.config';
import {convertMongoDate} from '@/utils/date/ConvertMongoDate';
import {toastError} from '@/utils/toast-error';
import {ChangeEvent, useMemo, useState} from 'react';
import {toastr} from 'react-redux-toastr';
import {useDebounce} from '@/hooks/useDebounce';
import {GenreService} from '@/services/genre.services';

export const useGenres= () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  const queryData = useQuery(['genres list', debouncedSearch], () =>
      GenreService.getAll(debouncedSearch), {
      select: ({data}) => data.map((genre): ITableItem => ({
        _id: genre._id,
        editUrl: getAdminUrl(`genre/edit/${genre._id}`),
        items: [genre.name, genre.slug]
      })),

      onError: (error) => {
        toastError(error, 'Genres list')
      }
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  const {mutateAsync: deleteAsync} = useMutation(
    'delete genre',
    (genreId: string) =>
      GenreService.deleteGenre(genreId), {

      onError: (error) => {
        toastError(error, 'Delete genre')
      },

      onSuccess: () => {
        toastr.success('Delete genre', 'delete was successful')
        queryData.refetch()
      }
    }
  );

  return useMemo(() => ({
    handleSearch, ...queryData, searchTerm, deleteAsync
  }), [queryData, searchTerm, deleteAsync])
}
