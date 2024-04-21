const initialState = {
    search: "",
    status: "All",
    priority: [],
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "filter/search":
        return {
          ...state,
          search: action.payload.search,
        };
  
      case "todo/filterStatus":
        // const clonedTodoList2 = [...state.todoList];
        // const filteredTodoList2 = clonedTodoList2.filter(
        //   (obj) => obj.status === action.payload.status
        // );
  
        return {
          ...state,
          status: action.payload.status,
        };
  
      default:
        return state;
    }
  };
  
  export default filterReducer;
  