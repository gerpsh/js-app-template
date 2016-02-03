import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddtodoInput.css';

export default class AddTodoInput extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  render () {
    return (
      <input
        type="text"
        autoFocus="true"
        className={classnames('form-control', styles.addTodoInput)}
        placeholder="Type the name of a todo"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addTodo(name);
      this.setState({ name: '' });
    }
  }

}
