import React from "react"
import { VscClose, VscEdit, VscRemove, VscCheck } from "react-icons/vsc";

const Task = ({data, deleteTask, checkTask}) => {
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
                    Created: {data.creationDate}
                </span>
                <span>
                    Do before: {data.expirationDate}
                </span>
            </div>
        </div>
    )
}

export default Task