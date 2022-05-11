import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const toDo = createAsyncThunk("todo/fetchTodo", async (data) => {
  // Where you will write the logic for api call
  console.log(data);
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${data}`
  );

  return response.data;
});
