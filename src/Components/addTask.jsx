import React, {useState} from 'react';

import './addTask.css';

import Button from './button'

const Addtask = ({handleTaskaddition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskaddition(inputData)
        setInputData("");
    }

    return (
        <div className='add-task-container'>
            <input onChange={handleInputChange} 
            value={inputData} 
            className='add-task-input' type='text' 
            />
            
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
}

export default Addtask;