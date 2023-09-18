import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@stores/slice/counterSlice'
/*해당 부분 counter는 예시입니다.*/
export default configureStore({
  reducer: {
    counter: counterReducer
  }
})