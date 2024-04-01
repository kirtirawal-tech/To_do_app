
import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './redux/actions';

const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (taskText) => {
    dispatch(addTask(taskText));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
