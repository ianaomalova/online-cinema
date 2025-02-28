import axios from '../api/interceptors'
import {getGenresUrl} from '@/config/api.config';
import {IGenre} from '@/shared/types/movie.types';
import {axiosClassic} from '../api/interceptors';
import {IGenreEditInput} from '@/screens/admin/genre/genre-edit.interface';

export const GenreService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
      params: searchTerm? {searchTerm} : {}
    });
  },

  async getById(_id: string) {
    return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`));
  },

  async deleteGenre(_id: string) {
    return axios.delete<string>(getGenresUrl(`/${_id}`))
  },

  async updateGenre(_id: string, data: IGenreEditInput) {
    return axios.put<string>(getGenresUrl(`/${_id}`), data)
  }
}
