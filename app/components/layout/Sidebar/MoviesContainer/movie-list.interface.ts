import {IMovie} from '@/shared/types/movie.types';

export interface IMovieList {
  movies: IMovie[];
  title: string;
  link: string;
}
