import { combineReducers } from "redux";

import filterReducer from "../Filters/FilterSlice";
import todoReducer from "../Todo/TodoSlice";

// const rootReducer = (state = {}, action) => {
//   return {
//     todoList: todoReducer(state.todoList, action),
//     filters: filterReducer(state.filters, action),
//   };
// };

const rootReducer = combineReducers({
  todoList: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
