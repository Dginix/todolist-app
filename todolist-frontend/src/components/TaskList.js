import { useState } from "react"
import Task from "./Task"
import AddTask from "./AddTask"

const TaskList = () => {

    const defaultTaskList = [
        {
            id: 1,
            title: 'task number one',
            description: '1 Lorem ipsum dolor sit amet consectetur adipisicin',
            creationDate: new Date('2023-01-11T16:49:01.001'),
            expirationDate: new Date('2023-02-11T16:49:01.001'),
            isDone: false
        },
        {
            id: 2,
            title: 'task number two',
            description: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit',
            creationDate: new Date('2023-01-11T16:49:01.001'),
            expirationDate: new Date('2023-02-11T16:49:01.001'),
            isDone: false
        },
        {
            id: 3,
            title: 'task number three',
            description: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit',
            creationDate: new Date('2023-01-11T16:49:01.001'),
            expirationDate: new Date('2023-02-11T16:49:01.001'),
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
        //TODO add checked task to end of array
        // let removed = newTaskList.splice(index, 1)[0]
        // newTaskList.push(removed)
        // console.log(newTaskList)
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