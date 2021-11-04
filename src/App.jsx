import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Header from './Components/header';
import Addtask from './Components/addTask';
import Tasks from './Components/Tasks';
import TaskDetails from './Components/taskDetails'

import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'jogar lol',
      completed: false
    },
    {
      id: '2',
      title: 'ir discord com os crias',
      completed: true
    }
  ])

  useEffect(() => {
      const fetcthTasks = async () => {
        const { data } = await axios.get(
          'https://jsonplaceholder.cypress.io/todos?limit=10')

          setTasks(data)
      };

      fetcthTasks()
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return { ...task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks);
  }

  const handleTaskaddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    
    setTasks(newTasks)
  }

  return (
    <Router>
      <div className='container'>
        <Header />
       <Route path="/" exact render={() => (
         <>
         <Addtask handleTaskaddition={handleTaskaddition} />
        <Tasks 
        tasks={tasks} 
        handleTaskClick={handleTaskClick}
        handleTaskDeletion={handleTaskDeletion}
        />
         </>
       )} />
       <Route path="/:taskTitle" exact component={TaskDetails} />    
      </div>
    </Router>
  );
}

export default App;

