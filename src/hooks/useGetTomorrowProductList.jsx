import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTomrrowProductList } from '../stores/slices/tomorrowProductListSlice';

const useGetTomorrowProductList = () => {
  const dispatch = useDispatch();

  const { entities, loading, error } = useSelector(
    (state) => state.tomorrowProducts
  );


  const getTomorrowProductData = useCallback(async () => {
    dispatch(getTomrrowProductList());
  }, [dispatch]);

  useEffect(() => {
    getTomorrowProductData();
  }, [getTomorrowProductData]);

  return { entities, loading, error };
};

export default useGetTomorrowProductList;
