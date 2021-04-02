import Task from './Task';

const Tasks = (params) => {
    //delete Task
    const deleteTask = (id) => {
        params.setTasks(params.tasks.filter((task) => {
            return task.id !== id
            //setTasks()
        }));
    }
    return (
        <div className="container">
          <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6 tasksClass">
            { params.tasks.length > 0 ? params.tasks.map((task,index) => {
                return <Task task={task}  key={index} deleteTask={deleteTask} 
                toggleTask={params.toggleTask}/>
            })
        : <h3>Nothing To Show</h3>}      
              </div>
              <div className="col-md-3"></div>
          </div>
      </div>  
    )
}

export default Tasks
