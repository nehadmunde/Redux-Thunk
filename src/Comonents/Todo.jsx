import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toDo } from "../thunk/todo";
const Todo = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toDo());
  }, []);
  const onChangeHandle = (event) => {
    setState(event.target.value);
  };
  const onClickHandle = () => {
    console.log(state);
    dispatch(toDo(state));
  };

  return (
    <div>
      <h1> Todo App</h1>

      <input type="text" onChange={onChangeHandle} />
      <button onClick={onClickHandle}>Search</button>
    </div>
  );
};
export default Todo;
