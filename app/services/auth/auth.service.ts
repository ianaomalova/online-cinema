import axios from 'axios';
import {IAuthResponse} from '@/store/user/user.interface';
import {getAuthUrl} from '@/config/api.config';
import {removeTokensStorage, saveToStorage} from '@/services/auth/auth.helper';
import Cookies from 'js-cookie';
import {axiosClassic} from '../../api/interceptors';
import {getContentType} from '../../api/api.helperes';

export const AuthService = {
  async register (email: string, password: string) {
    const response = await axiosClassic.post<IAuthResponse>(getAuthUrl('/register'), {
      email, password
    })

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  },

  async login (email: string, password: string) {
    const response = await axiosClassic.post<IAuthResponse>(getAuthUrl('/login'), {
      email, password
    })

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  },

  logout() {
    removeTokensStorage();
    localStorage.removeItem('user');
  },

  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken');
    const response = await axiosClassic.post<IAuthResponse>(getAuthUrl('/login/access-token'),
      {refreshToken}, {headers: getContentType()});

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  }
}
