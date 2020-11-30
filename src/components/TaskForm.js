import React, {useContext, useState, useEffect} from 'react'
import {TaskListContext} from '../context/TaskListContext';

function TaskForm() {
    const {addTask, clearList, editTask, editItem} = useContext(TaskListContext);

    const [title, setTitle] = useState('')

    const handleChange = e => {
        setTitle(e.target.value)
        console.log(title)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!editItem) {
          addTask(title)
          setTitle('')
        } else {
          editTask(title, editItem.id)
        }
      }
    

    useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log(editItem)
    } else {
      setTitle('')
    }
  }, [editItem])
    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type='text' 
                placeholder='Add Task ...'
                value={title} 
                onChange={handleChange}
                required
                className='task_input' 
            />
            <div className="buttons" >
                <button className="btn add_task_btn" type="submit">
                  {editItem ? 'Edit Task' : 'Add Task'}
                </button>
                <button onClick={clearList} className="btn clear_btn" >Clear</button>
            </div>
        </form>
    )
}

export default TaskForm
