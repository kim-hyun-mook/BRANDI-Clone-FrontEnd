import { configureStore } from '@reduxjs/toolkit'
import todayReducer from '@stores/slices/todayProductListSlice'
import tomorrowReducer from '@stores/slices/tomorrowProductListSlice'
/*해당 부분 counter는 예시입니다.*/
export const store = configureStore({
  reducer: {
    todayProducts: todayReducer,
    tomorrowProducts: tomorrowReducer
  }
})
