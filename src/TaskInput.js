import React, { useState } from 'react';
import './TaskInput.css';

const TaskInput = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      onAddTask(taskText);
      setTaskText('');
    }
  };

  return (
    <div className="input-container"> {/* Apply CSS class */}
      <input
        type="text"
        placeholder="Enter a task"
        value={taskText}
        onChange={handleInputChange}
        className="task-input" 
      />
      <button onClick={handleAddTask} className="add-task-btn">Add Task</button> {/* Apply CSS class */}
    </div>
  );
};

export default TaskInput;
