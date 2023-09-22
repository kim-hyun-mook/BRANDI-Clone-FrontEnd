import { useCallback, useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodayProductList } from '../stores/slices/todayProductListSlice'

const useGetTodayProductList = () => {
	const dispatch = useDispatch()
	
	const { entities, loading, error } = useSelector(
    (state) => state.todayProducts
	);

	console.log(entities)
	
	const getTodayProductData = useCallback(async () => {
		dispatch(getTodayProductList())
	}, [dispatch])

	useEffect(() => {
   
    getTodayProductData();
  }, [getTodayProductData,]);
	
	return { entities, loading, error};
}

export default useGetTodayProductList