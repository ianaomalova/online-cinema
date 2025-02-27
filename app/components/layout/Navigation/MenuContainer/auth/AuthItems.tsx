import {FC, useEffect, useState} from 'react';
import {useAuth} from '@/hooks/useAuth';
import MenuItem from '@/components/layout/Navigation/MenuContainer/MenuItem';
import LogoutButton from '@/components/layout/Navigation/MenuContainer/auth/LogoutButton';
import {getAdminHomeUrl} from '@/config/url.config';

const AuthItems: FC = () => {
  const {user} = useAuth()
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {user ?
        <>
          <MenuItem item={{title: 'Profile', link: '/profile', icon: 'MdSettings'}} />
          <LogoutButton />
        </> :
        <MenuItem item={{title: 'Login', link: '/auth', icon: 'MdLogin'}} />
      }

      {user?.isAdmin && <MenuItem item={{title: 'Admin Panel', icon: 'MdOutlineLock', link: getAdminHomeUrl()}} />}
    </>
  );
};

export default AuthItems;
