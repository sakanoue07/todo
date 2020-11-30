import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext';


const Task = ({task}) => {
    const {removeTask, findItem} = useContext(TaskListContext);

    return (
        <li className='list_item'>
            <span>{task.title}</span>
            <div>
                <button 
                    onClick={() => removeTask(task.id)}
                    className='btn_delete task_btn'
                ><i className="fas fa-trash-alt"></i></button>
                <button 
                    className='btn_edit task_btn'
                    onClick={() => findItem(task.id)}
                ><i className="fas fa-pen"></i></button>
            </div>
            
        </li>
    )
}

export default Task
