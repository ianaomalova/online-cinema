import {FC} from 'react';
import styles from './SearchList.module.scss';
import {IMovie} from '@/shared/types/movie.types';
import Link from 'next/link';
import {getMovieUrl} from '@/config/url.config';
import Image from 'next/image';

const SearchList: FC<{ movies: IMovie[] }> = ({movies}) => {
  console.log('search list rendered');
  return (
    <div className={styles.list}>
      {movies.length ? movies.map(movie => (
        <Link key={movie._id} href={getMovieUrl(movie.slug)} legacyBehavior>
          <a>
            <Image
              src={movie.poster}
              alt={movie.title}
              width={50}
              height={50}
              objectFit='cover'
              objectPosition='top'
              draggable={false}
            />
            <span>{movie.title}</span>
          </a>
        </Link>
      )) : <div className='text-white text-center my-4'>Movies not found</div>}
    </div>
  );
};

export default SearchList;
