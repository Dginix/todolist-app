import React from "react"
import { VscClose, VscEdit, VscRemove, VscCheck } from "react-icons/vsc";

const Task = ({data, deleteTask, checkTask}) => {
    return (
        <div className="task">
            <div className="taskTitle" style={{ textDecoration: data.isDone ? 'line-through' : 'none'}} >
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
            <div className="taskDescription" style={{ textDecoration: data.isDone ? 'line-through' : 'none'}} >
                {data.description}
            </div>
        </div>
    )
}

export default Task