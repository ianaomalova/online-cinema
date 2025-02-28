import {FC} from 'react';
import styles from '../Admin.module.scss'
import {useQuery} from 'react-query';
import {MoviesService} from '@/services/movie.services';
import {IMovie} from '@/shared/types/movie.types';
import cn from 'classnames';
import SubHeading from '@/ui/heading/SubHeading';
import SkeletonLoader from '@/ui/SkeletonLoader';
import Link from 'next/link';
import Image from 'next/image';
import {getMovieUrl} from '@/config/url.config';

const PopularMovie: FC = () => {
  const {isLoading, data:movie} = useQuery('Popular movie', () => MoviesService.getMostPopularMovies(), {
    select: (data): IMovie => data[0]
  })
  return (
    <div className={cn(styles.block, styles.popular)}>
      <SubHeading title='The most popular movie' />
      {isLoading ?
        <SkeletonLoader className='h-48'/> :
        movie && <>
        <h3>Opened {movie.countOpened} times</h3>
        <Link href={getMovieUrl(movie.slug)} legacyBehavior>
          <a>
            <Image
              width={285}
              height={176}
              src={movie.bigPoster}
              alt={movie.title}
              className={styles.image}
              unoptimized
            />
          </a>
        </Link>
        </>
      }
    </div>
  );
};

export default PopularMovie;
