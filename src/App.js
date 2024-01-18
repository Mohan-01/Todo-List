import { useEffect, useState } from 'react';
import Header from './Components/Header';
import {getAllTodos } from './utils/handleFuncitons'
import './App.css';
import Card from './Components/Card';
import Form from './Components/Form';

function App() {

  const [tasks, setTasks] = useState(null);
  const [form, setForm] = useState(false);
  const [formHeading, setFormHeading] = useState('Add Task');
  const [taskId, setTaskId] = useState(null);

  useEffect(() => {
    async function getData() {
      const tasks = await getAllTodos()
      setTasks(tasks);
    }
    getData();
  }, [])

  return (
    <div className="main">
      <Header setForm={setForm} />
      {form && <Form formHeading={formHeading} taskId={taskId} setForm={setForm} setTasks={setTasks} />}
      <div className="tasks">
        {
          tasks && tasks.map(task => <Card task={task} setTasks={setTasks} setTaskId={setTaskId} setFormHeading={setFormHeading} setForm={setForm} key={task._id} />)
        }
      </div>
    </div>
  );
}

export default App;
