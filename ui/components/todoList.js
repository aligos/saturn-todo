import React from 'react';
import { connect } from 'react-apollo';
import gql from 'graphql-tag';
import api from './mutations';

function Loading() {
  return (
    <div>Loading...</div>
  );
}

export default class todoItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    }
  }

  toggleClick(e) {
    api.toggleTodo({
      todoId: e.target.getAttribute('id')
    });
  }

  render() {
    const { loading, todos } = this.props.data;
    const tgl = this.toggleClick.bind(this);
    if (loading) {
      return <Loading />;
    }
    return (
      <div>
        <section>
          <div className="qh-sura">
          {todos.map(function(todo) {
            return (
              <ul key={todo.id}>
                <li
                  id={todo.id}
                  onClick={tgl}
                  style={{textDecoration: todo.completed === true ? 'line-through' : 'none'}}
                >
                  {todo.title}
                </li>
              </ul>
            )
          })}
          </div>
        </section>
      </div>
    );
  }
}

function mapQueriesToProps() {
  return {
    data: {
      query: gql`
        query RootQuery {
          todos {
            id
            title
            completed
          }
        }
      `,
      forceFetch: false,
      returnPartialData: false
    }
  }
}

const todoList = connect({
  mapQueriesToProps
})(todoItems);

export default todoList;
