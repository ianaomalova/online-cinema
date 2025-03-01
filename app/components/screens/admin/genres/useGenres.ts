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
import {useRouter} from 'next/router';

export const useGenres= () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  const {push} = useRouter()

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

  const {mutateAsync: createAsync} = useMutation(
    'create genre',
    () =>
      GenreService.createGenre(), {

      onError: (error) => {
        toastError(error, 'Create genre')
      },

      onSuccess: ({data: _id}) => {
        console.log('data', _id);
        toastr.success('Create genre', 'create was successful')
        push(getAdminUrl(`genre/edit/${_id}`))
      }
    }
  );

  return useMemo(() => ({
    handleSearch, ...queryData, searchTerm, deleteAsync, createAsync
  }), [queryData, searchTerm, deleteAsync, createAsync])
}
