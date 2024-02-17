// Tasks.js
import React, { useState } from 'react';

function Task({ task, onComplete, onEdit }) {
    return (
        <div className="flex items-center justify-between p-2 bg-gray-100 rounded-lg m-1">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onComplete(task.id)}
                    className="mr-2"
                />
                <span className={`${task.completed ? 'line-through' : ''} flex-grow`}>{task.text}</span>
            </div>
            <button onClick={() => onEdit(task)} className="ml-4 text-sm text-blue-500 hover:text-blue-700">Edit</button>
        </div>
    );
}

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [editTask, setEditTask] = useState(null);
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        if (editTask) {
            setTasks(tasks.map(task => task.id === editTask.id ? { ...task, text: taskText } : task));
            setEditTask(null);
        } else {
            const newTask = { id: Date.now(), text: taskText, completed: false };
            setTasks([...tasks, newTask]);
        }
        setTaskText('');
    };

    const handleComplete = (taskId) => {
        setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
    };

    const handleEdit = (task) => {
        setEditTask(task);
        setTaskText(task.text);
    };

    return (
        <div className="border border-gray-200 rounded-lg shadow-sm p-4 mt-4">
            <div className="mb-4">
                <input
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Add a new task or edit selected"
                    className="mr-2 p-2 border border-gray-200 rounded w-full"
                />
                <button onClick={handleAddTask} className="mt-2 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    {editTask ? 'Update Task' : 'Add Task'}
                </button>
            </div>
            <div>
                {tasks.map(task => (
                    <Task key={task.id} task={task} onComplete={handleComplete} onEdit={handleEdit} />
                ))}
            </div>
        </div>
    );
}

export default Tasks;
