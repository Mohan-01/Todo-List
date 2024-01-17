import axios from "./axios";

export async function getAllTodos() {
    try {
        const todos = await axios.get();
        console.log({todos})
        return todos.data;
    } catch (e) {
        console.log(e)
    }
}

export async function handleMarkAsButton(id, completed) {
    try {
        const todos = await axios.patch(`/${id}`, {completed});
        return todos.data;
    } catch (e) {
        console.log(e)
    }
}

export async function handleDeleteButton(id) {
    try {
        const todos = await axios.delete(`/${id}`);
        return todos.data;
    } catch (e) {
        console.log(e)
    }
}

export async function handleFormSubmitButton(e, formHeading, taskId) {
    try {
        const body = {};
        const name = e.target.name.value;
        const description = e.target.description.value;
        const dueDate = e.target.dueDate.value;
        const completed = e.target.completed?.checked;
        console.log('completed: ', e.target.completed)
        if(name) body.name = name;
        if(description) body.description = description;
        if(dueDate) body.dueDate = dueDate;
        if(completed) body.completed = completed;
        console.log({body})
        if(formHeading === 'Edit Task') {
            const todos = await axios.patch(`/${taskId}`, body)
            return todos.data;
        } else {
            const todos = await axios.post('/', body);
            return todos.data;
        }
    } catch(e) {
        console.log(e)
    }
}