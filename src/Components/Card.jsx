import React, { useState } from 'react'
import { handleDeleteButton, handleMarkAsButton } from '../utils/handleFuncitons';

const Card = ({task, setTasks, setForm, setTaskId, setFormHeading}) => {
  const [menu, setMenu] = useState(false);

  const handleMarkAs = async () => {
    try {
      const tasks = await handleMarkAsButton(task._id, !task.completed);
      setTasks(tasks);
    } catch(e) {
      console.log(e)
    }
  }

  const handleDelete = async () => {
    try {
      const tasks = await handleDeleteButton(task._id);
      setTasks(tasks);
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <div className='card'>
      <div className="name">
        <h3>{task.name}</h3>
        <i onClick={() => setMenu(!menu)}>menu</i>
      </div>
      <div className="description">
        <p>{task.description}</p>
        {
          menu && 
          <div className='menu'>
            <i onClick={() => {
              handleMarkAs();
              setMenu(!menu);
              }}>Mark As {!task.completed? 'Complete': 'Pending'}</i>

            <i onClick={() => {
              setTaskId(task._id);
              setFormHeading('Edit Task');
              setForm(true);
              setMenu(!menu);
              }}>Edit</i>

            <i onClick={() => {
              handleDelete();
              setMenu(!menu);
              }}>Delete</i>
          </div>
        }
      </div>
      <div className="card-footer">
        <p>{(new Date(task.dueDate)).toLocaleDateString()} {(new Date(task.dueDate)).toLocaleTimeString()}</p>
        <p>{task.completed? <i>completed</i>: <i>pending</i>}</p>
      </div>
    </div>
  )
}

export default Card
