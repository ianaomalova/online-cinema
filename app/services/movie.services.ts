import axios, {axiosClassic} from '../api/interceptors';
import {IMovie} from '@/shared/types/movie.types';
import {getMoviesUrl} from '@/config/api.config';
import {IMovieEditInput} from '@/screens/admin/movie/movie-edit.interface';

export const MoviesService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
      params: searchTerm? {searchTerm} : {}
    });
  },

  async getById(_id: string) {
    return axios.get<IMovieEditInput>(getMoviesUrl(`/${_id}`));
  },

  async getMostPopularMovies() {
    const {data: movies} = await axiosClassic.get<IMovie[]>(getMoviesUrl('/most-popular'))
    console.log(movies);

    return movies;
  },

  async deleteMovie(_id: string) {
    return axios.delete<string>(getMoviesUrl(`/${_id}`))
  },

  async createMovie() {
    return axios.post<string>(getMoviesUrl(`/`));
  },

  async updateMovie(_id: string, data: IMovieEditInput) {
    return axios.put<string>(getMoviesUrl(`/${_id}`), data)
  }
}
