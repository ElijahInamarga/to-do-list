import { useState } from 'react';
import './TaskList.css'

export default function TaskList() {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState('');

    // Saves user input into task variable
    function handleChange(input) {
        setTask(input.target.value);
    }

    // Adds new task to taskList and empties the input 
    function handleClick() {
        if(task !== '') {
            setTaskList(prevList => [task, ...prevList]);
            setTask('');
        } else {
            alert('The input is empty. Provide a task before adding');
        }
    }

    function deleteTask(indexToDelete) {
        setTaskList(taskList.filter((_, i) => i !== indexToDelete));
    }

    return (
        <>
            <input type="text" placeholder="Input a task..." onChange={handleChange} value={task}>
            </input>
            <button id="input-button" onClick={handleClick}>Add</button>
            <div id="task-container">
                <ul>
                    {taskList.map((task, i) =>  <>
                                                    <li>
                                                        <div id="task">
                                                            <span>{i + 1}. {task}</span><button onClick={() => deleteTask(i)}>X</button>
                                                        </div>
                                                    </li>
                                                </>)}
                </ul>
            </div>
        </>
    );
}