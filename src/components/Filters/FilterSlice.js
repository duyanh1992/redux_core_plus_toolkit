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
      return {
        ...state,
        status: action.payload.status,
      };

    case "filter/priority":
      return {
        ...state,
        priority: action.payload.priority,
      };

    default:
      return state;
  }
};

export default filterReducer;
