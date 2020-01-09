import React from 'react';
import { connect } from 'react-redux';

import {
  AddTodo,
  AddCheck,
  Delete,
  AllTodo,
  ActiveTodo,
  CompletedTodo
} from '../state/actions/index';
class Todo extends React.Component {
  handleSend = event => {
    if (event.keyCode == 13) {
      this.props.dispatch(AddTodo(event.target.value));
      event.target.value = '';
    }
  };
  render() {
    let { todo, dispatch } = this.props;
    return (
      <>
        <center>
          <h1 className="heading">todos</h1>
        </center>
        <div className="wrapper">
          <div className="input-wrapper">
            <input
              className="todo-input"
              type="text"
              placeholder="what needs to be done"
              onKeyUp={this.handleSend}
            />
          </div>
          <ul>
            {todo.map((item, index) => (
              <li>
                <div className="list">
                  <input
                    type="checkbox"
                    checked={item.isdone ? true : ''}
                    onClick={() => dispatch(AddCheck(item.id))}
                  />
                  <p className="list-text">{item.todoText}</p>
                </div>

                <button
                  className="del-btn"
                  onClick={() => dispatch(Delete(item.id))}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
          {todo.length ? (
            <div className="footer-container">
              <p>{todo.length}</p>
              <div className="footer">
                <button
                  onClick={() => dispatch(AllTodo())}
                  className="footer-btn"
                >
                  All
                </button>
                <button
                  onClick={() => dispatch(ActiveTodo())}
                  className="footer-btn"
                >
                  Active
                </button>
                <button
                  onClick={() => dispatch(CompletedTodo())}
                  className="footer-btn"
                >
                  Completed
                </button>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { todo: state };
}

export default connect(mapStateToProps)(Todo);
