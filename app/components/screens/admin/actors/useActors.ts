import {useMutation, useQuery} from 'react-query';
import {UserService} from '@/services/user.service';
import {ITableItem} from '@/ui/admin-table/AdminTable/AdminTable.interface';
import {getActorUrl, getAdminUrl} from '@/config/url.config';
import {convertMongoDate} from '@/utils/date/ConvertMongoDate';
import {toastError} from '@/utils/toast-error';
import {ChangeEvent, useMemo, useState} from 'react';
import {toastr} from 'react-redux-toastr';
import {useDebounce} from '@/hooks/useDebounce';
import {ActorService} from '@/services/actor.service';
import {GenreService} from '@/services/genre.services';
import {useRouter} from 'next/router';

export const useActors= () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  const {push} = useRouter()

  const queryData = useQuery(['actors list', debouncedSearch], () =>
      ActorService.getAll(debouncedSearch), {
      select: ({data}) => data.map((actor): ITableItem => ({
        _id: actor._id,
        editUrl: getAdminUrl(`actor/edit/${actor._id}`),
        items: [actor.name, String(actor.countMovies)]
      })),

      onError: (error) => {
        toastError(error, 'Actors list')
      }
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  const {mutateAsync: deleteAsync} = useMutation(
    'delete actor',
    (actorId: string) =>
      ActorService.deleteActor(actorId), {

      onError: (error) => {
        toastError(error, 'Delete actor')
      },

      onSuccess: () => {
        toastr.success('Delete actor', 'delete was successful')
        queryData.refetch()
      }
    }
  );

  const {mutateAsync: createAsync} = useMutation(
    'create actor',
    () =>
      ActorService.createActor(), {

      onError: (error) => {
        toastError(error, 'Create actor')
      },

      onSuccess: ({data: _id}) => {
        toastr.success('Create actor', 'create was successful')
        push(getAdminUrl(`actor/edit/${_id}`))
      }
    }
  );

  return useMemo(() => ({
    handleSearch, ...queryData, searchTerm, deleteAsync, createAsync
  }), [queryData, searchTerm, deleteAsync, createAsync])
}
