import { useContext } from 'react';
import { Context } from 'src/context/LocateContext';
import { locate } from 'src/i18n/locate';

const useLocateContext = () => {
  const value = useContext<locate>(Context);
  return value;
};

export default useLocateContext;
