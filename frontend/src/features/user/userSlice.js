import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./userAPI";

const initialState = {
  value: 0,
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "user/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);

    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;

export const selectCount = (state) => state.user.value;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default userSlice.reducer;
