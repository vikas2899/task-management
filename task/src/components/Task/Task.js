import React, { useEffect, useState } from 'react';
import TaskList from '../TaskList/TaskList';
import TaskModal from '../Modal/TaskModal';

import { service } from '../../service/service';
import './Task.css';

function Task({ showModel, setShowModel }) {
  const [todoData, setTodoData] = useState([]);

  const getAllTodos = async () => {
    const response = await service.get('/');
    setTodoData(response?.data);
  };

  const onAddTaskClick = () => {
    setShowModel(true);
  };

  const onAddTaskSubmit = async (task) => {
    const response = await service.post('/', task);
    if (response?.status === 201) {
      await getAllTodos();
    }
    setShowModel(false);
  };

  const onUpdateStatus = async (data) => {
    const response = await service.patch(`/${data.id}`, {
      status: data.status,
    });
    if (response.status === 200) {
      await getAllTodos();
    }
  };

  const onDeleteTask = async (id) => {
    const response = await service.delete(`/${id}`);
    if (response.status === 200) {
      await getAllTodos();
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <div className='task-container'>
      <button className='task-addBtn' onClick={onAddTaskClick}>
        Add Task
      </button>
      <div className='task-wrapper'>
        <TaskList
          data={todoData}
          onUpdateStatus={onUpdateStatus}
          onDeleteTask={onDeleteTask}
        />
      </div>
      {showModel && (
        <div className='task-add-model'>
          <TaskModal
            onAddTaskSubmit={onAddTaskSubmit}
            onModalClose={() => setShowModel(false)}
          />
        </div>
      )}
    </div>
  );
}

export default Task;
