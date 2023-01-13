import React from "react"
import { VscClose, VscEdit } from "react-icons/vsc";

const Task = ({data, deleteTask}) => {
    return (
        <div className="task">
            <div className="taskTitle">{data.title}</div>
            <div className="editTaskIconWrapper">
                <VscEdit className="editTaskIcon" />
            </div>
            <div className="deleteTaskIconWrapper">
                <VscClose className="deleteTaskIcon" onClick={() => deleteTask(data.id)} />
            </div>
            <div className="taskDescription">{data.description}</div>
        </div>
    )
}

export default Task