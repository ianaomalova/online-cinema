import {FC} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {IGenreEditInput} from '@/screens/admin/genre/genre-edit.interface';
import {useGenreEdit} from '@/screens/admin/genre/useGenreEdit';
import Meta from '@/utils/meta/Meta';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import Heading from '@/ui/heading/Heading';
import SkeletonLoader from '@/ui/SkeletonLoader';
import Field from '@/ui/form-elements/Field';
import SlugField from '@/ui/form-elements/slug-field/SlugField';
import {generateSlug} from '@/utils/string/generateSlug';
import Button from '@/ui/form-elements/Button';
import formStyles from '@/ui/form-elements/admin-form.module.scss'
import TextEditor from '@/ui/form-elements/TextEditor';
import {stripHtml} from 'string-strip-html';
import dynamic from 'next/dynamic';

const DynamicTextEditor = dynamic(
  () => import('@/ui/form-elements/TextEditor'),
  {
    ssr: false,
  }
)

const GenreEdit: FC = () => {
  const {handleSubmit, register, formState: {errors}, setValue, getValues, control} = useForm<IGenreEditInput>({
    mode: 'onChange'
  })

  const {isLoading, onSubmit} = useGenreEdit(setValue)
  return (
    <Meta title='Edit genre'>
      <AdminNavigation/>
      <Heading title='Edit genre'/>
      <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
        {isLoading ? (
          <SkeletonLoader count={3}/>
        ) : (
          <>
            <div className={formStyles.fields}>
              <Field
                {...register('name', {
                  required: 'Name is required!',
                })}
                placeholder="Name"
                error={errors.name}
                style={{width: '31%'}}
              />

              <div style={{width: '31%'}}>
                <SlugField
                  generate={() =>
                    setValue('slug', generateSlug(getValues('name')))
                  }
                  register={register}
                  error={errors.slug}
                />
              </div>

              <Field
                {...register('icon', {
                  required: 'Icon is required!',
                })}
                placeholder="Icon"
                error={errors.icon}
                style={{width: '31%'}}
              />
            </div>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({
                         field: {value, onChange},
                         fieldState: {error},
                       }) => (
                <DynamicTextEditor
                  placeholder="Description"
                  onChange={onChange}
                  error={error}
                  value={value}
                />
              )}
              rules={{
                validate: {
                  required: (v) =>
                    (v && stripHtml(v).result.length > 0) ||
                    'Description is required!',
                },
              }}
            />
            <Button>Update</Button>
          </>
        )}
      </form>
    </Meta>
  );
};

export default GenreEdit;
