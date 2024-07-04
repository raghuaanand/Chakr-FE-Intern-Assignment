"use client"
import React, { useState } from "react";
import { MdTaskAlt } from "react-icons/md";


interface Task {
    id: number;
    title: string;
    isDone: boolean;
    date?: string;
}

const TodoApp: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [newTaskDate, setNewTaskDate] = useState("");

    const addTask = () => {
        if (newTaskTitle.trim() === "") return;
        const newTask: Task = {
            id: Date.now(),
            title: newTaskTitle,
            isDone: false,
            date: newTaskDate
        };
        setTasks([...tasks, newTask]);
        setNewTaskTitle("");
        setNewTaskDate("");
    };

    const removeTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id: number) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, isDone: !task.isDone } : task)));
    };

    const upcomingTasks = tasks.filter(task => !task.isDone && task.date);
    const unscheduledTasks = tasks.filter(task => !task.isDone && !task.date);
    const doneTasks = tasks.filter(task => task.isDone);

    return (
        <div className="pl-8 rounded-lg">
            <div className="text-sm absolute top-8 left-64 flex items-center gap-2 "><MdTaskAlt /> Tasks</div>
            <div className="flex">
                <div className="flex space-x-4">
                    <button className="border-b-2 border-black" >To do</button>
                    <button className="border-b-2 " >Done</button>
                </div>
            </div>

            <div className="flex space-x-2 mt-4">
                <input
                    type="text"
                    placeholder="Task title"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    className="border p-2 flex-grow w-80"
                />
                <input
                    type="date"
                    value={newTaskDate}
                    onChange={(e) => setNewTaskDate(e.target.value)}
                    className="border p-2"
                />
                <button onClick={addTask} className="bg-blue-500 text-white p-2">Add</button>
            </div>

            <div className="mt-4">
                <h2 className="text-lg font-semibold">Upcoming {upcomingTasks.length}</h2>
                {upcomingTasks.map(task => (
                    <div key={task.id} className="flex justify-between items-center border-b py-2">
                        <input
                            type="checkbox"
                            checked={task.isDone}
                            onChange={() => toggleTaskDone(task.id)}
                            className="mr-2"
                        />
                        <span className="flex-grow">{task.title}</span>
                        {task.date && <span className="text-gray-500">{task.date}</span>}
                        <button onClick={() => removeTask(task.id)} className="text-red-500 ml-2">Remove</button>
                    </div>
                ))}

                <h2 className="text-lg font-semibold mt-4">Unscheduled {unscheduledTasks.length}</h2>
                {unscheduledTasks.map(task => (
                    <div key={task.id} className="flex justify-between items-center border-b py-2">
                        <input
                            type="checkbox"
                            checked={task.isDone}
                            onChange={() => toggleTaskDone(task.id)}
                            className="mr-2"
                        />
                        <span className="flex-grow">{task.title}</span>
                        <button onClick={() => removeTask(task.id)} className="text-red-500 ml-2">Remove</button>
                    </div>
                ))}
            </div>

            <div className="mt-4">
                <h2 className="text-lg font-semibold">Done {doneTasks.length}</h2>
                {doneTasks.map(task => (
                    <div key={task.id} className="flex justify-between items-center border-b py-2">
                        <input
                            type="checkbox"
                            checked={task.isDone}
                            onChange={() => toggleTaskDone(task.id)}
                            className="mr-2"
                        />
                        <span className="flex-grow">{task.title}</span>
                        {task.date && <span className="text-gray-500">{task.date}</span>}
                        <button onClick={() => removeTask(task.id)} className="text-red-500 ml-2">Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoApp;
