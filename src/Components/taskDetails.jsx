import React from "react";
import { useParams, useHistory } from "react-router-dom"


import './taskDetails.css'
import Button from "./button";

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleTaksButtonClick = () => {
        history.goBack()
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleTaksButtonClick}>Voltar</Button>
            </div>

            <div className='task-details-container'>
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo numquam, 
                    accusantium qui provident perferendis dolore facere minus expedita dolores magni, 
                    ratione in aliquid quod doloremque voluptates ab alias magnam!
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;