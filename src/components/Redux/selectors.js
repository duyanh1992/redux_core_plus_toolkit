import { createSelector } from "reselect";

export const getTodoList = (state) => state.todoList;
export const getFilterObj = (state) => state.filters;

export const todoRemainingSelector = createSelector(
  getTodoList,
  getFilterObj,
  (todoList, filters) => {
    if (filters?.search === "") return todoList;
    return todoList.filter((todo) => {
      return todo.content.includes(filters?.search);
    });
  }
);
