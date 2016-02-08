import * as types from '../constants/ActionTypes';

export function addTodo(name) {
  return {
    type: types.ADD_TODO,
    name
  };
}

export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    id
  };
}

export function starTodo(id) {
  return {
    type: types.STAR_TODO,
    id
  };
}
