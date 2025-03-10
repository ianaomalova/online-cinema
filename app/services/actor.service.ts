import axios, {axiosClassic} from '../api/interceptors';
import {IActor} from '@/shared/types/movie.types';
import {getActorsUrl} from '@/config/api.config';
import {IActorEditInput} from '@/screens/admin/actor/actor-edit.interface';

export const ActorService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IActor[]>(getActorsUrl(''), {
      params: searchTerm? {searchTerm} : {}
    });
  },

  async deleteActor(_id: string) {
    return axios.delete<string>(getActorsUrl(`/${_id}`))
  },

  async createActor() {
    return axios.post<string>(getActorsUrl(`/`));
  },

  async getById(_id: string) {
    return axios.get<IActorEditInput>(getActorsUrl(`/${_id}`));
  },

  async updateActor(_id: string, data: IActorEditInput) {
    return axios.put<string>(getActorsUrl(`/${_id}`), data)
  }
}
