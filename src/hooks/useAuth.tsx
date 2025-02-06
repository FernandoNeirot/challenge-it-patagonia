import { useSelector } from 'react-redux';
import { IStateRedux } from '../shared/_architecture/domain/state.interface';
import useLocalStorage from './useLocalStorage';
import { LOCAL_STORAGE } from '../shared/utils/localStorage';

interface IAuth {
  isAuthApp: boolean;
  userId: string;
  userName: string;
}

const useAuth = ():IAuth => {
  const user = useSelector((state: IStateRedux) => state.user);
  const { value: jwt } = useLocalStorage({ key: LOCAL_STORAGE.constants.JWT });
  return {
    isAuthApp: !!jwt,
    userId: user?.id,
    userName: user?.userName,
  }
}

export default useAuth