import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';

function App() {
  //Main Tasks 
  const [tasks, setTasks] = useState([{
    id : 1,
    taskName : "Task1",
    taskDate : "April 2 , 2 pm",
    reminder : false
  },
  {
    id : 2,
    taskName : "Task2",
    taskDate : "April 4 , 2 pm",
    reminder : false
  },
  {
    id : 3,
    taskName : "Task3",
    taskDate : "Sep 5 , 9pm",
    reminder : true
  },
  {
    id : 4,
    taskName : "Task4",
    taskDate : "April 2 , 2 pm",
    reminder : false
  }]);
  //Add Button Click
  const btnClick = (event) => {
    console.log(event)
  }
  //Toggle task 

  const toggleTask = (id) => {
     console.log(id)
     setTasks(tasks.map((task) => 
       task.id === id ? {...task,reminder :
      !task.reminder} : task 
    ))
  }
  return (
    <div className="App">
      <Header btnClick = {btnClick} />  
      <Tasks tasks = {tasks} setTasks={setTasks} toggleTask={toggleTask}/>
    </div>
    
  );
}
export default App;
