import React from 'react'
import './Todo.css'

const Todo = ()=>{
    return (
        <div className='container'>
            <h2>Todo App</h2>
            <form className='form-group'>
                <input type="text" placeholder="Add a new task" className='form-control' />
                <button>ADD</button>

            </form>
            <div className='list'>
            <ul>
                <li className='form-control'>Something</li>
                <li className='form-control'>Something</li>
                <li className='form-control'>Something</li>
            </ul>
            </div>
        </div>
    )
}

export default Todo