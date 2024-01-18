import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti'
import { FaClock, FaEdit, FaTrash } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

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
      <div className="name" style={{
        backgroundColor: task.completed? 'var(--color-card-header-completed)': ((new Date(task.dueDate)) < Date.now())? 'var(--color-card-header-due)': 'var(--color-card-header-active)'
      }}>
        <h3>{task.name}</h3>
        <i onClick={() => setMenu(!menu)}><HiDotsVertical /></i>
      </div>
      <div className="description">
        <p>{task.description}</p>
        {
          menu && 
          <div className='menu'>
            {
              task.completed
              ?<i onClick={() => {
                handleMarkAs();
                setMenu(!menu);
                }}> <FaClock /> Mark As Pending </i>
              : <i onClick={() => {
                handleMarkAs();
                setMenu(!menu);
                }}> <TiTick /> Mark As Complete </i>
            }
            <i onClick={() => {
              setTaskId(task._id);
              setFormHeading('Edit Task');
              setForm(true);
              setMenu(!menu);
              }}><FaEdit /> Edit</i>

            <i onClick={() => {
              handleDelete();
              setMenu(!menu);
              }}><FaTrash /> Delete</i>
          </div>
        }
      </div>
      <div className="card-footer">
        <p>{(new Date(task.dueDate)).toLocaleDateString()} {(new Date(task.dueDate)).toLocaleTimeString()}</p>
        <p>{task.completed? <i> <TiTick /> completed</i>: task.overDue? <div className='overdue'><img src="/overdue.png" alt="" /><i>&nbsp;overdue</i></div>: <i> <FaClock /> pending</i>}</p>
      </div>
    </div>
  )
}

export default Card
