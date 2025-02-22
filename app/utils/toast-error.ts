import {errorCatch} from '../api/api.helperes';
import {toastr} from 'react-redux-toastr';

export const toastError = (error: any, title?:string): void => {
  const message = errorCatch(error);
  toastr.error(title || 'Error request', message)
  throw message;
}
