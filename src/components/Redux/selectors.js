import { createSelector } from "reselect";

export const getTodoList = (state) => state.todoList;
export const getFilterObj = (state) => state.filters;

export const todoRemainingSelector = createSelector(
  getTodoList,
  getFilterObj,
  (todoList, filters) => {
    return todoList.filter((todo) => {
      if (filters?.status === 'All') return todo.content.includes(filters?.search)

      return todo.content.includes(filters?.search) && (filters?.status === 'Completed' ? todo.completed : !todo.completed);
    });
  }
);
