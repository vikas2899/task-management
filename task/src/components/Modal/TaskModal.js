import React, { useState } from 'react';
import './TaskModal.css';

function TaskModal({ onAddTaskSubmit, onModalClose }) {
  const [newTodo, setNewTodo] = useState({
    id: new Date().getTime().toString(),
    title: '',
    dueby: '',
    priority: '',
    description: '',
  });

  const onTodoSubmit = () => {
    if (
      newTodo.title === '' ||
      newTodo.description === '' ||
      newTodo.dueby === '' ||
      newTodo.priority === ''
    ) {
      alert('Please fill all the details');
      return;
    }
    onAddTaskSubmit(newTodo);
  };

  return (
    <div className='modal-container'>
      <div className='model-header'>
        <h1 className='model-heading'>Add Task</h1>
        <span className='model-close' onClick={onModalClose}>
          X
        </span>
      </div>
      <div className='model-content'>
        <span className='model-row'>
          <label className='model-title'>Title</label>
          <input
            type='text'
            className='model-input'
            placeholder='add title.'
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          />
        </span>

        <span className='model-row'>
          <label className='model-title'>Description</label>
          <textarea
            type='text'
            className='model-input'
            placeholder='add description.'
            rows={5}
            onChange={(e) =>
              setNewTodo({ ...newTodo, description: e.target.value })
            }
          />
        </span>

        <span className='model-row'>
          <label className='model-title'>Due Date</label>
          <input
            type='date'
            className='model-input'
            onChange={(e) => setNewTodo({ ...newTodo, dueby: e.target.value })}
          />
        </span>

        <span className='model-row'>
          <label className='model-title'>Priority</label>
          <select
            type='date'
            className='model-input'
            onChange={(e) =>
              setNewTodo({ ...newTodo, priority: e.target.value })
            }
          >
            <option value=''>- Select -</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Urgent</option>
          </select>
        </span>

        <span className='model-row'>
          <button className='modal-addBtn' onClick={onTodoSubmit}>
            Add
          </button>
        </span>
      </div>
    </div>
  );
}

export default TaskModal;
