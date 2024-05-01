export const addTodo = (payload) => {
  return {
    type: "todo/add",
    payload,
  };
};

export const onSearchTodo = (payload) => {
  return {
    type: "filter/search",
    payload,
  };
};

export const onFilterStatus = (payload) => {
  return {
    type: "todo/filterStatus",
    payload,
  };
};

export const setTodoStatus = (payload) => {
  return {
    type: "filter/setTodoStatus",
    payload,
  };
};

export const onFilterPriority = (payload) => {
  return {
    type: "filter/priority",
    payload,
  };
};
