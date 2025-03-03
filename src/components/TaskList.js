import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext';
import Task from './Task';
const TaskList = () => {
    const { tasks } = useContext(TaskListContext);
    return (
        <div>
            {tasks.length ? (
                <ul className='list'>
                {tasks.map((task) => {
                    return ( 
                        <Task task={task}  key={task.id}/>
                        )
                    })}
                </ul>
            ):(
                <div className='no_tasks'>No Tasks</div>
            )}
            
        </div>
    )
}

export default TaskList
