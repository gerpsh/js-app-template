import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './TodoListItem.css';

export default class TodoListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starred: PropTypes.bool,
    starTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  render () {
    return (
      <li className={styles.todoListItem}>
        <div className={styles.todoInfos}>
          <div><span>{this.props.name}</span></div>
        </div>
        <div className={styles.todoActions}>
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.starTodo(this.props.id)}>
            <i className={classnames('fa', { 'fa-star': this.props.starred }, { 'fa-star-o': !this.props.starred })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.deleteTodo(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}
