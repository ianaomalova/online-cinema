import {useMutation, useQuery} from 'react-query';
import {ITableItem} from '@/ui/admin-table/AdminTable/AdminTable.interface';
import {getAdminUrl, getMovieUrl} from '@/config/url.config';
import {toastError} from '@/utils/toast-error';
import {ChangeEvent, useMemo, useState} from 'react';
import {toastr} from 'react-redux-toastr';
import {useDebounce} from '@/hooks/useDebounce';
import {MoviesService} from '@/services/movie.services';
import {getGenresList} from '@/utils/movie/getGenresList';

export const useMovies= () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  const queryData = useQuery(['movie list', debouncedSearch], () =>
    MoviesService.getAll(debouncedSearch), {
      select: ({data}) => data.map((movie): ITableItem => ({
        _id: movie._id,
        editUrl: getAdminUrl(`movie/edit/${movie._id}`),
        items: [movie.title, getGenresList(movie.genres), String(movie.rating)]
      })),

      onError: (error) => {
        toastError(error, 'Movies list')
      }
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  const {mutateAsync: deleteAsync} = useMutation(
    'delete movie',
    (movieId: string) =>
      MoviesService.deleteMovie(movieId), {

      onError: (error) => {
        toastError(error, 'Delete movie')
      },

      onSuccess: () => {
        toastr.success('Delete movie', 'delete was successful')
        queryData.refetch()
      }
    }
  );

  return useMemo(() => ({
    handleSearch, ...queryData, searchTerm, deleteAsync
  }), [queryData, searchTerm, deleteAsync])
}
