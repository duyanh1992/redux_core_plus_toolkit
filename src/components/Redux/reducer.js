import filterReducer from "../Filters/FilterSlice";
import todoReducer from "../Todo/TodoSlice";

const initialState = {
  filters: {},
  todoList: [],
};

const rootReducer = (state = {}, action) => {
  return {
    filters: filterReducer(state.filters, action),
    todoList: todoReducer(state.todoList, action),
  };
};

export default rootReducer;
