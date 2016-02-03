import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';

import styles from './TodoList.css';
import TodoListItem from './TodoListItem';

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    return (
      <ul className={styles.todoList}>
        {
          mapValues(this.props.todos, (todo) => {
            return (<TodoListItem
              key={todo.id}
              id={todo.id}
              name={todo.name}
              starred={todo.starred}
              {...this.props.actions} />);
          })
        }
      </ul>
    );
  }

}
