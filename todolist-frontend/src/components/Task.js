import React from "react"
import { VscClose, VscEdit } from "react-icons/vsc";

class Task extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="task">
                <div className="taskTitle">{this.props.task.title}</div>
                <div className="editTaskIconWrapper">
                    <VscEdit className="editTaskIcon"/>
                </div>
                <div className="deleteTaskIconWrapper">
                    <VscClose className="deleteTaskIcon"/>
                </div>
                <div className="taskDescription">{this.props.task.description}</div>
            </div>
        )
    }
}

export default Task