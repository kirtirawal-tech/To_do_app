
import React from 'react';
import './TaskList.css'; 

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-item"> 
            <span className="task-text">{task.text}</span>
            <button onClick={() => onDeleteTask(task.id)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
