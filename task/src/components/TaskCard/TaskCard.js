import React from 'react';
import './TaskCard.css';

function TaskCard({ todo, onUpdateStatus, onDeleteTask }) {
  const onTodoDelete = () => {
    const prompt = window.confirm('Do you really want to delete this task?');
    if (prompt) {
      onDeleteTask(todo.id);
    }

    return;
  };

  return (
    <div className='taskcard-container'>
      <div className='taskcard-check'>
        <input
          type='checkbox'
          id='taskselect'
          defaultChecked={todo.status === 'completed'}
          onClick={() =>
            onUpdateStatus({
              id: todo.id,
              status: todo.status === 'completed' ? 'pending' : 'completed',
            })
          }
        />
      </div>
      <div className='taskcard-details'>
        <label
          className={`taskcard-details-title ${
            todo.status === 'completed' ? 'taskcard-completed' : ''
          }`}
          htmlFor='taskselect'
        >
          {todo.title}
        </label>
        <p className='taskcard-details-due'>
          Due by {todo.dueby} | {todo.priority}
        </p>
      </div>
      <div className='taskcard-controls'>
        <button className='taskcard-control-btn delete' onClick={onTodoDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
