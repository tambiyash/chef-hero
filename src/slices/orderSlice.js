import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllOrdersAPI, fetchPaginatedOrdersAPI } from "../api/api";

// First, create the thunks
const fetchAllOrders = createAsyncThunk('fetchAllOrdersStatus', async () => {
  const response = await fetchAllOrdersAPI();
  return response.json();
});

const fetchPaginatedOrders = createAsyncThunk('fetchPaginatedOrdersStatus', async ({page, limit}) => {
  const response = await fetchPaginatedOrdersAPI(page, limit);
  const result = await response.json();
  return {
    count: response.headers.get("X-Total-Count"),
    result: result,
  };
});

// Define initial State with loading, empty orders array and null error
const initState = {
  allOrders: {
    loading: false,
    error: null,
    data: []
  },
  paginatedOrders: {
    loading: false,
    error: null,
    total: 0,
    data: []
  },
}

const orderSlice = createSlice({
  name: "orders",
  initialState: initState,
  reducers: {},
  extraReducers: {
    // Paginated orders status
    [fetchPaginatedOrders.pending]: (state, action) => {
      state.paginatedOrders.loading = true;
    },
    [fetchPaginatedOrders.fulfilled]: (state, action) => {
      state.paginatedOrders.loading = false;
      const {count, result} = action.payload;
      state.paginatedOrders.data = result;
      state.paginatedOrders.total = Number.parseInt(count);
    },
    [fetchPaginatedOrders.rejected]: (state, action) => {
      state.paginatedOrders.loading = false;
      state.paginatedOrders.error = action.payload.result;
    },
    // All orders status
    [fetchAllOrders.pending]: (state, action) => {
      state.allOrders.loading = true;
    },
    [fetchAllOrders.fulfilled]: (state, action) => {
      state.allOrders.loading = false;
      state.allOrders.data = action.payload;
    },
    [fetchAllOrders.rejected]: (state, action) => {
      state.allOrders.loading = false;
      state.allOrders.error = action.payload;
    },
  },
});

export { fetchPaginatedOrders, fetchAllOrders };

export default orderSlice.reducer;
