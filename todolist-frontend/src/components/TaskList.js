import { useState } from "react"
import Task from "./Task"
import AddTask from "./AddTask"
import { v4 as uuidv4 } from 'uuid';

const TaskList = () => {

    const defaultTaskList = [
        {
            id: uuidv4(),
            title: 'task number one',
            description: '1 Lorem ipsum dolor sit amet consectetur adipisicin',
            creationDate: new Date('2023-01-11T16:49:01.001').toLocaleString(),
            expirationDate: new Date('2023-02-11T16:49:01.001').toLocaleString(),
            isDone: false
        },
        {
            id: uuidv4(),
            title: 'task number two',
            description: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit',
            creationDate: new Date('2023-01-11T16:49:01.001').toLocaleString(),
            expirationDate: new Date('2023-02-11T16:49:01.001').toLocaleString(),
            isDone: false
        },
        {
            id: uuidv4(),
            title: 'task number three',
            description: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit',
            creationDate: new Date('2023-01-11T16:49:01.001').toLocaleString(),
            expirationDate: new Date('2023-02-11T16:49:01.001').toLocaleString(),
            isDone: false
        },
    ]

    const [task, setTask] = useState(defaultTaskList)
    console.log(task)

    const deleteTask = (taskId) => {
        setTask(task.filter(item => item.id !== taskId))
    }

    const checkTask = (taskId) => {
        let newTaskList = [...task]
        let index = newTaskList.findIndex(item => item.id === taskId)
        newTaskList[index].isDone = !newTaskList[index].isDone
        setTask(newTaskList)
    }

    return (
        <div className="TaskList">
            <AddTask 
                task={task} 
                setTask={setTask} 
            />
            {task.map((item) => (
                <Task 
                    key={item.id} 
                    data={item} 
                    deleteTask={deleteTask}
                    checkTask={checkTask}
                />
            ))}
        </div>)
}

export default TaskList