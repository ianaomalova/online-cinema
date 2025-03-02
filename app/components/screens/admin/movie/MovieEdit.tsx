import {FC} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {IMovieEditInput} from '@/screens/admin/movie/movie-edit.interface';
import Meta from '@/utils/meta/Meta';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import Heading from '@/ui/heading/Heading';
import SkeletonLoader from '@/ui/SkeletonLoader';
import Field from '@/ui/form-elements/Field';
import SlugField from '@/ui/form-elements/slug-field/SlugField';
import {generateSlug} from '@/utils/string/generateSlug';
import Button from '@/ui/form-elements/Button';
import formStyles from '@/ui/form-elements/admin-form.module.scss'
import dynamic from 'next/dynamic';
import {useMovieEdit} from '@/screens/admin/movie/useMovieEdit';
import UploadField from '@/ui/form-elements/upload-field/UploadField';
import {useAdminGenres} from '@/screens/admin/movie/useAdminGenres';
import {useAdminActors} from '@/screens/admin/movie/useAdminActors';

const DynamicSelect = dynamic(
  () => import('@/ui/form-elements/select/Select'),
  {
    ssr: false,
  }
)

const MovieEdit: FC = () => {
  const {handleSubmit, register, formState: {errors}, setValue, getValues, control} = useForm<IMovieEditInput>({
    mode: 'onChange'
  })

  const {isLoading, onSubmit} = useMovieEdit(setValue)

  const {isLoading: isLoadingGenres, data: genres} = useAdminGenres()
  const {isLoading: isLoadingActors, data: actors} = useAdminActors()

  return (
    <Meta title='Edit movie'>
      <AdminNavigation/>
      <Heading title='Edit movie'/>
      <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
        {isLoading ? (
          <SkeletonLoader count={3}/>
        ) : (
          <>
            <div className={formStyles.fields}>
              <Field
                {...register('title', {
                  required: 'Title is required!',
                })}
                placeholder="Name"
                error={errors.title}
              />

                <SlugField
                  generate={() =>
                    setValue('slug', generateSlug(getValues('title')))
                  }
                  register={register}
                  error={errors.slug}
                />

              <Field
                {...register('parameters.country', {
                  required: 'Country is required!',
                })}
                placeholder="Country"
                error={errors.parameters?.country}
                style={{width: '31%'}}
              />

              <Field
                {...register('parameters.duration', {
                  required: 'Duration is required!',
                })}
                placeholder="Duration"
                error={errors.parameters?.duration}
                style={{width: '31%'}}
              />

              <Field
                {...register('parameters.year', {
                  required: 'Year is required!',
                })}
                placeholder="Year"
                error={errors.parameters?.year}
                style={{width: '31%'}}
              />

              <Controller
                name="genres"
                control={control}
                render={({
                           field,
                           fieldState: {error},
                         }) => (
                  <DynamicSelect
                    field={field}
                    options={genres || []}
                    isLoading={isLoadingGenres}
                    isMulti
                    placeholder='Genres'
                    error={error}
                  />
                )}
                rules={{
                  required: 'Please select at least one genre!'
                }}
              />

              <Controller
                name="actors"
                control={control}
                render={({
                           field,
                           fieldState: {error},
                         }) => (
                  <DynamicSelect
                    field={field}
                    options={actors || []}
                    isLoading={isLoadingActors}
                    isMulti
                    placeholder='Actors'
                    error={error}
                  />
                )}
                rules={{
                  required: 'Please select at least one actor!'
                }}
              />

              <Controller
                name="poster"
                control={control}
                defaultValue=""
                render={({
                           field: {value, onChange},
                           fieldState: {error},
                         }) => (
                  <UploadField
                    onChange={onChange}
                    value={value}
                    error={error}
                    folder='movies'
                    placeholder='Poster'
                  />
                )}
                rules={{
                  required: 'Poster is required!'
                }}
              />

              <Controller
                name="bigPoster"
                control={control}
                defaultValue=""
                render={({
                           field: {value, onChange},
                           fieldState: {error},
                         }) => (
                  <UploadField
                    onChange={onChange}
                    value={value}
                    error={error}
                    folder='movies'
                    placeholder='Big poster'
                  />
                )}
                rules={{
                  required: 'Big poster is required!'
                }}
              />

              <Controller
                name="videoUrl"
                control={control}
                defaultValue=""
                render={({
                           field: {value, onChange},
                           fieldState: {error},
                         }) => (
                  <UploadField
                    onChange={onChange}
                    value={value}
                    error={error}
                    folder='movies'
                    placeholder='Video'
                    isNoImage
                    style={{marginTop: -25}}
                  />
                )}
                rules={{
                  required: 'Video is required!'
                }}
              />
            </div>
            <Button>Update</Button>
          </>
        )}
      </form>
    </Meta>
  );
};

export default MovieEdit;
