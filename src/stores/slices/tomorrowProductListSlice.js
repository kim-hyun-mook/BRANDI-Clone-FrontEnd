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
  query: '내일배송',
};

export const getTomrrowProductList = createAsyncThunk(
  'products/getTomorrowProductList',
  async (query) => {
    try {
      const tomorrowProductList = await getCategoryProducts(query);
      return tomorrowProductList;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

export const tomorrowProductListSlice = createSlice({
  name: 'tomorrowProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTomrrowProductList.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getTomrrowProductList.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(getTomrrowProductList.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default tomorrowProductListSlice.reducer;
