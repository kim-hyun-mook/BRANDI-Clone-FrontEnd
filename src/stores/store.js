import { configureStore } from '@reduxjs/toolkit'
import todayReducer from '@stores/slices/todayProductListSlice'
/*해당 부분 counter는 예시입니다.*/
export const store = configureStore({
  reducer: {
    todayProducts: todayReducer
  }
})
