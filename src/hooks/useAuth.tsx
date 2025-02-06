import { useSelector } from 'react-redux';
import { IStateRedux } from '../shared/_architecture/domain/state.interface';

const useAuth = () => {
  const user = useSelector((state: IStateRedux) => state.user);
  return {
    isAuth: !!user?.id,
    userId: user?.id,
    userName: user?.userName,
  }
}

export default useAuth