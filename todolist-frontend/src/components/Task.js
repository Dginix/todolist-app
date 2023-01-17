import React from "react"
import { VscClose, VscEdit, VscRemove, VscCheck } from "react-icons/vsc";

const Task = ({data, deleteTask, checkTask}) => {

    const creationDate = new Date(data.creationDate)
    const expirationDate = new Date(data.expirationDate)

    return (
        <div className="task" style={{ textDecoration: data.isDone ? 'line-through' : 'none'}} >
            <div className="taskTitle">
                {data.title}
            </div>
            <div className="editTaskIconWrapper">
                <VscEdit className="editTaskIcon" />
            </div>
            <div className="deleteTaskIconWrapper">
                <VscClose className="deleteTaskIcon" onClick={() => deleteTask(data.id)} />
            </div>
            <div className="checkTaskIconWrapper">
                {data.isDone 
                    ? <VscRemove className="checkTaskIcon" onClick={() => checkTask(data.id)}/>
                    : <VscCheck className="checkTaskIcon" onClick={() => checkTask(data.id)}/>
                }
            </div>
            <div className="taskDescription">
                {data.description}
            </div>
            <div className="taskDateTime">
                <span>
                    Created: {creationDate.toLocaleString()}
                </span>
                <span>
                    Do before: {expirationDate.toLocaleString()}
                </span>
            </div>
        </div>
    )
}

export default Task