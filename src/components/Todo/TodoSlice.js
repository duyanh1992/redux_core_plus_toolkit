// const initialState = [
//   {
//     id: "3c90ca49-b80b-4d8f-a372-841312ebd2a5",
//     content: "Learn 1",
//     priority: "Medium",
//     completed: false,
//   },
//   {
//     id: "12ee48a5-29fc-4efc-8942-4327aa5d697d",
//     content: "Learn 2",
//     priority: "Low",
//     completed: true,
//   },
//   {
//     id: "aa57c38a-0726-4661-9f65-590f5641067c",
//     content: "Learn 3",
//     priority: "High",
//     completed: false,
//   },
// ];

import { createSlice } from "@reduxjs/toolkit";

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "todo/add":
//       return [...state, action.payload];

//     case "todo/setTodoStatus":
//       const clonedTodoList1 = [...state];
//       // const selectingIndexItem = clonedTodoList1.findIndex(
//       //   (obj) => obj.id === action.payload.id
//       // );
//       // clonedTodoList1[selectingIndexItem].status = action.payload.status;

//       // return [...clonedTodoList1];
//       return state
//     default:
//       return state;
//   }
// };

// export default todoReducer;

export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      id: "3c90ca49-b80b-4d8f-a372-841312ebd2a5",
      content: "Learn 1",
      priority: "Medium",
      completed: false,
    },
    {
      id: "12ee48a5-29fc-4efc-8942-4327aa5d697d",
      content: "Learn 2",
      priority: "Low",
      completed: true,
    },
    {
      id: "aa57c38a-0726-4661-9f65-590f5641067c",
      content: "Learn 3",
      priority: "High",
      completed: false,
    },
  ],
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
    },
  }
});
