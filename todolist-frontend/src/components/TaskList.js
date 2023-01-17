import { useState, useEffect } from "react"
import Task from "./Task"
import AddTask from "./AddTask"
import axios from 'axios';

const baseUrl = 'http://localhost:8080'

const TaskList = () => {
    const [task, setTask] = useState(null)
    const [isLoading, setLoading] = useState(true);

    const getTasks = () => {
        axios.get(baseUrl+'/task')
            .then((response) => {
                console.log(response.data)
                setTask(response.data)
                setLoading(false);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        setTask(getTasks())
      }, []);

    const deleteTask = (taskId) => {
        setTask(task.filter(item => item.id !== taskId))
    }

    const checkTask = (taskId) => {
        let newTaskList = [...task]
        let index = newTaskList.findIndex(item => item.id === taskId)
        newTaskList[index].isDone = !newTaskList[index].isDone
        setTask(newTaskList)
    }

    if (isLoading) {
        return <div className="TaskList">Loading...</div>;
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