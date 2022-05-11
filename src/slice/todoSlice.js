import { createSlice } from "@reduxjs/toolkit";
import { toDo } from "../thunk/todo";
const initialState = {
  obj: []
};

export const slicecart = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(toDo.fulfilled, (state, action) => {
      state.obj = action.payload;
      console.log(state.obj);
    });
  }
});

export default slicecart.reducer;
