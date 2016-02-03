import React, { Component, PropTypes } from 'react';
import styles from './TodoListApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todosActions from '../actions/todosActions';
import { TodoList, AddTodoInput } from '../components';

@connect(state => ({
  todolist: state.todolist
}))
export default class TodoListApp extends Component {

  static propTypes = {
    todosById: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render () {
    const { todolist: { todosById }, dispatch } = this.props;
    const actions = bindActionCreators(todosActions, dispatch);

    return (
      <div className={styles.todoListApp}>
        <h1>The TodoList</h1>
        <AddTodoInput addTodo={actions.addTodo} />
        <TodoList todos={todosById} actions={actions} />
      </div>
    );
  }
}
