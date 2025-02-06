import { useSelector } from 'react-redux';

const useAuth = () => {
  const user = useSelector((state: any) => state.user);
  return {
    isAuth: !!user?.id,
    userId: user?.id,
    userName: user?.name,
  }
}

export default useAuth