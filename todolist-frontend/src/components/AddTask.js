import { useState, useRef, useEffect} from "react";
import { TfiWrite } from "react-icons/tfi";
import { v4 as uuidv4 } from 'uuid';

const AddTask = ({task, setTask}) => {
    const isMounted = useRef(false);

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [newTask, setNewTask] = useState({})
    const [errorText, setErrorText] = useState('');

    const clickHandler = event => {
        event.preventDefault();

        if(title === '' || description === '') {
            setErrorText("fileds cannot be empty")
        }
        else {
            setTask([...task, newTask])
            event.target.reset();
            setErrorText('')    
        }

    }

    useEffect(() => {   
        if (isMounted.current) {
            setNewTask({
                id: uuidv4(), 
                title: title, 
                description: description,
                creationDate: new Date().toISOString()
            })
        } else {
          isMounted.current = true;
        }
      }, [title, description]);
    
    return(
        <div className="addTask">
            <form className="addTaskForm" onSubmit={clickHandler}>
                <input type='text' placeholder="Title" onChange = { (e)=>setTitle(e.target.value) }/>
                <input type='text' placeholder="Descriptrion" onChange = { (e)=>setDescription(e.target.value) }/>
                <span className="errorTextField">{errorText}</span>
                <button type="submit">
                    <TfiWrite/>
                    Add task
                </button>
            </form>
        </div>
    )
}

export default AddTask