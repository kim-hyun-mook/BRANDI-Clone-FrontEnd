import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { getCategoryProducts } from '../../apis/getCartegoryProducts/getCategoryProducts';

const initialState = {
  entities: [],
  loading: false,
  error: false,
  query: '하루배송',
};

export const getTodayProductList = createAsyncThunk(
  'products/getTodayProductList',
  async (query) => {
    try {
      const todayProductList = await getCategoryProducts(query);
      return todayProductList;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

export const todayProductListSlice = createSlice({
  name: 'todayProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodayProductList.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getTodayProductList.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(getTodayProductList.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});


export default todayProductListSlice.reducer