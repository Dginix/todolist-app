import { useState, useRef, useEffect} from "react";
import { TfiWrite } from "react-icons/tfi";
import axios from 'axios';

const baseUrl = 'http://localhost:8080'

const AddTask = ({task, setTask}) => {
    const isMounted = useRef(false);

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [expirationDate, setExpirationDate] = useState('')

    const [newTask, setNewTask] = useState({})

    const [errorText, setErrorText] = useState('');

    const clickHandler = event => {
        event.preventDefault();

        if(title === '' || description === '' || expirationDate === '') {
            setErrorText("fileds cannot be empty")
        }
        else {
            setTask([...task, newTask])
            event.target.reset();
            setErrorText('')
            setTitle('')
            setDescription('')    

            axios.post(baseUrl + '/task', newTask)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }

    }

    useEffect(() => {   
        if (isMounted.current) {
            setNewTask({
                title: title, 
                description: description,
                creationDate: new Date().toLocaleString(),
                expirationDate: new Date(expirationDate).toLocaleString(),
            })
        } else {
          isMounted.current = true;
        }
      }, [title, description, expirationDate]);
    
    return(
        <div className="addTask">
            <form className="addTaskForm" onSubmit={clickHandler}>
                <input type='text' placeholder="Title" onChange = { (e)=>setTitle(e.target.value) } />
                <input type='text' placeholder="Descriptrion" onChange = { (e)=>setDescription(e.target.value) } />
                <input type="datetime-local" onChange = { (e)=>setExpirationDate(e.target.value) } />
                {errorText !== '' && <span className="errorTextField">{errorText}</span> }
                <button type="submit">
                    <TfiWrite/>
                    Add task
                </button>
            </form>
        </div>
    )
}

export default AddTask