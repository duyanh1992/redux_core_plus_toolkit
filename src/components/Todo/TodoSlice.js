const initialState = [
  {
    id: "3c90ca49-b80b-4d8f-a372-841312ebd2a5",
    content: "Learn 1",
    priority: "Medium",
    status: "Todo",
  },
  {
    id: "12ee48a5-29fc-4efc-8942-4327aa5d697d",
    content: "Learn 2",
    priority: "Medium",
    status: "Todo",
  },
  {
    id: "aa57c38a-0726-4661-9f65-590f5641067c",
    content: "Learn 3",
    priority: "Medium",
    status: "Todo",
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/add":
      return [...state.todoList, action.payload];

    case "todo/setTodoStatus":
      const clonedTodoList1 = [...state];
      const selectingIndexItem = clonedTodoList1.findIndex(
        (obj) => obj.id === action.payload.id
      );
      clonedTodoList1[selectingIndexItem].status = action.payload.status;

      return [...clonedTodoList1];
    default:
      return state;
  }
};

export default todoReducer;
