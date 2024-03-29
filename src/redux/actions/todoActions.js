// todoActions.js
import {
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO,
    SET_VISIBILITY_FILTER
  } from './actionTypes';
  
  export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
  });
  
  export const deleteTodo = (todoId) => ({
    type: DELETE_TODO,
    payload: todoId
  });
  
  export const updateTodo = (todo) => ({
    type: UPDATE_TODO,
    payload: todo
  });
  
  export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    payload: filter
  });
  