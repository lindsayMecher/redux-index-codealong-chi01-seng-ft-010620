import React from 'react';
import { Todo } from './Todo';
import { connect } from 'react-redux';

class TodosContainer extends React.Component{
  
    renderTodos = () => {
        console.log(this.props.todos)
        return this.props.todos.map((todo, index) => {
            return(
                <Todo todo={todo} key={index}/>
            )
        })
    }
    render(){
        return(
            <div>
                {this.renderTodos()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

export default connect(mapStateToProps, null)(TodosContainer);