import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addTask } from '../actions/tasks';
import TextField from '@material-ui/core/TextField';

export class TaskForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      task: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const task = Object.assign({}, this.state, { done: false, id: uuid() });
    this.props.addTask(task);
    this.setState({
      task: ''
    });
  }

  render() {
    
    return (            
      <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
        <TextField
          id="with-placeholder"
          autoComplete="off"
          placeholder="Add an item..."
          className="form-control"
          margin="normal"
          name="task"
          onChange={this.handleOnChange}
          value={this.state.task}
        />
      </form>
    );
  }
}

export default connect(null, { addTask })(TaskForm);