import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";

import { handleFormSubmitButton } from '../utils/handleFuncitons'

const Form = ({formHeading, taskId, setForm, setTasks}) => {

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const tasks = await handleFormSubmitButton(e, formHeading, taskId);
            console.log(tasks);
            setTasks(tasks);
        } catch(e) {
            console.log(e)
        }
        setForm(false);
    }

    const stopPropagation = (e) => {
        e.stopPropagation();
      };

  return (
    <div className='modal' onClick={() => setForm(false)}>
        <form onSubmit={handleSubmit} onClick={stopPropagation}>
            <div className='modal-header'>
                <h3 className='form-header'>{formHeading}</h3>
            </div>
                <i className='close-form' title='Close' onClick={() => setForm(false)}><IoIosCloseCircle /></i>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Name: </td>
                        <td><input type="text" name='name' /></td>
                    </tr>
                    <tr>
                        <td>Description: </td>
                        <td><input type="text" name='description' /></td>
                    </tr>
                    <tr>
                        <td>Due Date: </td>
                        <td><input type="datetime-local" name='dueDate' /></td>
                    </tr>
                    {
                        formHeading === 'Edit Task' && 
                        <tr>
                            <td>Completed: </td>
                            <td><input type="checkbox" name='completed' /></td>
                        </tr>
                    }
                    <tr>
                        <td><input type="submit" value={'Submit'} /></td>
                    </tr>
                </tbody>
            </table>
        </form>      
    </div>
  )
}

export default Form
