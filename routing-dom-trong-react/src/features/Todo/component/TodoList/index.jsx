
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import './styles.scss'

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
}

TodoList.defaltProps = {
    todoList: [],
    onTodoClick: null
}

function TodoList({todoList, onTodoClick}) {
    const handleTodoClick = (todo, idx) => {
        if(!onTodoClick) return;
        onTodoClick(todo, idx);
    }
    return (
        <ul className='todo-list'>
            {todoList.map((todo, idx) => (
                <li 
                    className={classNames({
                        'todo-item': true,
                        completed: todo.status==='completed'
                    })} 
                    key={todo.id}
                    onClick={() => handleTodoClick(todo, idx)}
                > {todo.title} </li>
            ))}
            
        </ul>
    )
}


export default TodoList

