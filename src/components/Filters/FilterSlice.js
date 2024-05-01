// const initialState = {
//   search: "",
//   status: "All",
//   priority: [],
// };

import { createSlice } from "@reduxjs/toolkit";

// const filterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "filter/search":
//       return {
//         ...state,
//         search: action.payload.search,
//       };

//     case "todo/filterStatus":
//       return {
//         ...state,
//         status: action.payload.status,
//       };

//     case "filter/priority":
//       return {
//         ...state,
//         priority: action.payload.priority,
//       };

//     default:
//       return state;
//   }
// };

// export default filterReducer;

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    search: (state, action) => {
      state.search = action.payload.search;
    },
    filterStatus: (state, action) => {
      state.status = action.payload.status;
    },
    priority: (state, action) => {
      state.priority = action.payload.priority
    },
  },
});
