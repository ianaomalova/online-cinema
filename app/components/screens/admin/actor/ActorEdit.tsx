import {FC} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {IActorEditInput} from '@/screens/admin/actor/actor-edit.interface';
import Meta from '@/utils/meta/Meta';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import Heading from '@/ui/heading/Heading';
import SkeletonLoader from '@/ui/SkeletonLoader';
import Field from '@/ui/form-elements/Field';
import SlugField from '@/ui/form-elements/slug-field/SlugField';
import {generateSlug} from '@/utils/string/generateSlug';
import Button from '@/ui/form-elements/Button';
import formStyles from '@/ui/form-elements/admin-form.module.scss'
import {useActorEdit} from '@/screens/admin/actor/useActorEdit';
import UploadField from '@/ui/form-elements/upload-field/UploadField';

const ActorEdit: FC = () => {
  const {handleSubmit, register, formState: {errors}, setValue, getValues, control} = useForm<IActorEditInput>({
    mode: 'onChange'
  })

  const {isLoading, onSubmit} = useActorEdit(setValue)
  return (
    <Meta title='Edit actor'>
      <AdminNavigation/>
      <Heading title='Edit actor'/>
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
              />

              <SlugField
                generate={() =>
                  setValue('slug', generateSlug(getValues('name')))
                }
                register={register}
                error={errors.slug}
              />

            </div>
            <Controller
              name="photo"
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
                  folder='actors'
                  placeholder='Photo'
                />
              )}
              rules={{
                required: 'Photo is required!'
              }}
            />
            <Button>Update</Button>
          </>
        )}
      </form>
    </Meta>
  );
};

export default ActorEdit;
