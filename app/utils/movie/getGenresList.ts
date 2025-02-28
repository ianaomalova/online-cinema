import {IGenre} from '@/shared/types/movie.types';

export const getGenresListEach = (
  index: number,
  length: number,
  name: string,
)=> (index + 1 === length ? name : name + ',')


interface IArrayItem {
  name: string[]
}
export const getGenresList = (array: IGenre[]) => {
  return array.map(i => i.name).join(', ');
}
