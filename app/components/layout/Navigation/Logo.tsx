import {FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import imageLogo from '@/assets/images/logo.svg'

const Logo: FC = () => {
    return (
        <Link href='/' legacyBehavior>
            <a className='px-layout mb-10 block'>
              <Image src={imageLogo} width={247} height={34} alt='online cinema' draggable={false}/>
            </a>
        </Link>
    );
};

export default Logo;
