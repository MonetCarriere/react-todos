import React, { useState } from 'react'
import MaterialIcon from 'material-icons-react'
import TodoItem from './Todoitem'

export default props => {
    const [todo, setTodo] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <form onSubmit = {handleSubmit}>
            <div className="input">
                <MaterialIcon icon="keyboard_arrow_down"></MaterialIcon>
                <input type ="text" placeholder="What needs to be done?" value={todo} onChange={e => setTodo(e.target.value)}/>
            </div>
                <ul className="items">
                    <TodoItem id={1}/>
                    <TodoItem id={2}/>
                    <TodoItem id={3}/>
                    <TodoItem id={4}/>
                </ul>
                    <footer>
                        <p>7 items left</p>
                        <div>
                        <button className="active">All</button>
                        <button className="active">Active</button>
                        <button className="active">Completed</button>
                        </div>
                        <button>Clear Completed</button>
                    </footer>
        </form>
    )
}