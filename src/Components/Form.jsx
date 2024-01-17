import React from 'react'
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

  return (
    <div className='modal'>
        <form onSubmit={handleSubmit}>
        <div className='modal-header'>
            <h3>{formHeading}</h3>
            <i className="fas fa-times" onClick={() => setForm(false)}></i>
        </div>
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
                    <tr>
                        <td>Completed: </td>
                        <td><input type="checkbox" name='completed' /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value={'Submit'} /></td>
                    </tr>
                </tbody>
            </table>
        </form>      
    </div>
  )
}

export default Form
