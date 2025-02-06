import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPhrasesSlider } from '../../../redux/sliders/phrases/get';

const HomePage = () => {
  const dispatch = useDispatch<any>();
  const user = useSelector((state: any) => state.user);
  const phrasesData = useSelector((state: any) => state.phrases);
  console.log(phrasesData)
  useEffect(() => {
    dispatch(getPhrasesSlider({ id: user.id }));
  }, [user]);
  return (
    <div className='h-[7000px]'>HomePAge</div>
  )
}

export default HomePage