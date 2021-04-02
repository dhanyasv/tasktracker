import { MdDelete } from "react-icons/md";

const Task = ({task,deleteTask,toggleTask}) => {
    return (
        <div className={`taskClass ${task.reminder ? 'reminderClass' : ''}`}    
        onDoubleClick={() => {
            toggleTask(task.id)
        }}>   
                <h3>{task.taskName}</h3>
                <p>{task.taskDate}</p>
                <MdDelete onClick={() => deleteTask(task.id)} />
        </div>
    )
}

export default Task
