import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg';
import {useHistory} from 'react-router-dom';

import './Task.css';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const history = useHistory();

    const handleTaskDetailsCLick = () => {
        history.push(`/${task.title}`)
    }

    return (
        <div className='task-container'
            style={task.complete ? { borderLeft: "6px solid #7fff00" } : {}}
        >

            <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className='buttons-container'>
               <button className='remove-task-button' 
               onClick={() => handleTaskDeletion(task.id)}
               >
                   <CgClose />
               </button>

               <button className='see-task-details-button' onClick={handleTaskDetailsCLick} 
              
               >
                   <CgInfo />
               </button>
            </div>

        </div>      
    );
}

export default Task;