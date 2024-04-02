import React from 'react';
import TaskCard from '../TaskCard/TaskCard';
import './TaskList.css';

function TaskList({ data, onUpdateStatus, onDeleteTask }) {
  return (
    <div className='tasklist-container'>
      <h3 className='tasklist-heading'>Task List</h3>
      <div className='tasklist-wrapper'>
        {data.length === 0 && <p>No task to show</p>}
        {data &&
          data.map((d) => (
            <TaskCard
              todo={d}
              key={d.id}
              onUpdateStatus={onUpdateStatus}
              onDeleteTask={onDeleteTask}
            />
          ))}
      </div>
    </div>
  );
}

export default TaskList;
