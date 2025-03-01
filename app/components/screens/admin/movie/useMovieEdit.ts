import {SubmitHandler, UseFormSetValue} from 'react-hook-form';
import {useRouter} from 'next/router';
import {useMutation, useQuery} from 'react-query';
import {toastError} from '@/utils/toast-error';
import {getKeys} from '@/utils/object/getKeys';
import {toastr} from 'react-redux-toastr';
import {getAdminUrl} from '@/config/url.config';
import {IMovieEditInput} from '@/screens/admin/movie/movie-edit.interface';
import {MoviesService} from '@/services/movie.services';

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
  const {push, query} = useRouter()

  const movieId = String(query.id)

  const {isLoading} = useQuery(['movie', movieId], () => MoviesService.getById(movieId), {
    onSuccess: ({data}) => {
      getKeys(data).forEach((key) => {
        setValue(key, data[key]);
      })
    },
    onError: (error) => {
      toastError(error, 'Get movie')
    },
    enabled: !!query.id
  })

  const {mutateAsync} = useMutation('update movie', (data: IMovieEditInput) => MoviesService.updateMovie(movieId, data), {
    onError: (error) => {
      toastError(error, 'Get movie')
    },

    onSuccess: () => {
      toastr.success('Update movie', 'update was successful')
      push(getAdminUrl('movies'))
    }
  })

  const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
    await mutateAsync(data)
  }

  return {onSubmit, isLoading}
};
