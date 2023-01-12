import React from "react"
import { VscClose, VscEdit } from "react-icons/vsc";

class Task extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="task">
                <div className="taskTitle">{this.props.task.title}</div>
                <div className="taskDescription">{this.props.task.description}</div>
                <VscClose className='deleteTaskIcon'/>
                <VscEdit className='editTaskIcon'/>
            </div>
        )
    }
}

export default Task