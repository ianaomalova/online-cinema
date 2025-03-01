import {FC} from 'react';
import {IUploadFile} from '@/ui/form-elements/form.interface';
import {useUpload} from '@/ui/form-elements/upload-field/useUpload';
import cn from 'classnames';
import styles from '../form.module.scss'
import SkeletonLoader from '@/ui/SkeletonLoader';
import Image from 'next/image';

const UploadField: FC<IUploadFile> = ({
                                         onChange,
                                         placeholder,
                                         error,
                                         folder,
                                         value,
                                         style,
                                         isNoImage = false
                                       }) => {
  const {uploadFile, isLoading} = useUpload(onChange, folder)
  return (
    <div className={cn(styles.field, styles.uploadField)} style={style}>
      <div className={styles.uploadFlex}>
        <label>
          <span>{placeholder}</span>
          <input type='file' onChange={uploadFile}/>
          {error && <div className={styles.error}>{error.message}</div>}
        </label>

        {!isNoImage && <div className={styles.uploadImageContainer}>
          {isLoading ? <SkeletonLoader count={1} className='w-full h-full'/> :
            value && <Image src={value} alt='' layout='fill' unoptimized />
          }
        </div> }
      </div>
    </div>
  );
};

export default UploadField;
