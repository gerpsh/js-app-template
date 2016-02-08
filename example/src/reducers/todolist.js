import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

const initialState = {
  todos: [1, 2, 3],
  todosById: {
    1: {
      id: 1,
      name: 'Buy groceries'
    },
    2: {
      id: 2,
      name: 'Clean room'
    },
    3: {
      id: 3,
      name: 'Kill self'
    }
  }
};

export default function todos(state = initialState, action) {
  switch (action.type) {

    case types.ADD_TODO:
      const newId = state.todos[state.todos.length-1] + 1;
      return {
        ...state,
        todos: state.todos.concat(newId),
        todosById: {
          ...state.todosById,
          [newId]: {
            id: newId,
            name: action.name
          }
        },
      }

    case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(id => id !== action.id),
        todosById: omit(state.todosById, action.id)
      }

    case types.STAR_TODO:
      return {
        ...state,
        todosById: mapValues(state.todosById, (todo) => {
          return todo.id === action.id ?
            assign({}, todo, { starred: !todo.starred }) :
            todo
        })
      }

    default:
      return state;
  }
}
