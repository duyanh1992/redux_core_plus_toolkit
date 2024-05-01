// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "../Filters/FilterSlice";
import { todoSlice } from "../Todo/TodoSlice";

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;

const store = configureStore({
  reducer: {
    todoList: todoSlice.reducer,
    filters: filterSlice.reducer,
  },
});

export default store;
